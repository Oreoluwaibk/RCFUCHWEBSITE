const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const adminResetValidation = require("../Validations/adminresetpassword");
const Admin = require("../Models/adminSchema");
const saltRounds = 10;

router.use(express.json());
router.use(function(req, res, next){
    console.log(req.url, "welcome to the reset router");
    next();
})

router
    .route("/")
    .get((req, res) =>{
        res.render("adminreset") 
    })
    .post(async (req, res) => {
        const adminName = req.body.admin_name;
        const adminPassword = req.body.password;
        const confirmPassword = req.body.confirm_password
        const { err, value } = adminResetValidation.validate({username: adminName, password: adminPassword, repeat_password: confirmPassword});
        if(err){
            console.log(err);
        }else{
            const validatedPassword = value.password;
            try {
                await bcrypt.hash(validatedPassword, saltRounds, (err, hash)=>{
                    if(err){
                        res.send(err)
                    }else{
                        Admin.updateOne({username: value.username}, {password: hash}, async () =>{
                            res.send("password saved");
                            res.redirect("/adminlogin");
                        })
                    }
                })
                
            } catch (error) {
                res.send(error);
            }
            
        }
       
        
    });

module.exports = router;