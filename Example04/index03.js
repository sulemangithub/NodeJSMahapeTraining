
const fs = require("fs");

let fileWriter = fs.createWriteStream("./sample.txt");

fileWriter.write("Hey there how are you??\n");
fileWriter.write("Hey there how are you??\n");
fileWriter.write("Hey there how are you??\n");
fileWriter.write("Hey there how are you??\n");
fileWriter.end();

console.log("data written to a file..");