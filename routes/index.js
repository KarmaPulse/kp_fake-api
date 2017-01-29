var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/tweets', (req, res, next) => {
    var url = 'http://kboard-feed-api-1933259418.us-west-2.elb.amazonaws.com/v1/searches/57c71b6463aa2e1700ae4aa9/tweets?limit=10';

    request(url, (e, r, body) => {
        res.send({
            json: JSON.parse(body)['data']
        });
    });
});

module.exports = router;
