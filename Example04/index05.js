
const fs = require("fs");

let fileReader =fs.createReadStream("./demo.txt");

fileReader.on("data",function(chunk){
    console.log(chunk.toString());
    setTimeout(function(){

    },2000);
});

fileReader.on("end",function(){
    console.log("reading completed....");
});




