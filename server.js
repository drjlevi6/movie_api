const url = require('url');
const http = require('http');

http.createServer((request, response) => {
  console.log('In createServer()\n');
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.end('Hello Node!\n');
}).listen(8080);

//console.log('My first Node test server is running on Port 8080.');
/*if(response.url.indexOf('html')>0) {
  console.log('request.url matches');
} else {
  console.log('URL doesn’t match')
}*/
