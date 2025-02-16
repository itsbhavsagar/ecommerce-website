# MERN eCommerce Website

![Open Source](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)

A demo eCommerce platform built using the MERN stack. This project includes essential eCommerce functionality like user authentication, product listings, and cart management.

## Purpose

This project is for learning purposes and demonstrates how to build a full-stack eCommerce website using:

- React (with Vite for a faster build process)
- Tailwind CSS with Daisy UI components for styling
- Node.js and Express.js for the backend
- MongoDB and Mongoose for the database

## Features

- **User Authentication**: Sign up, log in, and log out.
- **Product Listings**: Users can browse products stored in the database.
- **Cart Functionality**: Add and remove items from the cart.
- **Responsive Design**: Built with Tailwind CSS and Daisy UI for modern and responsive styling.

## Tech Stack

### Frontend

- React (with Vite)
- Tailwind CSS
- Daisy UI components
- Axios for API calls

### Backend

- Node.js
- Express.js
- MongoDB (with Mongoose)
- JWT for authentication

### Deployment

- **Frontend**: Hosted on Vercel
- **Backend**: Hosted on [platform] (e.g., Vercel/Heroku)
- **Database**: MongoDB Atlas

## Installation

### Prerequisites

- Node.js and npm installed
- MongoDB database (local or hosted on MongoDB Atlas)

### Clone the Repository

```bash
git clone https://github.com/yourusername/ecommerce-website.git
cd ecommerce-website
```

## Frontend Setup

### 1. Navigate to the client folder:

```bash
cd client
```

### 2. Install dependencies:

```bash
npm install
```

### 3. Start the development server:

```bash
npm run dev
```

## Backend Setup

### 1. Navigate to the server folder:

```bash
cd server
```

### 2. Install dependencies:

```bash
npm install
```

### 3. Create a `.env` file in the server folder using the provided `.env.example` file:

```ini
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 4. Start the backend server:

```bash
npm start
```

## Running the App

- **Frontend**: Runs on `http://localhost:5173/` (default Vite port)
- **Backend**: Runs on `http://localhost:5000/` (default Express port)

---

## API Endpoints

### Auth

- `POST /api/auth/register`: Register a new user
- `POST /api/auth/login`: Log in a user
- `POST /api/auth/logout`: Log out a user

### Products

- `GET /api/products`: Fetch all products
- `GET /api/products/:id`: Fetch a single product

### Cart

- `POST /api/cart`: Add items to cart
- `DELETE /api/cart/:id`: Remove items from cart

---

## Contribution

Contributions are welcome! If you'd like to improve this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Create a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](MIT) file for details.

---

## .env Example

Create a `.env` file in the `server` folder using the following format:

```plaintext
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

```

## Folder Structure

```ecommerce-website/
├── client/               # Frontend code
│   ├── src/
│   ├── public/
│   ├── vite.config.js    # Vite configuration
│   ├── package.json      # Frontend dependencies
├── server/               # Backend code
│   ├── models/           # Mongoose schemas
│   ├── routes/           # API endpoints
│   ├── server.js         # Entry point for the server
│   ├── package.json      # Backend dependencies
├── .env.example          # Example environment variables
├── README.md             # Documentation
├── LICENSE               # License file
```

## Features to Add (Future Contributions)

### Looking for contributors to add the following features:

Search and Filter Products: Improve the product browsing experience.
Wishlist Functionality: Allow users to save products for later.
Payment Gateway Integration: Add a payment gateway like Stripe or PayPal.

## Acknowledgements

### Special thanks to the creators of React, Tailwind CSS, Node.js, Express, and MongoDB for making this project possible.

## Hacktoberfest 2025

🎉 This project is participating in **Hacktoberfest 2025**! 🎉

We welcome contributions of all types, whether you're fixing bugs, improving documentation, or adding new features. Check out our [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines and [Issues](https://github.com/yourusername/ecommerce-website/issues) labeled `hacktoberfest` to get started.

Happy hacking! 🚀

Feel free to fork this repo and improve it! Happy coding! 😊

---
