


//---------------------------------------
// time span
//---------------------------------------

setInterval(() => {
    document.getElementById('time-span').innerText=new Date().toLocaleTimeString('en-US',{timeZone:'Asia/Kolkata'})
}, 1000);


// .js
//-----------------------------------------
// View i.e UI logic
//-----------------------------------------

const todosCountFiveElement = document.querySelector("#todos-count-1")
const todosCountSelectElement = document.querySelector("#todos-count-2")
const todosCountInputElement = document.querySelector("#todos-count-3")

const todosBox = document.querySelector("#todos-box")

todosCountFiveElement.addEventListener('click', e => {
    loadRenderTodos(5)
});
todosCountSelectElement.addEventListener('change',e=>{
    loadRenderTodos(todosCountSelectElement.value)
})
todosCountInputElement.addEventListener('blur',e=>{
    loadRenderTodos(todosCountInputElement.value)
})


function loadRenderTodos(limit) {
    todosApi.loadTodos(limit)
        .then(todos => {
            const todoListElements = todos.map(todo => {
                let { id, title, completed } = todo;
                return `
                <div class="list-group-item ${todo.completed ? 'bg-light' : ''}">
                    <div class="d-flex justify-content-between align-items-center">
                        <input ${todo.completed ? 'checked' : ''} data-todo-id=${todo._id} type="checkbox"/>
                        <label>${title}</label>
                        <button data-todo-id=${todo._id} class="btn btn-danger">delete</button>
                    </div>
                </div>
        `
            })
            todosBox.innerHTML = todoListElements.join(" ")
        })
        .catch(error => {
            console.log(error);
        });
}

document.getElementById('hide-btn')
.addEventListener('click',e=>{
    todosBox.style.display='none'
})
document.getElementById('show-btn')
.addEventListener('click',e=>{
    todosBox.style.display='block'
})




// .js
//-----------------------------------------
// Service i.e Non-UI logic
//-----------------------------------------

const todosApi = {
    loadTodos(limit = 5) {
        return new Promise((resolve, reject) => {
            const apiUrl = "https://jsonplaceholder.typicode.com/todos?_limit=" + limit
            let promise = fetch(apiUrl)
            promise.then(response => response.json())
                .then(todos => {
                    resolve(todos)
                })
                .catch(error => {
                    reject(error)
                })
        });
    }
}