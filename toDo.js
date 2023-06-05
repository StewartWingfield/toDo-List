let listItems;
let arrayOfTodos;

const fetchTodos = () => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((data) => {
      arrayOfTodos = data;
    });
};

const logTodos = () => {
  console.log(arrayOfTodos);
};

const populateTodos = () => {
  if (arrayOfTodos) {
    let orderedList = document.getElementById("todo-list");
    arrayOfTodos.forEach((todo) => {
      listItems = document.createElement("li");
      const titleToDo = todo.title;
      listItems.innerHTML = `${titleToDo}`;
      orderedList.appendChild(listItems);
    });
  }
};
