
console.log('-client-side-javascript')


let socket = new WebSocket("ws://localhost:8181");

socket.onmessage=function(message){
    console.log(message.data)
}

let i=0;
setInterval(()=>{
    i++;
    socket.send("hello server #msg"+i)
},1000)