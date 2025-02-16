import express from 'express';

import {
  createUser,
  allUserData,
  getOneUser,
  replaceUser,
  updateUser,
  deleteUser,
  loginUser,
  signUpUser,
} from '../Controllers/user.controllers.js';

let Router = express.Router();

Router.post('/', createUser)
  .get('/', allUserData)
  .get('/:id', getOneUser)
  .put('/', replaceUser)
  .patch('/', updateUser)
  .delete('/:id', deleteUser)
  .post('/login', loginUser)
  .post('/signUp', signUpUser);

export default Router;
