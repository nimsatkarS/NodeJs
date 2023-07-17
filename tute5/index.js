const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
const home = fs.readdirSync('index.html')
const about = fs.readdirSync ('./about.html')
const login = fs.readdirSync ('./login.html')
const service =fs.readdirSync('./service.html')

const server = http.createServer((req, res) => {
console.log(req.url);
url =req.url;

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if(url == '/'){
  res.end('home');
  }
  else if(url == '/about'){
    res.end('about');
  }
  else if(url == '/login'){
    res.end('service');
  }
  else if(url == '/service'){
    res.end('service');
  }
else{
    res.statusCode = 404;
    res.end("<h1>404 Not Found</h1>");
}

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});