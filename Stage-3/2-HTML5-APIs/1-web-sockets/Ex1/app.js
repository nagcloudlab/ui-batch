console.log('-server-side-javascript')

const express=require('express');
const path=require('path');
const WebSocket = require('ws');

const app=express();
app.use(express.static(path.join(__dirname,'public')))


const wss = new WebSocket.Server({ port: 8181 });


wss.on('connection', function connection(ws) {
    let i=0;
    setInterval(()=>{
        i++;
        ws.send('hello client - #msg'+i);
    },3000)
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
    });
});




app.listen(8080,()=>{
    console.log('server up')
})