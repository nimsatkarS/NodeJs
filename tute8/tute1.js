console.log("Installing a NPM and NODEMON") 


const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  // res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Type', 'text/html');
  // res.end('Hello World im in indian');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <style>
      h1{
          border: 2px solid black;
          text-align: center;
          font-size: 3em;
          background-color: aquamarine;
          color: black;
          font-family: cursive;
      }
      p{
          font-size: 5em;
          font-family: 'Courier New', Courier, monospace;
          text-align: center;
          
      }
  </style>
  <body>
      <h1>This is Npm and Nodemon Installataiin project</h1>
      <p>Here the start Npm ans Nodemon tute1. This tute i will create a server </p>
  </body>
  </html>
  `)
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});