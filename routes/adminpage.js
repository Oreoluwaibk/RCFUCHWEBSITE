const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const Exco = require("../Models/excos");
const Service = require("../Models/serviceSchema");
const Sermon = require("../Models/sermonSchema");

router.use(function(req, res, next){
    console.log(req.url, "welcome to the adminpage router");
    next();
})


router
    .route("/")
    .get((req, res) =>{
        Service.find((err, service) => {
            Sermon.find((err, sermon) =>{
                Exco.find((err, excos) => {
                    res.render("adminpage", {
                        exco: excos,
                        service: service,
                        sermon: sermon
                    })
                })  
            })   
        }) 
    })
    .post((req, res) => {
        const addProgram = req.body.add_program_button;
        const removeProgram = req.body.remove_service;
        const addMessage = req.body.addmessage;
        const removeMessage = req.body.removemessage;
        console.log(req.body)
        if(addProgram || removeProgram){
            if(addProgram){
                const program =req.body.church_program;
            const serviceDay =req.body.date;
            const venue =req.body.venue;
            const newprogram = new Service({
                meetingname: program,
                meetingdate: serviceDay,
                meetingvenue: venue
            });
            newprogram.save((err) =>{
                if(err){
                    console.log(err);
                }else{
                    console.log("saved");
                    res.redirect("/adminpage");
                }
            })
            }else{
                Service.deleteOne({meetingname: removeProgram}, (err)=>{
                    if(err){
                        console.log(err);
                    }else{
                        console.log("deleted succesfully");
                        res.redirect("/adminpage");
                    }
                })
            }
        }else if(addMessage || removeMessage){
            const sermonTitle = req.body.sermontitle;
            const aboutSermon = req.body.aboutsermon;
            const sermonBy = req.body.messageby;
            const addSermon = req.body.addmessage;

            if(addMessage){
                const newSermon = new Sermon ({
                    messageTitle: sermonTitle,
                    messageDetails: aboutSermon,
                    messagePreacher: sermonBy,
                    messageAudio: addSermon
                });
                newSermon.save((err) =>{
                    if(err){
                        console.log(err);
                    }else{
                        console.log("saved");
                        res.redirect("/adminpage");
                    }
                })
            }else{
                Sermon.deleteOne({meetingname: removeMessage}, (err)=>{
                    if(err){
                        console.log(err);
                    }else{
                        console.log("deleted succesfully");
                        res.redirect("/adminpage");
                    }
                })  
            }
        }
        else{
            console.log("its not the add service");
        }
    });

module.exports = router;