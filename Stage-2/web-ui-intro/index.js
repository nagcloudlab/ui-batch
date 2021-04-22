


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


//-----------------------------------------
// using DOM + Timer Api
//-----------------------------------------

const imgEle = document.getElementById('img-ele')
const startBtn = document.getElementById('start-btn')
const stopBtn = document.getElementById('stop-btn')

const images = [
    './images/3.jpeg',
    './images/5.jpeg'
]
stopBtn.disabled = true
startBtn.addEventListener('click', e => {
    startBtn.disabled = true
    stopBtn.disabled = false
    let idx = 0;
    const intervalId = setInterval(() => {
        const nextImagePath = images[idx];
        idx++
        imgEle.src = nextImagePath
        if (idx === images.length)
            idx = 0
    }, 1000)
    stopBtn.addEventListener('click', e => {
        clearInterval(intervalId)
        startBtn.disabled = false
        stopBtn.disabled = true
    })
})



// //-----------------------------------------
// // using DOM + XHR  Api
// //-----------------------------------------

// const top5TodosBtn = document.getElementById('top5-todos-btn')
// const todosTableBody = document.getElementById('todos-table-body')
// const progressMessage = document.getElementById('progress-message')

// top5TodosBtn.addEventListener('click', e => {

//     //..
//     const xhr = new XMLHttpRequest();
//     const url = "https://jsonplaceholder.typicode.com/todos";
//     xhr.open('GET', url, true);
//     xhr.send()

//     progressMessage.innerText = "loading todos..."

//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4) {
//             progressMessage.innerText = ""
//             const responseText = xhr.responseText;
//             const todos = JSON.parse(responseText)
//             const top5Todos = todos.slice(0, 5)
//             const todoRows = top5Todos.map(todo => {
//                 let { id, title, completed } = todo
//                 return `
//             <tr>
//                 <td>${id}</td>
//                 <td>${title}</td>
//                 <td>${completed}</td>
//             </tr>
//         `
//             })
//             todosTableBody.innerHTML = todoRows.join(" ")
//         }
//     }

// })


// //-----------------------------------------
// // using DOM + Fetch  Api
// //-----------------------------------------

const top5TodosBtn = document.getElementById('top5-todos-btn')
const todosTableBody = document.getElementById('todos-table-body')
const progressMessage = document.getElementById('progress-message')

top5TodosBtn.addEventListener('click', async (e) => {
    //..
    const url = "https://jsonplaceholder.typicode.com/todos";
    progressMessage.innerText = "loading todos..."
    let response = await fetch(url)
    let todos = await response.json()
    progressMessage.innerText = ""
    const top5Todos = todos.slice(0, 5)
    const todoRows = top5Todos.map(todo => {
        let { id, title, completed } = todo
        return `
            <tr>
                <td>${id}</td>
                <td>${title}</td>
                <td>${completed}</td>
            </tr>
        `
    })
    todosTableBody.innerHTML = todoRows.join(" ")
})
