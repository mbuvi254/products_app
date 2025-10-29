import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();
function getAllUsers() {
    let users = client.product.findMany();
    return users;
}
module.exports = { getAllUsers };
//# sourceMappingURL=productManager.js.map