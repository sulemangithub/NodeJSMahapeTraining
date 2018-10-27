const employees = require("./employees");

const departments = require("./departments");

const authenticate = function(email)
{
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve({data:"This is an example"});
        },100);
    });
}

authenticate("sachin").then(function(result){
    console.log(result);
}).catch(function(error){
    Console.log(error);
})


