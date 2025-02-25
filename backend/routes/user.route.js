import express from 'express';
import {
  login,
  signup,
  getuser,
  updateuser,
} from '../controllers/user.controller.js';
const Router = express.Router();

Router.post('/signup', signup)
  .post('/login', login)
  .get('/getUser', getuser)
  .patch('/update', updateuser);

export default Router;
