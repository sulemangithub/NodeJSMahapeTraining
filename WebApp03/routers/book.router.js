
const express = require("express");

const router = express.Router();

const bookService = require("../database/database03");

router.get("/details",function(request,response){
   response.send("<h4>Book Details</h4>"); 
});

router.get("/getAllBooks",function(request,response){

    bookService.getAllBooks().then(function(books){
        response.send("kdfjdk"); 
    }).catch(function(err){
    response.send("kdfjdk");
});

});

router.get("/findBook",function(request,response){

    bookService.getBook(1001).then(function(data){
        response.send("kdfjkd");
    }).catch(function(request,response){
        response.send("dkfjdkfjdkjfd");
    });

});



module.exports = router;