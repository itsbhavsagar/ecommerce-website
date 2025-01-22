import express from 'express';
import fs from 'fs';
import path from 'path';
import morgan from 'morgan';
import validateProduct from './middleware/validate.js';

const app = express();
const PORT = process.env.PORT || 8080;

// Add logging
app.use(morgan('dev'));

// Path configurations
const htmlFilePath = path.join(__dirname, 'index.html');
const dataFilePath = path.join(__dirname, 'Data.json');

const htmlFile = fs.readFileSync(htmlFilePath, 'UTF-8');
let data = JSON.parse(fs.readFileSync(dataFilePath, 'UTF-8')).products;

// API versioning
const apiRouter = express.Router();
app.use('/api/v1', apiRouter);

apiRouter.get('/products', (req, res) => {
  const { sort, filter } = req.query;
  let result = [...data];

  // Apply filtering
  if (filter) {
    result = result.filter(
      (product) =>
        product.category === filter || product.price <= parseFloat(filter)
    );
  }

  // Apply sorting
  if (sort) {
    result.sort((a, b) => {
      if (sort === 'price') return a.price - b.price;
      if (sort === 'name') return a.name.localeCompare(b.name);
      return 0;
    });
  }

  res.json(result);
});

// ...existing code...
