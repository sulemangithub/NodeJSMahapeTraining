let BookModel = require("./database02");

class BookService
{
    addBook(book)
    {
        let bookModel = new BookModel(book);
        return bookModel.save();
    }

    getAllBooks()
    {
        return BookModel.find().exec();
    }

    getBook(bookId)
    {
        return BookModel.findById(bookId);
    }

    removeBook(bookId)
    {
        return BookModel.findByIdAndRemove(bookId);
    }

}

module.exports = new BookService();