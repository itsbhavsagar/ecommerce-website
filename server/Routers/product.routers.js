import express from 'express';

import {
  createProduct,
  getAllProduct,
  getProductById,
  replaceProduct,
  updateProduct,
  deleteProduct,
} from '../Controllers/product.controllers.js';

let Router = express.Router();

Router.post('/', createProduct)
  .get('/', getAllProduct)
  .get('/:id', getProductById)
  .put('/:id', replaceProduct)
  .patch('/:id', updateProduct)
  .delete('/:id', deleteProduct);

export default Router;
