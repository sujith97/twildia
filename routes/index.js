var express = require('express'),
	router = express.Router(),
	path = require('path');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/incoming', function(req, res) {
  res.sendFile(path.join(__dirname, '../public', 'twilml/incoming.xml'));
});

router.get('/process', function(req, res) {
	console.log('Request received to process: ' + req.query.Digits);
	var option = req.query.Digits;
	res.sendFile(path.join(__dirname, '../public', 'twilml/capco.xml'));
	
});

module.exports = router;
