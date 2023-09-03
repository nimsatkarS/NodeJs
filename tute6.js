//Serve the different pages and option

const http = require('http');
const fs = require('fs');

const hostname = 'localhost';
const port = 5000;

const server = http.createServer((req, res) => {
    console.log(req.url);
    url = req.url;

    res.statueCode = 300;
    res.setHeader('content-type', 'text/plain');
    if(url == '/') {
        res.end('home');
    }
    else if(url == '/about'){
        res.end('about');
    }
    else if(url == '/login'){
        res.end('login');
    }
    else if(url == '/service'){
        res.end('service');
    }
    else{
        res.statusCode = 505;
        res.end("<h1>505 Not Found</h1>");
    }
});

server.listen(port, hostname, () =>{
    console.log(`server running at http://${hostname}:${port}/`); 
});
