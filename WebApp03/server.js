const express = require("express");

let app = express();

const userRouter = require("./routers/user.router");
const bookRouter = require("./routers/book.router");
const employeeRouter = require("./routers/employee.router");

app.use("/book",bookRouter);
app.use("/user",userRouter);
app.use("/employee",employeeRouter);

app.use(express.static(`${__dirname}/public`));

app.listen(4545,function(request,response){
    console.log("server is running on 4545");
});
