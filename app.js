const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const session = require("express-session");



const app = express();


//import the routers
const adminlogin = require("./routes/adminlogin");
const adminReset = require("./routes/adminreset");
const adminPage = require("./routes/adminpage");
const about = require("./routes/about");
const messageSermon = require("./routes/messages");




app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(express.json());
app.set("view engine", "ejs");
app.use(
    session({
        secret: "secretcode",
        resave: true,
        saveUninitialized: true
    })
)

//use imported the routers
app.use("/adminlogin", adminlogin);
app.use("/adminreset", adminReset);
app.use("/adminpage", adminPage);
app.use("/about", about);
app.use("/messages", messageSermon);




//accessing the scehmas in the models folder
const Exco = require("./Models/excos");
const Admin = require("./Models/adminSchema");
const Sermon = require("./Models/sermonSchema");
const Service = require("./Models/serviceSchema");
const Quote = require("./Models/quotesSchema");
const Upload = require("./Models/uploaded");

//app to convert and safe image to database


app.get("/", (req, res) => {

    Service.find((err, service) => {
        Sermon.find((err, sermon) =>{
            const newSermon = sermon[sermon.length - 1]; 
            Quote.find((err, bibleText) => {
                const quotes = bibleText[bibleText.length - 1]
                const text = bibleText[bibleText.length - 1].bibletext
                Exco.find((err, excos) => {
                    Upload.find((err, upload) =>{
                        res.render("official", {
                            exco: excos,
                            service: service,
                            sermon: newSermon,
                            quotes: quotes,
                            text: text,
                            upload: upload
                        })
                    })
                   
                }) 
            })
        })   
    })
});



const PORT = process.env.PORT || 3000;

app.listen(PORT, async ()=>{
    console.log(`app is listening on ${PORT}`);
    try {
        const MONGO_URL = "mongodb://127.0.0.1:27017/RCFDB";
        await mongoose.connect(MONGO_URL, ()=>{
            console.log("database connected");
        });
    } catch (error) {
        console.log(error);
    }
});





