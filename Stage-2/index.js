


//-----------------------------------------
// using DOM Api
//-----------------------------------------

//step-1 : query DOM Elements
const box1 = document.getElementById('box1')
const greetBtn = document.getElementById('greet-btn')
const hideBtn = document.getElementById('hide-btn')
const showBtn = document.getElementById('show-btn')

//step-2 : bind event listeners and react on event
greetBtn.addEventListener('click', event => {
    box1.innerText = "good morning"
})
hideBtn.addEventListener('click', event => {
    box1.style.display = 'none'
})
showBtn.addEventListener('click', event => {
    box1.style.display = 'block'
})


