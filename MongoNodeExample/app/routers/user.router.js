const express = require("express");
const bodyParser = require("body-parser");
const UserService = require("../services/userservice");
const router = express.Router();

//initialization
let userService = new UserService();

router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json());

router.post("/validate",function(request,response){
    userService.validateUser(request.body.email,request.body.password).then(function(result){
            //response.status(200).json({message:result});
            if(result._id!=null)
            {
                response.redirect("/kpit/user/home.html");
            }
            else
            {
                response.redirect("/kpit/user/login.html");
            }
    }).catch(function(error){
        response.redirect("/kpit/user/login.html");
    });    
});

router.post("/register",function(request,response){
    let user = {
        _id:request.body.email,
        password:request.body.password,
        name:request.body.name,
        city:request.body.city,
        phone:request.body.phone
    }
    userService.registerUser(user).then(function(result){
        if(result._id!=null)
        {
            response.redirect("/kpit/user/success.html");
        }
        else
        {
            response.redirect("/kpit/user/login.html");
        }
    }).catch(function(error){
        response.redirect("/kpit/user/login.html");
    });    
});

module.exports = router;