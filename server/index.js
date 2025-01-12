import fs from 'fs';

import express from 'express';

let htmlFile = fs.readFileSync('./index.html', 'UTF-8');
let data = JSON.parse(fs.readFileSync('./Data.json', 'UTF-8')).products;

const server = express();

server.get('/', (req, res) => {
  res.sendFile('/Users/sagar/Desktop/ecommerce-website/server/index.html');
});

server.get('/product', (req, res) => {
  res.json(data);
});

server.get('/product/:id', (req, res) => {
  let id = req.params.id;
  let prodData = data.find((obj) => obj.id == id);
  let { title, category, description } = prodData;
  let modifiedHTML = htmlFile
    .replace('**title**', title)
    .replace('**category**', category)
    .replace('**description**', description);
  res.end(modifiedHTML);
});
server.get('/product', (req, res) => {
  res.json(data);
});

server.get('/query', (req, res) => {
  console.log(req.query);
  res.json(req.query);
});

server.listen(8080, () => {
  console.log(`${'http://localhost:8080/'}Server is running `);
});
