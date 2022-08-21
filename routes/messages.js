const express = require("express");
const router = express.Router();
const Sermon = require("../Models/sermonSchema");

router.use(function(req, res, next){
    console.log(req.url, "welcome to the other router");
    next();
})
const newMessage = new Sermon ({
    messageTitle: "FOLLOWING GOD'S PLAN FOR YOUR LIFE",
    messageDetails: "Hello Brethren, Most of us have a hard time relinquishing control to God. and it's because deep down, we don't really trust that His plans for us are for our greatest good? We need to repent, and bring all to His loving guidance. Join us in this series",
    messagePreacher: "BibleStudy Unit",
    messageAudio: "message"
});
const newMessage2 = new Sermon ({
    messageTitle: "FOLLOWING GOD's leading",
    messageDetails: "Hello Brethren, Most of us have a hard time relinquishing control to God. and it's because deep down, we don't really trust that His plans for us are for our greatest good? We need to repent, and bring all to His loving guidance. Join us in this series",
    messagePreacher: "BibleStudy Unit",
    messageAudio: "message"
});

const savedMessage = [newMessage, newMessage2]
// Sermon.insertMany(savedMessage, (err) => {
//     if(err){
//         console.log(err);
//     }else{
//         console.log("saved");
//     }
// })


router
    .route("/")
    .get((req, res) =>{
        Sermon.find((err, sermon) =>{
            res.render("messages", {
                sermon: sermon
            })
        })
    })
    .post((req, res) => {

    });

module.exports = router;