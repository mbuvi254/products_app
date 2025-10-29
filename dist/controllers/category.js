import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();
export const createCategory = async (id, categoryName) => {
    try {
        const newCategory = await client.category.create({
            data: { id, categoryName },
        });
        return newCategory;
    }
    catch (error) {
        console.log("Database Error:", error);
        throw error;
    }
};
export async function getCategories() {
    try {
        const categories = await client.category.findMany();
        return categories;
    }
    catch (error) {
        console.log("Database Error:", error);
        throw error;
    }
}
export async function getCategory(id) {
    try {
        const category = await client.category.findUnique({
            where: {
                id: id
            }
        });
        if (!category) {
            console.log("Category not found");
            return;
        }
        console.log(category);
    }
    catch (error) {
        console.log("Error getting category", error);
    }
}
//Update Category
export async function updateCategory(id, categoryName) {
    try {
        const updatedCategory = await client.category.update({
            where: {
                id: id
            },
            data: {
                categoryName: categoryName
            }
        });
        console.log(updatedCategory);
        return updatedCategory;
    }
    catch (error) {
        console.log("Error updating category", error);
    }
}
//Delete Department
export async function deleteCategory(id) {
    try {
        const deletedCategory = await client.category.delete({
            where: {
                id: id
            }
        });
        console.log(deletedCategory);
        return deleteCategory;
    }
    catch (error) {
        console.log("Error deleting Category", error);
    }
}
//# sourceMappingURL=category.js.map