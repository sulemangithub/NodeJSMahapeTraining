const ProductService = require("../services/productservice");
const url = require("url");
const bodyParser = require("body-parser");
const express = require("express");
const router = express.Router();

let productService = new ProductService();
router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json());

router.get("/viewAllProducts",function(request,response){

    productService.getAllProducts().then(function(result){
        response.status(200).json({products:result});
    }).catch(function(error){
        response.status(200).json({error:error});
    });
});

router.get("/viewProduct",function(request,response){
    let url_1 = url.parse(request.url,true);

    productService.getProduct(url_1.query.id).then(function(result){
        response.status(200,"{Content-Type:text/html}");
        response.write("result:"+result);
        response.write("<h1>Hello</h1>");
        response.end();
    }).catch(function(error){
        response.status(200).json({error:error});
    });
});

router.get("/removeProduct",function(request,response){
    let url_2 = url.parse(request.url,true);

    productService.removeProduct(url_2.query.id).then(function(result){
        response.status(200).json({message:"Removed : OK"});       
    }).catch(function(error){
        response.status(200).json({error:error});
    });
});

router.post("/addProduct",function(request,response){
    let product = {
        _id:request.body.id,
        name:request.body.name,
        category:request.body.category,
        price:request.body.price
    };

    productService.addProduct(product).then(function(result){
        response.status(200).json({message:"product added OK"});
    }).catch(function(error){
        response.status(200).json({error:error});
    });
});

module.exports = router;