import fs from 'fs';

let htmlFile = fs.readFileSync('./index.html', 'UTF-8');
let data = JSON.parse(
  fs.readFileSync(
    '/Users/sagar/Desktop/ecommerce-website/server/Data.json',
    'UTF-8'
  )
).products;

let createProduct = (req, res) => {
  let newData = req.body;
  data.push(newData);
  res.json(newData);
};

let getAllProduct = (req, res) => {
  res.json(data);
};

let getProductById = (req, res) => {
  let id = req.params.id;
  let productData = data.find((obj) => obj.id == id);
  res.json(productData);
};

let replaceProduct = (req, res) => {
  let id = req.params.id;
  let dataIdx = data.findIndex((obj) => obj.id == id);
  data.splice(dataIdx, 1, { ...req.body, id: id });
  res.send(req.body);
};

let updateProduct = (req, res) => {
  let id = req.params.id;
  let dataIdx = data.findIndex((obj) => obj.id == id);
  data.splice(dataIdx, 1, { ...data[dataIdx], ...req.body });
  res.send(data[dataIdx]);
};

let deleteProduct = (req, res) => {
  let id = req.params.id;
  let dataIdx = data.findIndex((obj) => obj.id == id);
  let prevObj = data[dataIdx];
  data.splice(dataIdx, 1);
  res.send(prevObj);
};

export {
  createProduct,
  getAllProduct,
  getProductById,
  replaceProduct,
  updateProduct,
  deleteProduct,
};
