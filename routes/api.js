/**
 * Created by elad on 8/10/16.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/add', function(req, res, next) {
    var fs = require('fs');
    var fileName = '../graphs.json';
    var fileWrite = 'graphs.json'
    var currentJson = require(fileName);

    console.log(JSON.stringify(currentJson, null, 2));
    currentJson.graphs[req.query.name] = req.body;

    fs.writeFile(fileWrite, JSON.stringify(currentJson, null, 2), function (err) {
        if (err) return console.log(err);
        console.log(JSON.stringify(currentJson, null, 2));
        console.log('writing to ' + fileName);
    });
    res.json({'status': 0})
});

router.post('/del', function(req, res, next) {
    var fs = require('fs');
    var fileName = './graphs.json';
    var currentJson = require(fileName);
    delete currentJson.graphs[req.query.name];

    fs.writeFile(fileName, JSON.stringify(currentJson), function (err) {
        if (err) return console.log(err);
        console.log(JSON.stringify(currentJson));
        console.log('writing to ' + fileName);
    });
});


module.exports = router;
