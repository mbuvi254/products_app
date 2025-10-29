# Products App

A RESTful API for managing products, built with Express.js, TypeScript, and Prisma.

## 🚀 Features

- **TypeScript Support**: Built with TypeScript for type safety and better developer experience
- **Prisma ORM**: Modern database toolkit with type-safe queries
- **RESTful API**: Follows REST principles for predictable endpoints
- **Environment Configuration**: Uses dotenv for environment variables
- **Development Tools**: Includes nodemon and ts-node-dev for smooth development

## 📦 Prerequisites

- Node.js (v14 or later)
- npm or yarn
- PostgreSQL (or your preferred database supported by Prisma)

## 🛠 Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd products_app
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Update the database connection string in `.env`

4. Run database migrations:
   ```bash
   npx prisma migrate dev
   ```

## 🚦 Running the Application

### Development Mode
```bash
npm run dev
# or
yarn dev
```

### Production Build
```bash
# Build the TypeScript code
npm run build

# Start the server
npm run start-server
```

## 🌐 API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get a single product
- `POST /api/products` - Create a new product
- `PUT /api/products/:id` - Update a product
- `DELETE /api/products/:id` - Delete a product

## 🧪 Testing

To run tests:
```bash
# Coming soon
# npm test
```

## 📝 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/products_db"
PORT=3000
NODE_ENV=development
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Express.js](https://expressjs.com/)
- TypeScript for type safety
- [Prisma](https://www.prisma.io/) for database operations