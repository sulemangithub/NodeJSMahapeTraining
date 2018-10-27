
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

const getUserDetails = function(email,callback)
{
    let employee = employees.get(email);

    setTimeout(function(){
        callback(employee);
    },1000);
};





authenticate("sachin@gmail.com","pass@123",function(data){

    if(data.result)
    {
        getUserDetails("sacdfdhin@gmail.com",function(result){
            if(result != null)
            {
                console.log(result);
            }
            else
            {
                console.log("employee not found.")
            }
        });
    }
    else
    {
        console.log("Login failed.");
    }

})