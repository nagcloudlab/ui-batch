






$(document).ready(()=>{
    $("#todos-btn").on('click',event=>{
        const apiUrl="https://jsonplaceholder.typicode.com/todos?_limit=5";
        $.getJSON(apiUrl,data=>{
            console.log(data)
        })
    })
})