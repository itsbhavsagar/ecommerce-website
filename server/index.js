import express from 'express';
import productRouter from './Routers/product.routers.js';
import userRouter from './Routers/users.routers.js';

const Server = express();
Server.use(express.json());

Server.use('/products', productRouter);
Server.use('/users', userRouter);

Server.listen(8080, () => {
  console.log('Server is running on port 8080');
});
