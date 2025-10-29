import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();
export async function getProducts() {
    try {
        const products = await client.product.findMany();
        return products;
    }
    catch (error) {
        console.log("Database Error:", error);
        throw error;
    }
}
export async function addProduct(id, categoryId, productName, productDescription, unitsLeft) {
    try {
        const newProduct = await client.product.create({
            data: {
                id,
                categoryId,
                productName,
                productDescription,
                unitsLeft,
            },
        });
        console.log("Product Created", newProduct);
        return newProduct;
    }
    catch (error) {
        console.log("Database Error:", error);
        throw error;
    }
}
export async function updateProduct(id, categoryId, productName, productDescription, unitsLeft) {
    try {
        const updateProduct = await client.product.update({
            where: { id },
            data: {
                categoryId,
                productName,
                productDescription,
                unitsLeft,
            },
        });
        console.log("Product Updated:", updateProduct);
        return updateProduct;
    }
    catch (error) {
        console.log("Database Error:", error);
        throw error;
    }
}
export async function getProduct(id) {
    try {
        const product = await client.product.findUnique({
            where: { id },
            include: { category: true },
        });
        return product;
    }
    catch (error) {
        console.log("Database Error", error);
        throw error;
    }
}
export async function deleteProduct(id) {
    try {
        const deleted = await client.product.delete({
            where: { id },
        });
        console.log("Deleted Product:", deleted);
        return deleted;
    }
    catch (error) {
        console.log("Database Error:", error);
        throw error;
    }
}
//# sourceMappingURL=product.js.map