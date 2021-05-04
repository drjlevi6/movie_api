//const url = require('url');
const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {
  //console.log('\n\nNew Input:\n');
  //console.log(request.url); //request.url
  fs.appendFile('./log.txt', 
    'URL: ' + request.url + '\n' + 
    'Timestamp: ' + Date() + '\n\n', (err) => {
      if (err) { console.log(err); }
    });
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
