var express = require('express');
var router = express.Router();

router.post('/login', (req, res, next) => {
  return res.send('login');
});

router.post('/register', (req, res, next) => {
  return res.send('register');
});

module.exports = router;