



function getFullscreenElement() {
    return document.fullscreenElement;
}


function toggleFullscreen() {
    if (getFullscreenElement()) {
        document.exitFullscreen()
    } else {
        // document.documentElement.requestFullscreen()
        document.getElementById('myBox').requestFullscreen()
    }
}

document.addEventListener('dblclick', () => {
    toggleFullscreen()
})


document.addEventListener('fullscreenchange',e=>{
    console.log('fullscreen changed..')
    console.log(e);
})