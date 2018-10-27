
const Arithmetic = require("./index05");

let arithmetic = new Arithmetic();

arithmetic.add(3,4,function(result){
    console.log(result);
});