const express = require('express');
const dataController = require('../controllers/dataController');

let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  // return res.sendFile('../build/index.html');
  return res.send('index');
});

router.get('/rankData', async (req, res, next) => {
  let { start, end } = req.query;

  try {
    start = JSON.parse(start);
    end = JSON.parse(end);
  } catch (e) {
    e = new Error('Start and end required');
    e.status = 400;
    next(e);
  }

  try {
    const { scores, best_route } = await dataController.rankData(start, end);
    return res.json({
      scores: scores.slice(0, 15),
      best_route,
    });
  } catch (err) {
    console.log(err);
    next(new Error('failed to rank data'));
  }
});

module.exports = router;