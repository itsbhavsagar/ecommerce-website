import express from 'express';
import auth from '../middlewares/auth.middleware.js';
import {
  login,
  signup,
  getuser,
  updateuser,
  logoutuser,
} from '../controllers/user.controller.js';
const Router = express.Router();

Router.post('/signup', signup)
  .post('/login', login)
  .get('/getuser', auth, getuser)
  .patch('/update', auth, updateuser)
  .get('/logout', auth, logoutuser);

export default Router;
