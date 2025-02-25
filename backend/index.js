import express from 'express';
import 'dotenv/config';
import dbConnect from './database/database.js';
import cookieParser from 'cookie-parser';
import userRouter from './routes/user.route.js';

const server = express();

const port = process.env.PORT || 8000;

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cookieParser());

server.use('/users', userRouter);

dbConnect()
  .then(() => {
    server.listen(port, () => {
      console.log('✅ Server is connected at port', port);
    });
  })
  .catch((err) => {
    console.error('❌ Database Connection Failed:', err);
  });
