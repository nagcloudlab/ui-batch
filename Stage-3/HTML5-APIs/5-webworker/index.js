


document.getElementById('big-computation')
.addEventListener('click',e=>{
    const worker=new Worker('./big-computation.js')
    worker.onmessage=message=>{
        document.getElementById('result-span').innerText=message.data.value;
    }
})



document.getElementById('uname')
.addEventListener('keyup',function(e){
    document.getElementById('uname-span').innerText=this.value;
})