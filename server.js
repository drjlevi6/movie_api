const url = require('url');
const http = require('http');

http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  //response.end('Hello Node!\n');
  console.log('Request:', request);
  console.log('Response:', response);
}).listen(8080);

/*console.log('My first Node test server is running on Port 8080.');
if(response.url.indexOf('html')>0) {
  console.log('request.url matches');
} else {
  console.log('URL doesn’t match')
}*/
