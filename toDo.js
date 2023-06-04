let arrayOfTodos = [
    
]


 const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
     .then( (response) => response.json())
     .then( (json) => arrayOfTodos = json)
 }
 console.log(arrayOfTodos)




const logFetchTodos = () => console.log(fetchTodos());

const logTodos = (arr) => {
    fetchTodos()
    .then(res => res.json())
    .then(json => console.log(json))
    for (i = 0;  i < arr.length; i++){
        console.log("todo for user " + arr[i]);
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
