let express = require('express');
let burger = require('../models/burger');

let router = express.Router();

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        let hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/", function (req, res) {
    burger.insertOne(req.body.burger_name, function () {
        res.redirect("/");
    });
});

router.put("/:id", function (req, res) {
    let id = req.params.id;

    burger.updateOne(id, function () {
        devoured = true;
        res.redirect("/");
    });
});

module.exports = router;