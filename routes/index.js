var express = require('express');
var router = express.Router();
var movieRoute = require('./movies.js');

router.use('/movies', movieRoute);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
