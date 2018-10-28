
const fs = require("fs");

let fileReader =fs.createReadStream("./demo.txt",{highWaterMark:50});

fileReader.on("data",function(chunk){
    setTimeout(function(){
        console.log(chunk.toString()+"\n\n----------------\n\n");
    },2000);
});

fileReader.on("end",function(){
    console.log("reading completed....");
});