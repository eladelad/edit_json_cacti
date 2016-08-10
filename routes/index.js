var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    var fs = require('fs');
    var fileName = '../graphs.json';
    var currentJson = require(fileName);
    res.render('index', {title: 'Graph Management', graphs: currentJson.graphs });
});


module.exports = router;
