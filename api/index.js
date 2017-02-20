import express from 'express';
import data from '../src/testData';

const router = express.Router();

router.get('/contests', (req, resp) => {
    resp.send({ contests: data.contests});
});

export default router;