// can import even my own javascript file
// './http.js' is my file for example
// http is core module
const http = require('http');

// callback function gets request
// function requestListener(requestData, responseData) {};
// http.createServer(requestListener);

// anonymous function
// http.createServer(function (requestData, responseData) {});

const server = http.createServer((req, res) => {
    // browser know this content type
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body><h1>hehehe</h1></body>')
    res.write('</html>');
    res.end();
});

server.listen(8000);