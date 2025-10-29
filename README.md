# Products App

A RESTful API for managing products, built with Express.js, TypeScript, and Prisma.

## Features

- **TypeScript Support**: Built with TypeScript for type safety and better developer experience
- **Prisma ORM**: Modern database toolkit with type-safe queries
- **RESTful API**: Follows REST principles for predictable endpoints
- **Environment Configuration**: Uses dotenv for environment variables
- **Development Tools**: Includes nodemon and ts-node-dev for smooth development

## Prerequisites

- Node.js (v14 or later)
- npm 
-TypeScript
-Prisma
-Mssql

Install dependencies:
   ```bash
   npm install -y
   ```



Run database migrations:
   ```bash
   npx prisma migrate dev --name init
   ```



### Development Mode
```bash
npm run dev
```

### Production Build
```bash
# Build the TypeScript code
npm run build

# Start the server
npm run start-server
```

## API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get a single product
- `POST /api/products` - Create a new product
- `PUT /api/products/:id` - Update a product
- `DELETE /api/products/:id` - Delete a product





## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.
