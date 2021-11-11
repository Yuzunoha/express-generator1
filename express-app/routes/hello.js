var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.render('hello', {
    msg: 'Hello World',
  });
});

module.exports = router;
