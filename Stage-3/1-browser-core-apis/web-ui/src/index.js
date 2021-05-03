
import 'bootstrap/dist/css/bootstrap.css';

// import todoService from './todo-service'
import { loadTodos, addTodo,deleteTodo } from './todos-api-client'

//--------------------------------------------------------
// using DOM API
//--------------------------------------------------------
const todoInputField = document.querySelector('#todo-app-header input')
const todoListElement = document.querySelector('#todo-list ul')
const completeAllElement = document.querySelector('#todo-list .btn-warning')


renderTodos(); // load + render intial todos


todoInputField.addEventListener('keyup', e => {
    if (e.which !== 13) return
    const title = todoInputField.value;
    if (!title) return
    // todoService.addTodo(todoTitle)
    addTodo(title)
        .then(response => response.data)
        .then(r => {
            todoInputField.value = "";
            renderTodos();
        })
})

todoListElement.addEventListener('click', async (e) => {
    if (e.target.tagName === "BUTTON") {
        const todoId = e.target.dataset.todoId;
        // todoService.deleteTodo(Number.parseInt(todoId));
        await deleteTodo(todoId)
    }
    if (e.target.tagName === "INPUT") {
        const todoId = e.target.dataset.todoId;
        // todoService.completeTodo(Number.parseInt(todoId));
    }
    renderTodos()
})

completeAllElement.addEventListener('click', e => {
    todoService.completeAll();
    renderTodos()
})




async function renderTodos() {
    // const todos = todoService.getTodos('ALL')

    const response = await loadTodos()
    const todos = await response.data;

    const todoListElements = todos.map(todo => {
        let { id, title, completed } = todo;
        return `
                <li class="list-group-item ${todo.completed ? 'bg-light' : ''}">
                    <div class="d-flex justify-content-between align-items-center">
                        <input ${todo.completed ? 'checked' : ''} data-todo-id=${todo._id} type="checkbox"/>
                        <label>${title}</label>
                        <button data-todo-id=${todo._id} class="btn btn-danger">delete</button>
                    </div>
                </li>
        `
    })
    todoListElement.innerHTML = todoListElements.join(" ")
}
