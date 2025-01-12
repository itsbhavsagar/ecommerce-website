import http from 'http';
import fs from 'fs';

let htmlFile = fs.readFileSync('./index.html', 'UTF-8');
let data = JSON.parse(fs.readFileSync('./Data.json', 'UTF-8')).products;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.end(htmlFile);
  } else if (req.url === '/product') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data));
  } else if (/^\/product\/\d+$/.test(req.url)) {
    let index = +req.url.split('/')[2];
    let obj = data.find((obj) => obj.id == index);

    if (!obj) {
      res.statusCode = 404;
      res.end('<h1>Product not found</h1>');
      return;
    }

    res.setHeader('Content-Type', 'text/html');
    let { title, category, description } = obj;
    let modifiedHTML = htmlFile
      .replace('**title**', title)
      .replace('**category**', category)
      .replace('**description**', description);

    res.end(modifiedHTML);
  } else {
    res.statusCode = 404;
    res.end('<h1>Page not found</h1>');
  }
});

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});
