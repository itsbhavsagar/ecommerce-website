import express from 'express';
import fs from 'fs';
import validateProduct from './middleware/validate.js';

const htmlFile = fs.readFileSync(htmlFilePath, 'UTF-8');
let data = JSON.parse(fs.readFileSync(dataFilePath, 'UTF-8')).products;

app.get('/', (req, res) => {
  res.sendFile(htmlFilePath);
});

app.get('/product', (req, res) => {
  res.json(data);
});

app.get('/query', (req, res) => {
  console.log(req.query);
  res.json(req.query);
});

// Add a new product
app.post('/product', express.json(), (req, res) => {
  const newProduct = req.body;
  data.push(newProduct);
  fs.writeFileSync(
    dataFilePath,
    JSON.stringify({ products: data }, null, 2),
    'UTF-8'
  );
  res.status(201).json(newProduct);
});

// Get a single product by id
app.get('/product/:id', (req, res) => {
  const productId = req.params.id;
  const product = data.find((product) => product.id === productId);
  if (product) {
    res.json(product);
  } else {
    res.status(404).send({ error: 'Product not found' });
  }
});

// Update a product by id
app.put('/product/:id', express.json(), (req, res) => {
  const productId = req.params.id;
  const updatedProduct = req.body;
  let productIndex = data.findIndex((product) => product.id === productId);
  if (productIndex !== -1) {
    data[productIndex] = { ...data[productIndex], ...updatedProduct };
    fs.writeFileSync(
      dataFilePath,
      JSON.stringify({ products: data }, null, 2),
      'UTF-8'
    );
    res.json(data[productIndex]);
  } else {
    res.status(404).send({ error: 'Product not found' });
  }
});

// Delete a product by id
app.delete('/product/:id', (req, res) => {
  const productId = req.params.id;
  data = data.filter((product) => product.id !== productId);
  fs.writeFileSync(
    dataFilePath,
    JSON.stringify({ products: data }, null, 2),
    'UTF-8'
  );
  res.status(204).send();
});

// Add search functionality
app.get('/search', (req, res) => {
  const { query } = req.query;
  const results = data.filter(
    (product) =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase())
  );
  res.json(results);
});

// Add validation to POST and PUT routes
app.post('/product', express.json(), validateProduct, (req, res) => {
  const newProduct = { ...req.body, id: Date.now().toString() };
  data.push(newProduct);
  fs.writeFileSync(
    dataFilePath,
    JSON.stringify({ products: data }, null, 2),
    'UTF-8'
  );
  res.status(201).json(newProduct);
});

app.put('/product/:id', express.json(), validateProduct, (req, res) => {
  // ...existing code...
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something broke!' });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});
