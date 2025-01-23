import express from 'express';
import fs from 'fs';

let htmlFile = fs.readFileSync('./index.html', 'UTF-8');
let data = JSON.parse(fs.readFileSync('./Data.json', 'UTF-8')).products;

const Server = express();

let auth = (req, res, next) => {
  if (req.body.password == 123) {
    next();
  } else {
    res.sendStatus(401);
  }
};

// Server.use(auth); // server level middeware

Server.use(express.json());

Server.get('/', (req, res) => {
  res.send('htmlFile');
});

Server.post('/', auth, (req, res) => {
  res.send('You are logged in');
});

Server.get('/profile', (req, res) => {
  res.send('This is the profile page');
});

// Server.get('/about', auth, (req, res) => {
//   res.send('This is the about page');
// });

Server.listen(8080, () => {
  console.log('Server is running on port 8080');
});
