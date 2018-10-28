const express = require("express");
const userrouter = require("./app/routers/user.router");
const productrouter = require("./app/routers/product.router");
let app = express();

//static resources

app.use("/kpit/",express.static(__dirname+"/assets"));
app.use("/kpit/user",express.static(__dirname+"/assets/users"));
app.use("/kpit/product",express.static(__dirname+"/assets/products"));
app.use("/kpit/css",express.static(__dirname+"/assets/css"));

app.use("/kpit/user",userrouter);
app.use("/kpit/products",productrouter);

//routers

app.get("/",function(request,response){
    response.status(200).json({message:"OKJAO"});
});

module.exports = app;