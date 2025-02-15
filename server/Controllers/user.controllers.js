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

let getOneUser = async (req, res) => {
  // let id = req.params.id;
  // let data = await User.findById(id);
  let { email } = req.body;
  let data = await User.findOne({ email: email });
  res.send(data);
};

let replaceUser = async (req, res) => {
  let { email } = req.body;
  let data = await User.findOneAndReplace(
    { email: email },
    { ...req.body },
    { new: true }
  );
  res.send(data);
};

let updateUser = async (req, res) => {
  let { email } = req.body;
  let data = await User.findOneAndUpdate(
    { email: email },
    { ...req.body },
    { new: true }
  );
  res.send(data);
};

let deleteUser = async (req, res) => {
  let id = req.params.id;
  let data = await User.findByIdAndDelete(id);
  res.send(data);
};

export {
  createUser,
  allUserData,
  getOneUser,
  replaceUser,
  updateUser,
  deleteUser,
};
