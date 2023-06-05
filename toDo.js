let arrayOfTodos = []


 const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
     .then(res => res.json())
     .then(json => console.log(json))
     .then(data => arrayOfTodos = data)
     console.log(arrayOfTodos)
 }


const logTodos = (arr) => {
    fetchTodos()
    for (i = 0;  i < arr; i++){
    console.log("todo for user " + arrayOfTodos[i].arr);
    }
}

logTodos(userId)
logTodos(id)
logTodos(title)
logTodos(completed)


const populateTodos = () => {
    fetchTodos()
    .then(res => res.json())
    .then(todos => { 
    })
}