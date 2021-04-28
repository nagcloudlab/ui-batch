

import axios from 'axios'

const apiUrl = "http://localhost:3000/todos";

export function loadTodos() {
    return axios.get(apiUrl)
}


export function addTodo(title) {
    return axios.post(apiUrl, { title })
}

export function deleteTodo(id) {
    return axios.delete(apiUrl+"/"+id)
}