/* let listItems; */
let arrayOfTodos;
let filteredData = [];
let completedStatus = null;

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


function filterData() {
  const userId = document.getElementById('userIdInput').value;

  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => {
      filteredData = json.filter(item => item.userId == userId);

      if (completedStatus !== null) {
        filteredData = filteredData.filter(item => item.completed === completedStatus);
      }

      displayData();
    });
}

function clearData() {
  filteredData = [];
  completedStatus = null;
  displayData();
}

function filterCompleted(status) {
  completedStatus = status;
  filterData();
}

function displayData() {
  const dataList = document.getElementById('dataList');
  dataList.innerHTML = '';

  filteredData.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item.title;
    dataList.appendChild(li);
  });
}

/* const populateTodos = () => {
  if (arrayOfTodos) {
    let orderedList = document.getElementById("todo-list");
    arrayOfTodos.forEach((todo) => {
      listItems = document.createElement("li");
      const titleToDo = todo.title;
      listItems.innerHTML = `${titleToDo}`;
      orderedList.appendChild(listItems);
    });
  }
}; */
