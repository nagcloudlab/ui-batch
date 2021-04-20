

console based todo application
-----------------------------------

data model
-------------
    
    todo = {id:number,title:string,completed:boolean,createdAt:date,updatedAt:date}


use cases
-------------

    - addTodo(title)
    - editTodo(id,newTitle)
    - completeTodo(id) - toggle
    - completeAll()    - toggle
    - deleteTodo(id)
    - clearCompleted()
    - viewTodos(flag)  - flag = ALL | COMPLETE | ACTIVE       
    - getActiveTodoCount()




things to implement
-------------------

    => Naming conventions
    => code organization
    => Functional style coding + OO
    => compact solution i.e less number of lines
    => right data structures