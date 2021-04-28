
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/stream-stock-price', (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/event-stream; charset=utf-8',
        'Cache-Control': 'no-cache'
    });
    setInterval(() => {
        const price = Math.floor(Math.random() * 1000);
        res.write("event: new-price\n")
        res.write("data: " + price + "\n\n")
    }, 2000);
    setInterval(() => {
        res.write("event: recomm\n")
        res.write("data: " + Math.floor(Math.random()*2 )+ "\n\n")
    }, 5000);
})

server.listen(8080, () => {
    console.log('listening on *:8080');
});