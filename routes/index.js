var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/home', function(req, res, next) {
	res.render('home');
});

router.get('/officers', function(req, res, next) {
	res.render('officers');
});

router.get('/info', function(req, res, next) {
	res.render('info');
});

router.get('/join', function(req, res, next) {
	res.render('join');
});

router.get('/training', function(req, res, next) {
	res.render('training');
})

module.exports = router;
