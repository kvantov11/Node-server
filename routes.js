const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter message</title></head>');
        // input is like a map where message is key and text is value
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
        res.write('</html>');
        res.end();
        return;
    }
    
    if (url === '/message' && method === 'POST') {
        const body = [];
        // even listener for data
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
    
        // event listener for parsing of incoming request
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            // writeFileSync blocks the following code until  writeFileSync is done
            // thr 3rd argument is callback
            fs.writeFile('message.txt', message, (error) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                res.end();
                return;
            });    
        });
    }
    
    // browser know this content type
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body><h1>hehehe</h1></body>')
    res.write('</html>');
    res.end();    
};

// global object, makes this function available in another file
module.exports = {
    handler: requestHandler,
    someText: 'lulw text hardcoded'
}