const express = require("express");
const router = express.Router();
const Exco = require("../Models/excos");

router.use(function(req, res, next){
    console.log(req.url, "welcome to the abouts router");
    next();
})

router
    .route("/")
    .get((req, res) =>{
        Exco.find((err, excos) => {
            res.render("about", {
                exco: excos
            })
        })
    })
    .post((req, res) => {

    });

module.exports = router;