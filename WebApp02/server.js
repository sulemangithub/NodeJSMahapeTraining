const express = require("express");

const URL = require("url");
const userService = require("./services/user.service");

let app = express();

app.listen(4545,function(){
    console.log("Server is running on 4545 port");
});

app.get("/",function(request,response){
    console.log(__dirname);
    response.sendFile(__dirname+"/public/index.html");
});

app.get("/authenticate?*",function(request,response){
        let url = request.url;
        let querystring = URL.parse(url,true);
        let email = querystring.query.email;
        let password = querystring.query.password;

        let user = userService.authenticate(email,password)
        
        if(user != null)
        {
            response.send("Authentication successful");
        }
        else
        {
            response.send("Authentication failed..");
        }


});