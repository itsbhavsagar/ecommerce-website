import fs from 'fs';

let htmlFile = fs.readFileSync('./index.html', 'UTF-8');
let data = JSON.parse(
  fs.readFileSync(
    '/Users/sagar/Desktop/ecommerce-website/server/Data.json',
    'UTF-8'
  )
).users;

let createUsers = (req, res) => {
  let newData = req.body;
  data.push(newData);
  res.json(newData);
};

let getAllUsers = (req, res) => {
  res.json(data);
};

let getUsersById = (req, res) => {
  let id = req.params.id;
  let UserData = data.find((obj) => obj.id == id);
  res.json(UserData);
};

let replaceUsers = (req, res) => {
  let id = req.params.id;
  let dataIdx = data.findIndex((obj) => obj.id == id);
  data.splice(dataIdx, 1, { ...req.body, id: id });
  res.send(req.body);
};

let updateUsers = (req, res) => {
  let id = req.params.id;
  let dataIdx = data.findIndex((obj) => obj.id == id);
  data.splice(dataIdx, 1, { ...data[dataIdx], ...req.body });
  res.send(data[dataIdx]);
};

let deleteUsers = (req, res) => {
  let id = req.params.id;
  let dataIdx = data.findIndex((obj) => obj.id == id);
  let prevObj = data[dataIdx];
  data.splice(dataIdx, 1);
  res.send(prevObj);
};

export {
  createUsers,
  getAllUsers,
  getUsersById,
  replaceUsers,
  updateUsers,
  deleteUsers,
};
