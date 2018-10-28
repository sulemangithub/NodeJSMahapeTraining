
const express = require("express");

const router = express.Router();

router.get("/details",function(request,response){
   response.send("<h4>User Details</h4>"); 
});

module.exports = router;


