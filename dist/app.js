import express from "express";
import { addProduct, getProducts, getProduct, deleteProduct, updateProduct } from "./controllers/product.js";
import { createCategory, getCategories, getCategory, updateCategory, deleteCategory } from "./controllers/category.js";
const app = express();
//Middleware
app.use(express.json());
//Category Endpoints
app.get("/categories", async (req, res) => {
    try {
        const categories = await getCategories();
        if (!categories || categories.length === 0) {
            return res.status(404).json({ message: "No Categories Found" });
        }
        return res.status(200).json(categories);
    }
    catch (e) {
        return res.status(500).json({ message: "Some Went Wrong" });
    }
});
app.post("/categories", async (req, res) => {
    try {
        const { id, categoryName } = req.body;
        if (!id || !categoryName) {
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
app.patch("/categories/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { categoryName } = req.body;
        if (!categoryName) {
            return res.status(400).json({ message: "Category Name is required" });
        }
        ;
        const updatedCategory = await updateCategory(id, categoryName);
        return res.status(200).json({ message: "Category Updated successfully", category: updatedCategory });
    }
    catch (error) {
        console.error("Database Error:", error);
        return res.status(500).json({ message: "Something Went Wrong" });
    }
});
app.delete("/categories/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCategory = await deleteCategory(id);
        if (!deletedCategory) {
            return res.status(404).json({ message: "Category Not Deleted" });
        }
        return res.status(200).json({ message: "Category Deleted" });
    }
    catch (error) {
        console.log("Error deleting product:", error);
        return res.status(500).json({ message: "Something Went Wrong" });
    }
});
app.get("/categories/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const category = await getCategory(id);
        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }
        return res.status(200).json(category);
    }
    catch (error) {
        console.error("Error fetching category:", error);
        return res.status(500).json({ message: "Something Went Wrong" });
    }
});
//Products Endpoints
app.get("/products", async (req, res) => {
    try {
        const products = await getProducts();
        if (!products || products.length === 0) {
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
        if (!id || !categoryId || !productName) {
            return res.status(400).json({ message: "Missing required Values" });
        }
        const newProduct = await addProduct(id, categoryId, productName, productDescription, unitsLeft);
        return res.status(201).json(newProduct);
    }
    catch (error) {
        return res.status(500).json({ message: "Something Went Wrong" });
    }
});
app.get("/products/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const product = await getProduct(id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        return res.status(200).json(product);
    }
    catch (error) {
        console.error("Error fetching product:", error);
        return res.status(500).json({ message: "Something Went Wrong" });
    }
});
app.patch("/products/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { categoryId, productName, productDescription, unitsLeft } = req.body;
        const updatedProduct = await updateProduct(id, categoryId, productName, productDescription, unitsLeft);
        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        return res.status(200).json({ message: "Product Updated", updatedProduct });
    }
    catch (error) {
        console.error("Error fetching product:", error);
        return res.status(500).json({ message: "Something Went Wrong" });
    }
});
app.delete("/products/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProduct = await deleteProduct(id);
        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        return res.status(200).json({ message: "Product Deleted", deletedProduct });
    }
    catch (error) {
        console.log("Error deleting product:", error);
        return res.status(500).json({ message: "Something Went Wrong" });
    }
});
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`App Running on port ${PORT}`);
});
//# sourceMappingURL=app.js.map