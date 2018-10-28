const express = require("express");
const BookService = require("./database_1.1");
const url = require("url");
const bodyParser = require("body-parser");
let app = express();
let bookService = new BookService();

//app.use(express.static(__dirname+"\\public"));
app.use("/bookshopee",express.static(__dirname+"\\public"));

//bodyparser is a middleware which will parse the URL before it 
//gets processed by the handler.
//multer is a middleware which is used for parsing multipart data

//middleware used to parse bodies which are urlencoded
app.use(bodyParser.urlencoded({extended:true}));

//middleware used to parse bodies which contains JSON
app.use(bodyParser.json());

app.use("/bookshopee/book",function(request,response,next){
    let bookid = url.parse(request.url,true).query.bookid;
    console.log("Bookd ID : "+bookid);
    
    if(bookid <= 0)
    {
        bookid *=-1;
    }

    next(bookid);
});

app.use("/bookshopee/book",function(data,request,response,next){
    console.log("Data is second middleware : "+data);
    next();
});

app.get("/",function(request,response){
    response.sendFile(__dirname+"/public/index.html");
});

app.get("/bookshopee/books",function(request,response){
    //response.status(200).json(bookService.getAllBooks());
    let data = "<html><head><link rel='stylesheet' href='/bookshopee/bootstrap.css' /></head><body><div class='container'><table class='table table-hover table-bordered'><tr><th>ID</th><th>NAME</th><th>AUTHOR</th><th>PRICE</th><th>PUB DATE</th></tr>";
    bookService.getAllBooks().then(function(books){
        books.forEach(book=>{
            console.log(book+"--2");
        data = data + "<tr><td>"+book._id+"</td><td>"+book.name+"</td><td>"+book.author+"</td><td>"+book.price+"</td><td>"+book.pubdate+"</td></tr>";
         });
         data.concat("</table></div></body></html");
    response.status(200,"{Content-Type:text/html}").send(data);
}).catch(function(error){
    data = data + "<tr><td colspan='5'>NO DATA FOUND</td></tr>";
    response.status(200,"{Content-Type:text/html}").send(data);
});
    
});

app.get("/bookshopee/book",function(request,response){
    let url_1 = url.parse(request.url,true);

    bookService.getBook(url_1.query.bookid).then(function(data){
        response.status(200).json(data);
    }).catch(function(error){
        response.status(200).json({error:"ERROR"});
    });    
});

app.post("/bookshopee/addbook",function(request,response){
    let book = {
        _id:request.body.bookid.toString(),
        name:request.body.bookname.toString(),
        author:request.body.bookauthor.toString(),
        price:request.body.bookprice.toString(),
        pubdate:new Date()
        };
    bookService.addBook(book).then(function(result){
        response.status(200).json({message:"OK"});    
    }).catch(function(error){
        response.status(200).json({error:"ERROR"});    
    });
    
});

app.post("/bookshopee/removebook",function(request,response){
    bookService.removeBook(request.body.bookid.toString()).then(function(result){
        response.status(200).json({message:"OK"});    
    });    
});

app.listen(5000,function(err){
    if(!err)
        console.log("Server running on 5000");
});