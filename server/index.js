import http from 'http';
import fs from 'fs';

const htmlTemplate = fs.readFileSync('./index.html', 'UTF-8');
const data = JSON.parse(fs.readFileSync('./Data.json', 'UTF-8')).products;

const handleRequest = (req, res) => {
  try {
    if (req.url === '/') {
      res.setHeader('Content-Type', 'text/html');
      res.end(htmlTemplate);
    } else if (req.url.startsWith('/product')) {
      const index = parseInt(req.url.split('/')[2], 10);
      const product =
        isNaN(index) || index < 0 || index >= data.length ? null : data[index];

      if (!product) {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Product not found' }));
      } else {
        const dynamicHtml = htmlTemplate
          .replace('**title**', product.title)
          .replace('**category**', product.category);

        res.setHeader('Content-Type', 'text/html');
        res.end(dynamicHtml);
      }
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
    }
  } catch (error) {
    console.error(error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
};

const server = http.createServer(handleRequest);

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});
