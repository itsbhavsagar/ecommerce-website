import fs from 'fs';
import express from 'express';
import path from 'path';

const app = express();
const PORT = 8080;

const htmlFilePath = path.join(__dirname, 'index.html');
const dataFilePath = path.join(__dirname, 'Data.json');

const htmlFile = fs.readFileSync(htmlFilePath, 'UTF-8');
const data = JSON.parse(fs.readFileSync(dataFilePath, 'UTF-8')).products;

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

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});
