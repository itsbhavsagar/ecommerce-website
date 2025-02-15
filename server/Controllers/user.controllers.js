import fs from 'fs';
import User from '../models/users.models.js';
import { error } from 'console';

let htmlFile = fs.readFileSync('./index.html', 'UTF-8');
let data = JSON.parse(
  fs.readFileSync(
    '/Users/sagar/Desktop/ecommerce-website/server/Data.json',
    'UTF-8'
  )
).users;

let createUser = async (req, res) => {
  try {
    let newData = req.body;
    let newUser = new User(newData);
    let data = await newUser.save();
    res.send(data);
  } catch (err) {
    res.send({ result: fasle, error: err.message });
    console.log(err);
  }
};

let allUserData = async (req, res) => {
  let data = await User.find({});
  res.send(data);
};

let getOneUser = (req, res) => {
  let id = req.params.id;
  let UserData = data.find((obj) => obj.id == id);
  res.json(UserData);
};

let replaceUser = (req, res) => {
  let id = req.params.id;
  let dataIdx = data.findIndex((obj) => obj.id == id);
  data.splice(dataIdx, 1, { ...req.body, id: id });
  res.send(req.body);
};

let updateUser = (req, res) => {
  let id = req.params.id;
  let dataIdx = data.findIndex((obj) => obj.id == id);
  data.splice(dataIdx, 1, { ...data[dataIdx], ...req.body });
  res.send(data[dataIdx]);
};

let deleteUser = (req, res) => {
  let id = req.params.id;
  let dataIdx = data.findIndex((obj) => obj.id == id);
  let prevObj = data[dataIdx];
  data.splice(dataIdx, 1);
  res.send(prevObj);
};

export {
  createUser,
  allUserData,
  getOneUser,
  replaceUser,
  updateUser,
  deleteUser,
};
