// SELECTORS
let currentTask = document.getElementById("current-task");
let taskList = document.querySelector(".todo-list");
let form = document.getElementById("form");

let numOfItems = 0;
let numCompletedItems = 0;

var nirjan;
// FUNCTIONS

function addTodo(e) {
  e.preventDefault();

  // create li
  const taskItem = document.createElement("li");
  taskItem.classList.add("task-item");

  // add radio button
  const radioButton = document.createElement("div");
  radioButton.classList.add("radio-btn", "radio-btn__added");
  taskItem.appendChild(radioButton);

  // add checkIcon
  const checkIcon = document.createElement("img");
  checkIcon.setAttribute("src", "../images/icon-check.svg");
  checkIcon.classList.add("check-icon");
  radioButton.appendChild(checkIcon);

  // add todo text
  const taskText = document.createElement("h4");
  taskText.innerText = currentTask.value;
  taskText.classList.add("task-text");
  taskItem.appendChild(taskText);

  // add rule
  taskList.appendChild(taskItem);
  const hr = document.createElement("hr");
  taskList.appendChild(hr);
  
  // Add the cross icon
  const cross = document.createElement('img');
  cross.setAttribute('src', "../images/icon-cross.svg");
  cross.classList.add('cross-icon');
  taskItem.appendChild(cross);
  
  currentTask.value = "";

  // increase num of items by 1
  numOfItems++;
  // js functionalities
}

function calculateRemainingItems(numOfItems, numCompletedItems) {
  return numOfItems - numCompletedItems;
}

function displayRemainingItems(itemRemaining) {
  let anchor = document.querySelector(".status-bar>a");
  anchor.innerText = `${itemRemaining} items left`;
}

// EVENT LISTENERS
// currentTask.addEventListener("keydown", addTodo);
form.addEventListener("submit", addTodo);

document.body.addEventListener("click", (event) => {
  let radioButton = event.target;
  let taskText = radioButton.nextElementSibling;
  let checkIcon = radioButton.firstElementChild;

  
  if (
    event.target.classList.contains("radio-btn")
  ) {
    if (radioButton.classList.contains("radio-btn__clicked")) {
      radioButton.classList.remove("radio-btn__clicked");
      checkIcon.classList.remove("check-icon__checked");
      taskText.style.textDecoration = "none";
      taskText.classList.remove('text-active');
      numCompletedItems--;
    } else {
      // if checked
      radioButton.classList.add("radio-btn__clicked");
      taskText.style.textDecoration = "line-through";
      taskText.classList.add('text-active');
      checkIcon.classList.add("check-icon__checked");
      numCompletedItems++;
      calculateRemainingItems(numOfItems, numCompletedItems);
    }
  }
  let itemRemaining = calculateRemainingItems(numOfItems, numCompletedItems);
  displayRemainingItems(itemRemaining);

  // status buttons
  // All tasks
  let allTasks = document.querySelectorAll(".task-text");

  if (event.target.id == "link-all") {
    if (event.target.classList.contains("link-active")) {
      event.target.classList.remove('link-active');
      allTasks.forEach((item) => {
        event.preventDefault();
        item.classList.remove("active");
      });
    } else {
      event.target.classList.add("link-active");
      allTasks.forEach((item) => {
        event.preventDefault();
        item.classList.add("active");
      });
    }
  }

  // completed Tasks
  let completedTasks = document.querySelectorAll('.text-active');
  if (event.target.id == "link-completed") {
    if (event.target.classList.contains("link-active")) {
      event.target.classList.remove('link-active');
      completedTasks.forEach((item) => {
        event.preventDefault();
        item.classList.remove("active");
      });
    } else {
      event.target.classList.add("link-active");
      completedTasks.forEach((item) => {
        event.preventDefault();
        item.classList.add("active");
      });
    }
  }

  // active tasks
  let activeTasks = document.querySelectorAll('.task-text:not(.text-active)');
  if (event.target.id == "link-active") {
    if (event.target.classList.contains("link-active")) {
      event.target.classList.remove('link-active');
      activeTasks.forEach((item) => {
        event.preventDefault();
        item.classList.remove("active");
      });
    } else {
      event.target.classList.add("link-active");
      activeTasks.forEach((item) => {
        event.preventDefault();
        item.classList.add("active");
      });
    }
  }

  // clear tasks
  let todoList = document.querySelector('.todo-list');
  let allTodos = document.querySelectorAll('.task-item');
  let allHr = document.querySelectorAll('hr')
  if (event.target.id == "clear-list") {
    event.preventDefault();
    console.log(allTodos);
    allTodos.forEach(item => {
      todoList.removeChild(item);
      
    });

    allHr.forEach(item => {
      todoList.removeChild(item);
      
    })

    displayRemainingItems(0,0);
  }

  // cross to delete that task
  if (event.target.classList.contains('cross-icon')) {
    let taskItem = event.target.parentNode;
    let hr = taskItem.nextElementSibling;
    let todoList = taskItem.parentNode;

    todoList.removeChild(taskItem);
    todoList.removeChild(hr);

  }
});
