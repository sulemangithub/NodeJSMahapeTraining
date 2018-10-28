const db = require("./database01");

const employeeModel = require("./database02");

let employee = new employeeModel({_id:1005,name:"Amit kumar",salary:3400});

employee.save().then(function(){
    console.log("inserted...");
}).catch(function(error){
    console.log(error);
})

employeeModel.find().then(data=>{
    console.log(data);
}).catch(err=>{
    console.log(err);
})


