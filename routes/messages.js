const express = require("express");
const router = express.Router();
const Service = require("../Models/serviceSchema");

router.use(function(req, res, next){
    console.log(req.url, "welcome to the other router");
    next();
})

router
    .route("/")
    .get((req, res) =>{
        Service.findOne()
        res.render("messages")
    })
    .post((req, res) => {

    });

module.exports = router;