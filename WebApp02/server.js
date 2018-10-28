const express = require("express");

let app = express();

app.listen(4545,function(){
    console.log("Server is running on 4545 port");
});

app.get("/",function(request,response){
    console.log(__dirname);
    response.sendFile(__dirname+"/public/index.html");
});