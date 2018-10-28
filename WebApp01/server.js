const http = require("http");

const fs = require("fs");

let server = http.createServer(function(request,response){
    
    let url = request.url;
   
    switch(url)
    {
        case "/":
        response.writeHead(200,{'Content-Type':'text/html'});
    
        fs.readFile("./public/index.html",function(err,data){
    
            if(err)
            {
                response.write("<h1>PAGE NOT FOUND!</h1>");
            }
            else
            {
                response.write(data);
                response.write("demo");
            }
            response.end();
        });  

        break;
    default :
        response.writeHead(404,{'Content-Type':'text/html'});
        response.write("<h1>PAGE NOT FOUND : </h1>");
        response.end();
    }

    
    
    
});

server.listen(4000,function(){
    console.log("Server Running on 4000 port");
});