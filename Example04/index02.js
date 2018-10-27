const fs = require("fs");

fs.readFile("./demo.txt",function(err,data){

    if(err)
        throw err;
    
    console.log(data.toString());
});