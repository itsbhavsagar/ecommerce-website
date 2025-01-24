import express from 'express';
import fs from 'fs';

let htmlFile = fs.readFileSync('./index.html', 'UTF-8');
let data = JSON.parse(fs.readFileSync('./Data.json', 'UTF-8')).products;

const Server = express();

let auth = (req, res, next) => {
  if (req.body.password == 123) {
    next();
  } else {
    res.sendStatus(401);
  }
};

// Server.use(auth); // server level middeware

Server.use(express.json());

// REST API's

// Create
Server.post('/products', (req, res) => {
  let newData = req.body;
  data.push(newData);
  res.json(newData);
});

// Read
Server.get('/products', (req, res) => {
  res.json(data);
});

Server.get('/products/:id', (req, res) => {
  let id = req.params.id;
  let productData = data.find((obj) => obj.id == id);
  res.json(productData);
});

// Update

// Update the data

Server.put('/products/:id', (req, res) => {
  let id = req.params.id;
  let dataIdx = data.findIndex((obj) => obj.id == id);
  data.splice(dataIdx, 1, { ...req.body, id: id });
  res.send(req.body);
});

// Replce the data

Server.listen(8080, () => {
  console.log('Server is running on port 8080');
});
