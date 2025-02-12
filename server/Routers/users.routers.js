import express from 'express';

import {
  createUsers,
  getAllUsers,
  getUsersById,
  replaceUsers,
  updateUsers,
  deleteUsers,
} from '../Controllers/user.controllers.js';

let Router = express.Router();

Router.post('/', createUsers)
  .get('/', getAllUsers)
  .get('/:id', getUsersById)
  .put('/:id', replaceUsers)
  .patch('/:id', updateUsers)
  .delete('/:id', deleteUsers);

export default Router;
