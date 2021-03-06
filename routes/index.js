var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});

router.get('/home', function(req, res, next) {
	res.render('home');
});

router.get('/officers', function(req, res, next) {
	res.render('officers');
});

router.get('/about', function(req, res, next) {
	res.render('about');
});

router.get('/join', function(req, res, next) {
	res.render('join');
});

router.get('/training', function(req, res, next) {
	res.render('training');
});

router.get('/photos', function(req, res, next) {
	res.render('photos');
})

module.exports = router;
