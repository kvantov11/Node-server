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
    console.log(`url: ${req.url}\nmethod: ${req.method}\nheaders: ${req.headers}`);
    // will exit the program? or event loop?
    process.exit();
});

server.listen(8000);