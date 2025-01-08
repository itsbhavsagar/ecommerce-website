import http from 'http';
import fs from 'fs';
import { log } from 'console';

let htmlFile = fs.readFileSync('./index.html', 'utf-8');
let obj = {
  name: 'Sagar',
};

const server = http.createServer((req, res) => {
  console.log(req.url);

  res.setHeader('Content-Type', 'text/html');
  res.end(htmlFile);
});

server.listen(8080, () => {
  console.log('server is running on 8080');
});
