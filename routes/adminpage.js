const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const Exco = require("../Models/excos");
const Service = require("../Models/serviceSchema");
const Sermon = require("../Models/sermonSchema");
const Quote = require("../Models/quotesSchema");
const axios = require("axios");
const { response } = require("express");

router.use(function(req, res, next){
    console.log(req.url, "welcome to the adminpage router");
    next();
})


router
    .route("/")
    .get((req, res) =>{
        
         
        Service.find((err, service) => {
            Sermon.find((err, sermon) =>{
                Quote.find((err, bibleText) => {
                    const quotes = bibleText[bibleText.length - 1]
                    const text = bibleText[bibleText.length - 1].bibletext
                    Exco.find((err, excos) => {
                        res.render("adminpage", {
                            exco: excos,
                            service: service,
                            sermon: sermon,
                            quotes: quotes,
                            text: text
                        })
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
        const addQuotes = req.body.addquotes;
        const addExco = req.body.addexecutive;
        const removeExco = req.body.removeexco;
        console.log(req.body);
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
        }else if(addQuotes){
            const bibleBook = req.body.biblebook;
            const bibleChapter = req.body.biblechapter;
            const bibleVerse = req.body.bibleverse;

            console.log(bibleVerse);

            axios
                .get(`https://bible-api.com/${bibleBook}+${bibleChapter}:${bibleVerse}`)
                .then(response => {
                    const bibleText = response.data.verses;
                    const reFerence = response.data.reference
                    const newQuotes = new Quote ({
                        bibletext: bibleText, 
                        reference: reFerence
                    }) 
                    newQuotes.save()
                    res.redirect("/adminpage")
                });
            //     .catch(error => {
            //     console.error(error);
            // });
                

           
        }else if (addExco || removeExco){
            const posT = req.body.position
            const imagE = req.body.image
            const namE = req.body.name

            if(addExco){
                console.log("it got here");
                const newExco1 = new Exco({
                    post: posT,
                    image: imagE,
                    name: namE
                });

                newExco1.save((error) => {
                    if (error) {
                        console.log(error);
                    }else{
                        console.log("successful");
                        res.redirect("/adminpage")
                    }
                })
            }else{
                Exco.deleteOne({post: removeExco}, (err)=>{
                    if (err) {
                        console.log(err)
                    }else{
                        console.log("successful!")
                        res.redirect("/adminpage")
                    }
                })
            }
        }
        else{
            console.log("Not a post function");
            res.redirect("/adminpage");
        }
    });

module.exports = router;