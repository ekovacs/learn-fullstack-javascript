import express from 'express';
import { MongoClient, ObjectID } from 'mongodb';
import assert from 'assert';
import config from '../config';

const router = express.Router();



let mdb;

MongoClient.connect(config.mongodbUri, (err, db) => {
  assert.equal(null, err);

  mdb = db;
});


router.get('/names/:nameIds', (req, resp) => {
  let names = {};
  const nameIds = req.params.nameIds.split(',').map(ObjectID);
  mdb.collection('names')
    .find({ _id: { $in: nameIds } })
    .each((err, name) => {
      assert.equal(err, null);
      if (!name) {
        return resp.send({ names });
      }
      names[name._id] = name;
    });
});

router.get('/contests', (req, resp) => {

  // empty objects to collect the results from the mongo query
  let contests = {};

  mdb.collection('contests')
    .find({})
    .project({
      categoryName: 1,
      contestName: 1
    })
    .each((err, contest) => {
      assert.equal(null, err);
      if (!contest) {
        resp.send({ contests });
        return;
      }
      contests[contest._id] = contest;
    });

});


router.get('/contests/:contestId', (req, resp) => {
  mdb.collection('contests')
    .findOne({ _id: ObjectID(req.params.contestId) })
    .then(contest => resp.send(contest))
    .catch(console.error);
});

export default router;