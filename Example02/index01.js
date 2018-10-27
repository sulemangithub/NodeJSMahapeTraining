
const employees = require("./employees");

const departments = require("./departments");

const authenticate = function(email,password,callback)
{
       let status = false;

       if(employees.has(email))
       {
           let emp = employees.get(email);

           if(emp.password == password)
           {
               status = true;
           }
       }

       setTimeout(function(){
            callback({result:status});
        },1000);
     
};


authenticate("sachin@gmail.com","pass@123",function(data){

    if(data.result)
    {
        console.log("Login successful");
    }
    else
    {
        console.log("Login failed.");
    }

})