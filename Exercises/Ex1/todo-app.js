
//--------------------------------------------------
// data model
//--------------------------------------------------

class Todo {
    static nextId = 0;
    constructor(title) {
        this.id = ++Todo.nextId
        this.title = title
        this.completed = false
    }
}


//--------------------------------------------------
// service
//--------------------------------------------------

const todoFilters = {
    ALL: todo => true,
    ACTIVE: todo => !todo.completed,
    COMPLETED: todo => todo.completed
}

class TodoService {
    todos = []
    addTodo(title) {
        const todo = new Todo(title)
        this.todos = this.todos.concat(todo)
    }
    editTodo(id, newTitle) {
        this.todos = this.todos.map(todo => {
            if (todo.id === id)
                todo.title = newTitle
            return todo
        })
    }
    completeTodo(id) {
        this.todos = this.todos.map(todo => {
            if (todo.id === id)
                todo.completed = !todo.completed
            return todo
        })
    }
    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id)
    }
    clearCompleted() {
        this.todos = this.todos.filter(todo => !todo.completed)
    }
    completeAll() {
        const areAllComleted = this.todos.every(todo => todo.completed)
        this.todos = this.todos.map(todo => {
            todo.completed = !areAllComleted
            return todo
        })
    }
    viewTodos(flag) { // flag = ALL/ACTIVE/COMPLETED
        this.todos
            .filter(todoFilters[flag])
            .forEach(todo => console.log(todo))
    }
    getActiveTodoCount() {
        const todoLeft = this.todos.reduce((acc, next) => {
            if (!next.completed)
                return acc + 1
            else
                return acc;
        }, 0)
        console.log(todoLeft);
    }
}


//--------------------------------------------------
// UI
//--------------------------------------------------

const todoService = new TodoService()
todoService.addTodo('todo-1')
todoService.addTodo('todo-2')
todoService.addTodo('todo-3')
todoService.addTodo('todo-4')
todoService.addTodo('todo-5')