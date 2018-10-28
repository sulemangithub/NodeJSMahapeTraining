const ProductModel = require("../models/productmodel");

class ProductService
{
    getAllProducts()
    {
        return ProductModel.find().exec();
    }

    getProduct(id)
    {
        return ProductModel.findById(id).exec();
    }

    removeProduct(id)
    {
        return ProductModel.findById(id).remove();
    }

    addProduct(product)
    {
        let Product = new ProductModel(product);
        return Product.save();
    }
}

module.exports = ProductService;