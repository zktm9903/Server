var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/AS', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send("1+1");
});

router.get('/BS', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send("Bye");
});module.exports = router;
