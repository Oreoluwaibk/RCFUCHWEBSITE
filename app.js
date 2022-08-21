const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const bcrypt = require("bcrypt");
const app = express();
const adminlogin = require("./routes/adminlogin");
const adminReset = require("./routes/adminreset");
const adminPage = require("./routes/adminpage");
const about = require("./routes/about");
const messageSermon = require("./routes/messages");




app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(express.json());
app.set("view engine", "ejs");

//import the routers
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


app.get("/", (req, res) => {
    Service.find((err, service) => {
        Sermon.find((err, sermon) =>{
            Exco.find((err, excos) => {
                res.render("official", {
                    exco: excos,
                    service: service,
                    sermon: sermon
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





// app.post("/admin", (req, res) =>{
    
//     const adminName = req.body.admin_name;
//     const adminPassword = req.body.password;
//     const adminConfirm = req.body.confirm_password
//     if(adminConfirm === adminPassword || adminConfirm === undefined){
//         Exco.find((err, excos) => {

//             res.render("adminpage", {
//                 exco: excos
//             })
//         })
//     }

// });

// app.post("/adminpage", (req, res)=>{
//     res.send("well posted")
// })



// app.get("/about", (req, res) =>{
//     Exco.find((err, excos) => {

//         res.render("about", {
//             exco: excos
//         })
//     })
// });

// app.post("/about", (req, res) =>{
//     console.log(req.body);

//     // const user1 = new Exco({
//     //         post: req.body.position,
//     //         image: req.body.image,
//     //         name: req.body.name 
//     //     });

//     // user1.save();
//     // res.redirect("/about");

// });

// app.get("/messages", (req, res) => {
//     res.render("messages")
// })

// // app.get("/:content", (req, res) =>{
// //     const selected = req.params.content;
// //     res.render(selected);
// // });
// app.get("/testimonies", (req, res) => {
//     res.render("testimonies")
// })


