const fs = require("fs");

let fileReader = fs.createReadStream("./demo.txt");

fileReader.pipe(process.stdout);