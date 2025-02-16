import User from '../models/users.models.js';

import bcrypt from 'bcrypt';

let createUser = async (req, res) => {
  try {
    let newData = req.body;
    let newUser = new User(newData);
    let data = await newUser.save();
    res.send(data);
  } catch (err) {
    res.send({ result: false, error: err.message });
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

// SIGN UP USER

let signUpUser = async (req, res) => {
  let { userName, email, password } = req.body;

  try {
    let user = await User.findOne({ email: email });
    if (user) {
      // If user exists don't create a new user
      return res.send({ res: false, message: 'User already exists' });
    }
    let salt = await bcrypt.genSalt(10);
    let hashedPassword = await bcrypt.hash(password, salt);
    let newUser = new User({
      userName,
      email,
      password: hashedPassword,
    });
    let data = await newUser.save(); // Save newUser to database
    return res.send(data);
  } catch (err) {
    res.send({ res: false, message: err.message });
  }
};

// LOGIN USER

let loginUser = async (req, res) => {
  let { userName, email, password } = req.body;
  try {
    let user = await User.findOne({ email: email }); // Find user by email
    if (!user) {
      // If user does not exist return error message
      return res.send({ res: false, message: 'User does not exist' });
    }
    let validPassword = await bcrypt.compare(password, user.password); // Compare password
    if (!validPassword) {
      // If password is invalid return error message
      return res.send({ res: false, message: 'Invalid password' });
    }
    return res.send({ res: true, message: 'Login successful' });
  } catch (err) {
    // If there is an error return error message
    res.send({ res: false, message: err.message });
  }
};

export {
  createUser,
  allUserData,
  getOneUser,
  replaceUser,
  updateUser,
  deleteUser,
  signUpUser,
  loginUser,
};
