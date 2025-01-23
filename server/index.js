import express from 'express';
import fs from 'fs';
const Server = express();
const htmlFile = fs.readFileSync('index.html', 'UTF-8');
let data = JSON.parse(fs.readFileSync('./Data.json', 'UTF-8')).products;

let auth = (req, res, next) => {
  if (req.query.password == 123) {
    next();
  } else {
    res.sendStatus(401).send('This is a unauthorized request');
  }
};

Server.use(auth); // server level middeware

Server.get('/', (req, res) => {
  res.send('htmlFile');
});

Server.get('/profile', (req, res) => {
  res.send('This is the profile page');
});

Server.get('/about', (req, res) => {
  res.send('This is the about page');
});

Server.listen(8080, () => {
  console.log('Server is running on port 8080');
});
