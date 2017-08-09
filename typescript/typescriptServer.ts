var http = require('http');

const hostname = 'L10B775.NA.SAS.COM';
const port = 8080;

const server = http.createServer((req:any, res:any) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hi Chris\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
