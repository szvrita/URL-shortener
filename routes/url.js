var express = require('express');
var router = express.Router();
var urls = require('../mongo/mongo.js');


router.post('/', function(req, res, next){
    console.log(req.body);
    urls.gener.create({
        url: req.body.url
    }, function (err, data) {
        if (!err) {
            res.status(200);
            res.json({
                url: data.url,
                message: data.localUrl
            });
        }

});

});



module.exports = router;
