
const http=require('http')
const httpServer=http.createServer();
const fs=require('fs')

httpServer.on('request',(req,res)=>{
    res.writeHead(200, {
        'Content-Type': 'video/mp4'
    })
    const readStream=fs.createReadStream('/Users/nag/Downloads/sample-mp4-file.mp4');
    readStream.pipe(res);
})

httpServer.listen(8080,()=>{
    console.log("server up");
})