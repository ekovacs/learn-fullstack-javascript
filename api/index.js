import express from 'express';
import { MongoClient } from 'mongodb';
import assert from 'assert';
import config from '../config';

const router = express.Router();



let mdb;

MongoClient.connect(config.mongodbUri, (err, db) => {
  assert.equal(null, err);



  mdb = db;
});

router.get('/contests', (req, resp) => {
  
  // empty objects to collect the results from the mongo query
  let contests = {};
  
  mdb.collection('contests')
    .find({})
    .project({
      id: 1,
      categoryName: 1,
      contestName: 1
    })
    .each((err, contest) => {
      assert.equal(null, err);
      if (!contest) {
        resp.send({contests});
        return;
      }
      contests[contest.id] = contest;
    });
  
});


router.get('/contests/:contestId', (req, resp) => {
  mdb.collection('contests')
    .findOne({id: Number(req.params.contestId)})
    .then(contest => resp.send(contest))
    .catch(console.error);
});

export default router;