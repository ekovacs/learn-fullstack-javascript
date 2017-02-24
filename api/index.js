import express from 'express';
import data from '../src/testData';

const router = express.Router();

const contests = data.contests.reduce((result, contest) => {
  result[contest.id] = contest;
  return result;
}, {});

router.get('/contests', (req, resp) => {
  resp.send({ 
    contests
  });
});

export default router;