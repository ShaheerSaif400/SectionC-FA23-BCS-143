const connectDB = require("./config/db");
const {
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  findProductsByCategory
} = require("./controllers/productController");

const run = async () => {
  await connectDB();

  // 1️⃣ Create
  await createProduct({ name: "Laptop", price: 1200, category: "Electronics" });
  await createProduct({ name: "Shirt", price: 30, category: "Clothing" });

  // 2️⃣ Read all
  await getAllProducts();

  // 3️⃣ Update
  await updateProduct("Laptop", { price: 1100, category: "Gadgets" });

  // 4️⃣ Delete
  await deleteProduct("Shirt");

  // 5️⃣ Find by category
  await findProductsByCategory("Gadgets");
};

run();