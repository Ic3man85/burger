let express = require('express');

let burger = require('../models/burger');

let router = express.Router();


router.get('/', function(req, res) {
    burger.selectAll(function(data) {
        let burgerObj = {
            burgers: data
        };
        console.log(burgerObj);
        res.render('index', burgerObj);
    });
});

router.post('/', function(req, res) {
    burger.insertOne(req.body.burger_name, function() {
        res.redirect('/');
    });
});

router.put('/:id', function(req, res) {
    burger.updateOne(req.params.id, function() {
        res.redirect('/');
    });
});

module.exports = router;