const database = require("./database_1.3");
const BookModel = require("./database_1.2");

/*let book = new BookModel({
    _id:1010,
    name:"B",
    author:"C",
    price:600,
    pubdate:new Date()
});
book.save().then(result=>console.log("saved..")).catch(err=>console.log(err));
*/

//BookModel.findById(1001).then(result=>console.log(result)).catch(err=>console.log(err));

class BookService{
    
    addBook(bookinfo)
    {
        let book = new BookModel(bookinfo);
        return book.save();
    }

    getAllBooks()
    {
        return BookModel.find().exec();
    }

    getBook(id)
    {
        //return only required fields in this case name and author, by default id is always returned.
        return BookModel.findById(id,{name:1,author:1}).exec();
    }

    removeBook(id)
    {
        //return BookModel.findById(id).remove();
        return BookModel.findByIdAndRemove(id);
    }

    updateBook(id,bookinfo)
    {
        //return BookModel.findByIdAndUpdate(id,{$set:{name:bookinfo.name,price:bookinfo.price}});
        //return BookModel.findByIdAndUpdate(id,{$set:bookinfo});
        return BookModel.findByIdAndUpdate(id,bookinfo);
    }
}

module.exports = BookService;