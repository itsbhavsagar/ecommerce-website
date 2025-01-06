import http from 'http';

const server = http.createServer((req, res) => {
  res.end('<h1>I am a H1 Tag !! </h1>');
});

server.listen(8080, () => {
  console.log('server is running on 8080');
});
