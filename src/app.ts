import express ,{type Express,type Request, type Response} from "express"

import { addProduct, getProducts,getProduct,deleteProduct,updateProduct } from "./controllers/product.js";
import {createCategory,getCategories,getCategory,updateCategory,deleteCategory} from "./controllers/category.js"

const app : Express = express();

//Category Endpoints
app.get("/categories",async(req:Request,res:Response)=>{
    try{
        const categories = await getCategories();
        if(!categories || categories.length==0 ){
            return res.status(404).json({message:"No Categories Fount"});
        }
    }
    catch(e){
            return res.status(500).json({message: "Some Went Wrong"})
        }
    
});

app.post("/categories",async (req :Request,res:Response)=>{
    try{
       const {id,categoryName} =req.body;

       if(!id || categoryName){
        return res.status(400).json({message:"id and Category Are required"});
       };
       const newCategory = await createCategory(id,categoryName);
       return res.status(201).json({message:"Category Created successfully",category:newCategory});
    }
    catch(error){
        console.error("Error Creating Category:",error);
        return res.status(500).json({message:"Something Went Wrong"});
    }
});


//Products Endpoints
app.get("/products",async (req:Request,res:Response)=>{
    try{
        const products = await getProducts();
     
        if(!products || products.length==0){
            return res.status(404).json({message:"No Products Found"})
        };
        return res.status(200).json(products);
    }catch(error){
         return res.status(500).json({message: "Some Went Wrong"})
    }
    
});

app.post("/products",async (req:Request,res:Response)=>{
    try{
        const {id,categoryId,productName,productDescription,unitsLeft}=req.body;
        const newProduct = await addProduct(
            id,
            categoryId,
            productName,
            productDescription,
            unitsLeft
        );
        return res.status(201).json(newProduct);
    }catch(error){
        return res.status(500).json({message:"Something Went Wrong"});
    }
});

app.get("/products/:id",async (req:Request,res:Response)=>{
    try{
        const {id} =req.params;
        const product = await getProduct(id);
        if(!product){
            return res.status(404).json({message:"Product not found"});
        }
        return res.status(200).json(product);
    }catch(error){
        console.error("Error fetching product:",error);
        return res.status(500).json({message:"Something Went Wrong"});
    }
});

app.patch("/products/:id",async (req:Request,res:Response)=>{
    try{
        const {id} =req.params;
        const {categoryId,productName,productDescription,unitsLeft}=req.body;
        const updatedProduct = await updateProduct(
            id,
            categoryId,
            productName,
            productDescription,
            unitsLeft
        );
        if(!updatedProduct){
            return res.status(404).json({message:"Product not found"});
        }
        return res.status(201).json({message:"Product Updated",updatedProduct});
    }
    catch(error){
          console.error("Error fetching product:",error);
        return res.status(500).json({message:"Something Went Wrong"});

    }
});


app.delete("/products/:id",async (req:Request,res:Response)=>{
    try{
        const {id} =req.params;
        const deletedProduct = await deleteProduct(id);

        if(!deleteProduct){
            return res.status(404).json({message:"Product not found"});
        }
        return res.status(200).json({message:"Product Deleted",deletedProduct});

    }
    catch(error){
        console.log("Error deleting product:",error);
        return res.status(500).json({message:"Something Went Wrong"});
    }
});


const PORT = 5000;
app.listen(PORT,()=>{
    console.log(`App Running on port ${PORT}`)
});