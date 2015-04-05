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
  res.sendFile(path.join(__dirname, '../public', 'twilml/callind.xml'));
});

module.exports = router;
