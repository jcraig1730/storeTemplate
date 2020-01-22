require("../connection");
const Product = require("./productSchema");

module.exports = {
  createProduct: async productInfo => {
    try {
      if (!productInfo.title) throw { error: "Title is required" };
      const newProduct = new Product(productInfo);
      await newProduct.save();
      return newProduct;
    } catch (error) {
      return error;
    }
  },
  readProduct: async id => {
    try {
      const product = await Product.findById(id);
      return product;
    } catch (error) {
      return error;
    }
  },
  readAllProducts: async () => {
    try {
      const products = await Product.find();
      return products;
    } catch (error) {
      return error;
    }
  },
  updateProduct: async (id, newData) => {
    try {
      await Product.findByIdAndUpdate(id, newData);
      const updatedProduct = await Product.findById(id);
      return updatedProduct;
    } catch (error) {
      return error;
    }
  },
  deleteProduct: async (id, newData) => {
    try {
      return await Product.findByIdAndDelete(id);
    } catch (error) {
      return error;
    }
  }
};
