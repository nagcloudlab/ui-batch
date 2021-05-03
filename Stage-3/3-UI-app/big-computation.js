console.log('big computation intiated....')
let i=0;
while(i<10000000000){
    i++
}
console.log('big computation done..')

postMessage(i)