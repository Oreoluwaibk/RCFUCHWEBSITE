const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const adminLoginValidation = require("../Validations/adminLoginValidation");
const Admin = require("../Models/adminSchema");
const Service = require("../Models/serviceSchema");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const passportLocalMongoose = require("passport-local-mongoose")
const session = require("express-session");


router.use(express.json());
router.use(function(req, res, next){
    console.log(req.url, "welcome to the adminlogin router");
    next();
})


router
    .route("/")
    .get((req, res) =>{
        res.render("adminlogin")
    })
    .post((req, res) => {
        const adminName = req.body.admin_name;
        const adminPassword = req.body.password;
            if(adminName === "" && adminPassword === ""){
                res.json({
                    status: "USERNAME & PASSWORD FIELDS ARE EMPTY",
                })
            }else if(adminPassword === ""){
                res.json({
                    status: "PASSWORD FIELD IS EMPTY",
                }) 
            }else if(adminName === ""){
                res.json({
                    status: "USERNAME FIELD IS EMPTY",
                })
            }else{
                console.log("got here 3")
                Admin.findOne({username: adminName}, async (err, user)=>{
                    console.log(user)
                    if(err){
                        res.json({
                            status: "USER NOT FOUND!",
                            message: err
                        })
                    }else{
                        try {
                            const hashedPassword = user.password
                            await bcrypt.compare(adminPassword, hashedPassword, (err, result)=>{
                                if(err){
                                    res.json({
                                        status: "PASSWORD IS NOT VALID, INPUT PASSWORD!",
                                        message: err.message
                                    })
                                }else{
                                    res.redirect("/adminpage");
                                }
                            });     
                        } catch (error) {
                            res.send(error)
                        }    
                    }   
                });
            }
        
        
    });

module.exports = router;