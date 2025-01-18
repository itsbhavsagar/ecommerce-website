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

// ...existing code...

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

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});
