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
//# sourceMappingURL=product.js.map