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
