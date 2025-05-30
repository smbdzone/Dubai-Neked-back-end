# Dubai Neked Backend

A robust backend service for the Dubai Neked application, built with Node.js, Express, TypeScript, and MongoDB.

## 🚀 Features

- RESTful API architecture
- TypeScript for type safety
- MongoDB database integration
- Express.js framework
- CORS enabled
- Environment variable configuration

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn package manager

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/smbdzone/Dubai-Neked-back-end.git
cd Dubai-Neked-back-end
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your environment variables:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

## 🚀 Running the Application

### Development Mode
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

## 📦 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the TypeScript project
- `npm start` - Start the production server
- `npm test` - Run tests (not configured yet)

## 🏗️ Project Structure

```
src/
├── config/     # Configuration files
├── app.ts      # Express application setup
└── server.ts   # Server entry point
```

## 🔧 Dependencies

### Main Dependencies
- express: ^5.1.0
- mongoose: ^8.14.0
- cors: ^2.8.5
- dotenv: ^16.5.0

### Development Dependencies
- typescript: ^5.8.3
- nodemon: ^3.1.10
- ts-node-dev: ^2.0.0
- @types/* packages for TypeScript support

## 🔗 Links

- [Frontend Repository](https://github.com/smbdzone/Dubai-Neked)
- [Figma Design](https://www.figma.com/design/zoY7U6cVDWjAg1R31iLaM0/Dubai-Neked)

## 📝 License

ISC

## 👥 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
