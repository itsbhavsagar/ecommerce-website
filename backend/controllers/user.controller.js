import { response } from 'express';
import User from '../model/user.model.js';

const tokenGeneration = async function (user) {
  const token = await user.generateToken();
  return token;
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email: email });

    if (!existingUser) {
      return res
        .status(404)
        .send({ result: false, message: 'User does not exist!' });
    }

    const response = await existingUser.checkPassword(password);
    if (response) {
      const token = await tokenGeneration(existingUser);
      const option = { httpOnly: true, secure: true };

      return res
        .status(200)
        .cookie('Token', token, option)
        .send({ result: true, message: 'Login Successful' });
    } else {
      return res
        .status(401)
        .send({ result: false, message: 'Password is incorrect' });
    }
  } catch (err) {
    return res.send({ result: false, message: err.message });
  }
};

const signup = async (req, res) => {
  const { email, password, userName } = req.body;

  try {
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res
        .status(409)
        .send({ result: false, message: 'User already Exist' });
    } else {
      const newUser = new User(req.body);
      const user = await newUser.save();
      const token = await tokenGeneration(user);
      const option = { httpOnly: true, secure: true };

      return res.status(200).cookie('Token', token, option).json({
        result: true,
        message: 'User Created',
        data: user,
      });
    }
  } catch (err) {
    return res.send({ result: false, message: err.message });
  }
};

const getuser = (req, res) => {
  try {
    const user = req.user;
    return res.send({ result: true, message: 'User Data', data: user });
  } catch (err) {
    return res.send({ result: false, message: err.message });
  }
};

const updateuser = async (req, res) => {
  if (!req.user) {
    return res.send({ result: false, message: 'Please Login' });
  }
  try {
    const user = req.user;
    const { _id } = user;

    const updatedData = await User.findByIdAndUpdate(_id, req.body, {
      new: true,
    });

    return res.send({
      result: true,
      message: 'User Updated Successfully',
      data: updatedData,
    });
  } catch (err) {
    return res.send({ result: false, message: err.message });
  }
};

const logoutuser = async (req, res) => {
  if (!req.user) {
    return res.send({ result: false, message: 'Please Login' });
  }
  try {
    return res
      .clearCookie('Token')
      .send({ result: true, message: 'User Logged Out Successfully' });
  } catch (err) {
    return res.send({ result: false, message: err.message });
  }
};

export { login, signup, getuser, updateuser, logoutuser };
