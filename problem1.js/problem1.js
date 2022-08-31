const http = require("http");
const fs = require("fs");

const app = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    if (req.url === '/metrics') {
        fs.readFile("./src/circle.html", (error, data) => {
            res.end(data);
        });
    }
});

const port = process.env.port || 1508;
const host = 'localhost';

app.listen(port, host, () => {
    console.log(`server loading at ${port}`)
});