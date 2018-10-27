const fs = require("fs");

fs.writeFile("./demo.txt",
    "This is an example of file writing...",function(err){

    if(err)
        throw err;
    
    console.log("Data written into a file...");
});

fs.appendFile("./demo.txt","This is another line from program.",function(err){
    if(err)
        throw err;
    console.log("Data appended to existing file.")
});


console.log("end");