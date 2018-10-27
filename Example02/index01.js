
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

       if(status)
       {
           setTimeout(function(){
                callback({result:status});
           },1000);
       }
};


authenticate("a","b",function(data){

    if(data.result)
    {
        console.log("Login successful");
    }
    else
    {
        console.log("Login failed.");
    }

})