const express = require("express");
const router = express.Router();

router.use(function(req, res, next){
    console.log(req.url, "welcome to the other router");
    next();
})

router
    .route("/")
    .get((req, res) =>{
        res.render("messages")
    })
    .post((req, res) => {

    });

module.exports = router;