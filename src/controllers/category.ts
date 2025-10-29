import { PrismaClient } from "@prisma/client";

const client = new PrismaClient()

export const createCategory = async (id : string,categoryName:string)=>{
   try{
      const newCategory = await client.category.create({
         data:{id,categoryName},
});
return newCategory;
   }catch(error){
         console.log("Database Error:",error); 
         throw error;
   }
};

export async function getCategories(){
    try{
       const categories =await client.category.findMany();
       return categories 
    }catch(error){
       console.log("Database Error:",error) 
       throw error;
    }
}


export async function getCategory(id:string){
    try{
    const category = await client.category.findUnique({
        where : {
            id : id
        }
    });
    if(!category){
        console.log("Category not found");
      
    }
    
    console.log(category);
    return category;
    }catch(error){
        console.log("Error getting category",error);
        throw error;
    }
}

//Update Category
export async function updateCategory(id:string,categoryName:string ) {
    try{
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
    }catch(error){
        console.log("Error updating category",error);
         throw error;
    }
}


//Delete Department
export async function deleteCategory(id:string) {
    try{
    const deletedCategory = await client.category.delete({
        where: {
            id: id
        }
    });
    console.log(deletedCategory);
    return deletedCategory;
    }catch(error){
        console.log("Error deleting Category",error);
        throw error
    }   
}
