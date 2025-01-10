import http from 'http';
import fs from 'fs';

let htmlFile = fs.readFileSync('./index.html', 'UTF-8');
let data = JSON.parse(fs.readFileSync('./Data.json', 'UTF-8')).products;

const server = http.createServer((req, res) => {
  if (req.url == '/') {
    res.setHeader('Content-Type', 'text/html');
    res.end(htmlFile);
  } else if (req.url == '/product') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data));
  } else {
    let url = req.url;
    let index = +url.split('/')[2];
    res.setHeader('Content-Type', 'text/html');
    let modifiedHTML = htmlFile
      .replace('**title**', data[index != undefined ? index : 0].title)
      .replace('**category**', data[index != undefined ? index : 0].category)
      .replace(
        '**description**',
        data[index != undefined ? index : 0].description
      );

    res.end(modifiedHTML);
  }
});

server.listen(8080, () => {
  console.log('server is running on 8080');
});
