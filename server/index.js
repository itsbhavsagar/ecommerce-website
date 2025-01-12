import fs from 'fs';

import express from 'express';

let htmlFile = fs.readFileSync('./index.html', 'UTF-8');
let data = JSON.parse(fs.readFileSync('./Data.json', 'UTF-8')).products;

const server = express();

server.get('/', (req, res) => {
  res.sendFile('/Users/sagar/Desktop/ecommerce-website/server/index.html');
});

server.get('/profile', (req, res) => {
  res.send('/ profile is working');
});

server.get('/product', (req, res) => {
  res.json(data);
});

server.get('/about', (req, res) => {
  res.send('/ about is working');
});

server.listen(8080, () => {
  console.log(`${'http://localhost:8080/'}Server is running `);
});
