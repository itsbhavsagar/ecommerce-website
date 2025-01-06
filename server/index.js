import http from 'http';

const server = http.createServer((req, res) => {
  // console.log(req);
  res.end('getting res from NodeJs');
});

server.listen(8080, () => {
  console.log('server is running on 8080');
});
