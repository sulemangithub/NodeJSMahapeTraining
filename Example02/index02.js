const employees = require("./employees");

const departments = require("./departments");

const authenticate = function(email,password)
{
    return new Promise(function(resolve,reject){
        let status = false;

        if(employees.has(email))
            {
                let employee = employees.get(email);
                if(employee.password == password)
                {
                    status = true;            
                }
            }

        setTimeout(function(){
            if(status)
                resolve({result:status});
            else
                reject("Invalid email or password");
        },100);
    });
}

authenticate("sachin@gmail.com","pass@123").then(function(result){
    console.log(result);
}).catch(function(error){
    console.log(error);
});