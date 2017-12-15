var express = require('express');
var router = express.Router();
var urls = require('../mongo/mongo.js');


router.get('/:id', function (req, res, next) {

    // res.send(req.params.id);

    urls.gener.findOne({ localUrl: 'localhost:8000/link/' + req.params.id })
        .exec(function(err, urls) {

            if (err) return next(err);
            console.log(urls);
            res.redirect(urls.url);
        });


});

module.exports = router;

