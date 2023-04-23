const express = require('express');
const { emission_data } = require('../data/emission_data');
const dataController = require('../controllers/dataController');
const path = require('path');

let router = express.Router();

/* GET home page. */
// router.get('/', (req, res, next) => {
//   return res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
//   // return res.send('index');
// });

router.get('/models', (req, res, next) => {
  const models = emission_data.map(model => `${model.Make} ${model.Model}`);
  return res.json({
    models,
  });
});

router.get('/rankData', async (req, res, next) => {
  console.log(req.query);
  let { start, end, model } = req.query;

  try {
    start = JSON.parse(start);
    end = JSON.parse(end);
  } catch (e) {
    e = new Error('Start and end required');
    e.status = 400;
    next(e);
  }

  try {
    const { scores, best_method, stats } = await dataController.rankData(start, end, model);
    return res.json({
      scores: scores.slice(0, 15),
      best_method,
      stats
    });
  } catch (err) {
    console.log(err);
    next(new Error('failed to rank data'));
  }
});

module.exports = router;