
const http = require('http');
const fs = require('fs');
const url = require('url');
const server = http.createServer((req, res) => {
    const log = `${Date.now()}:${req.url} New req received\n`;
    const myurl = url.parse(req.url,true)
    console.log(myurl)
    fs.appendFile("log.txt", log, (err) => {
        if (err) {
            console.error("Error writing to log file:", err);
        }
    });

    switch (myurl.pathname) {
        case '/':
            res.end('Hello World');
            break;
        case '/about':
        const username = myurl.query.myname;
            res.end(`hi,${username}`);
            break;
        default:
            res.end('404 not found');
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});