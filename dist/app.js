import express from "express";
import { addProduct, getProducts } from "./controllers/product.js";
import { createCategory, getCategories } from "./controllers/category.js";
const app = express();
//Category Endpoints
app.get("/categories", async (req, res) => {
    try {
        const categories = await getCategories();
        if (!categories || categories.length == 0) {
            return res.status(404).json({ message: "No Categories Fount" });
        }
    }
    catch (e) {
        return res.status(500).json({ message: "Some Went Wrong" });
    }
});
app.post("/categories", async (req, res) => {
    try {
        const { id, categoryName } = req.body;
        if (!id || categoryName) {
            return res.status(400).json({ message: "id and Category Are required" });
        }
        ;
        const newCategory = await createCategory(id, categoryName);
        return res.status(201).json({ message: "Category Created successfully", category: newCategory });
    }
    catch (error) {
        console.error("Error Creating Category:", error);
        return res.status(500).json({ message: "Something Went Wrong" });
    }
});
//Products Endpoints
app.get("/products", async (req, res) => {
    try {
        const products = await getProducts();
        if (!products || products.length == 0) {
            return res.status(404).json({ message: "No Products Found" });
        }
        ;
        return res.status(200).json(products);
    }
    catch (error) {
        return res.status(500).json({ message: "Some Went Wrong" });
    }
});
app.post("/products", async (req, res) => {
    try {
        const { id, categoryId, productName, productDescription, unitsLeft } = req.body;
        const newProduct = await addProduct(id, categoryId, productName, productDescription, unitsLeft);
        return res.status(201).json(newProduct);
    }
    catch (error) {
        return res.status(500).json({ message: "Something Went Wrong" });
    }
});
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`App Running on port ${PORT}`);
});
//# sourceMappingURL=app.js.map