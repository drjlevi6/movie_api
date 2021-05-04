//const url = require('url');
const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {
  console.log('In createServer()\n');   // NOT EXECUTED!
   console.log(request.url);
  if(request.url.includes("documentation")) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream("documentation.html").pipe(response);
  } else {
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream("index.html").pipe(response);
 }
}).listen(8080);

console.log(
	'My first Node test server is running on Port 8080.'
);  // Executed
/*if(response.url.indexOf('html')>0) {
  console.log('request.url matches');
} else {
  console.log('URL doesn’t match')
}*/
