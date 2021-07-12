var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/login', (req, res, next) => {
  res.render('login');
})

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
