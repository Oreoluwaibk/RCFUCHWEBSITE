const Admin = require("../Models/adminSchema");
const bcrypt = require("bcrypt");
const localStrategy = require("passport-local").Strategy;

module.exports = function (passport) {
    console.log("got here 5");
    passport.use(
        new localStrategy((username, password, done) => {
            Admin.findOne({username: username}, (err, user) =>{
                console.log("got here 1");
                if (err) throw err;
                if(!user) return done(null, false)
                bcrypt.compare(password, user.password, (err, result) =>{
                    console.log("got here 2");
                    if (err) throw err;
                    if (result === true){
                        return done(null, user)
                    }else{
                        return done(null, false);
                    }
                })
            })
        })
    )

    passport.serializeUser((user, cb) =>{
        cb(null, user.id)
    })
    passport.deserializeUser((id, cb)=>{
        Admin.findOne({_id: id}, (err, user) => {
            cb(err, user)
        })
    })
}