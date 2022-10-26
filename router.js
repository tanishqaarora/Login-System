const express = require('express');
const router = express.Router();

const credential = {
    email: "admin@gmail.com",
    password: "admin123"
};

//login user
router.post('/login', (req, res)=>{
    if(req.body.email == credential.email && req.body.password == credential.password){
        req.session.user = req.body.email;
        res.redirect('/route/dashboard');
        // res.end("Login Successful...!");
    }else{
        res.end("Invalid Username");
    }
});

//dashboard route
router.get('/dashboard', (req, res)=>{
    if(req.session.user){
        res.render('dashboard', {user: req.session.user});
    }else{
        res.send("Unauthorised User");
    }
})

//route for logout
router.get('/logout', (req, res)=>{
    req.session.destroy(function(error){
        if(error){
            console.log(error);
            res.send("Error");
        }else{
            res.render('home', {title: "Express", logout: "logout Successfully...!"});
        }
    })
})

module.exports = router;

