const Product = require("../models/products");

// 1 Create a Product
const createProduct = async (productData) => {
  try {
    const product = new Product(productData);
    await product.save();
    console.log("Product added:", product);
  } catch (err) {
    console.log("Error creating product:", err);
  }
};

// 2 Read All Products
const getAllProducts = async () => {
  try {
    const products = await Product.find();
    console.log("All Products:", products);
  } catch (err) {
    console.log("Error reading products:", err);
  }
};

// 3 Update a Product (by name)
const updateProduct = async (name, updateData) => {
  try {
    const updated = await Product.findOneAndUpdate({ name }, updateData, { returnDocument: "after" });
    if (updated) console.log("Updated Product:", updated);
    else console.log("Product not found");
  } catch (err) {
    console.log("Error updating product:", err);
  }
};

// 4 Delete a Product (by name)
const deleteProduct = async (name) => {
  try {
    const deleted = await Product.findOneAndDelete({ name });
    if (deleted) console.log("Deleted Product:", deleted);
    else console.log("Product not found");
  } catch (err) {
    console.log("Error deleting product:", err);
  }
};

// 5 Find Products by Category
const findProductsByCategory = async (category) => {
  try {
    const products = await Product.find({ category });
    console.log(`Products in ${category}:`, products);
  } catch (err) {
    console.log("Error finding products by category:", err);
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  findProductsByCategory
};