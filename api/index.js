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


router.get('/contests/:contestId', (req, resp) => {
  
  let contest = contests[req.params.contestId];
  contest.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  resp.send(contest);
});

export default router;