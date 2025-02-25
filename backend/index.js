import express from 'express';
import 'dotenv/config';
import dbConnect from './database/database.js';

const server = express();

const port = process.env.PORT || 8080;

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

dbConnect()
  .then(() => {
    server.listen(port, () => {
      console.log('Server is connected at port', port);
    });
  })
  .catch((err) => {
    console.log(err);
  });
