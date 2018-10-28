const express = require("express");

const router = express.Router();

router.get("/details",function(request,response){
   response.send("<h4>Employee Details</h4>"); 
});

module.exports = router;

/*

/book/getBook --- book.router.js
/user/authenticate ---user.router.js
/employee/getDetails ---employee.router.js

*/