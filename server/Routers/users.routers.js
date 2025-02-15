import express from 'express';

import {
  createUser,
  allUserData,
  getOneUser,
  replaceUser,
  updateUser,
  deleteUser,
} from '../Controllers/user.controllers.js';

let Router = express.Router();

Router.post('/', createUser)
  .get('/', allUserData)
  .get('/:id', getOneUser)
  .put('/', replaceUser)
  .patch('/', updateUser)
  .delete('/:id', deleteUser);

export default Router;
