// SELECTORS
let currentTask = document.getElementById("current-task");
let taskList = document.querySelector(".todo-list");
let form = document.getElementById("form");

let statusAll = document.getElementById('link-all');
let statusActive = document.getElementById('link-active');
let statusComp = document.getElementById('link-completed');

let numOfItems = 0;
let numCompletedItems = 0;

var nirjan;
// FUNCTIONS

function addTodo (e) {
  e.preventDefault();
 

  // create li
  const taskItem = document.createElement("li");
  taskItem.classList.add("task-item");

  
  // add radio button
  const radioButton = document.createElement("div");
  radioButton.classList.add("radio-btn");
  taskItem.appendChild(radioButton);
  
  // add todo text
  const taskText = document.createElement("h4");
  taskText.innerText = currentTask.value;
  taskText.classList.add('task-text');
  taskItem.appendChild(taskText);

  // add rule
  
  // append the todo item
  taskList.appendChild(taskItem);
  const hr = document.createElement('hr');
  taskList.appendChild(hr);
  currentTask.value="";

  // increase num of items by 1
  numOfItems++;
  // js functionalities

  radioButton.addEventListener('click', (e) => {

    if (radioButton.classList.contains('radio-btn__clicked')) {
      radioButton.classList.remove('radio-btn__clicked');
      taskText.style.textDecoration = 'none';
      numCompletedItems--;
      
    } else {
      // if checked
      radioButton.classList.add('radio-btn__clicked');
      taskText.style.textDecoration = 'line-through';
      numCompletedItems++;
      calculateRemainingItems(numOfItems, numCompletedItems);
    }
    let itemRemaining = calculateRemainingItems(numOfItems, numCompletedItems);
    displayRemainingItems(itemRemaining);
  });

  const tasks = document.querySelectorAll('.task-item');
  exportNodeList(tasks);
};

function calculateRemainingItems(numOfItems, numCompletedItems) {return (numOfItems-numCompletedItems)};


function displayRemainingItems(itemRemaining) {
  let anchor = document.querySelector('.status-bar>a');
  anchor.innerText = `${itemRemaining} items left`;
}

// EVENT LISTENERS
// currentTask.addEventListener("keydown", addTodo);
form.addEventListener("submit", addTodo);
function exportNodeList(tasks) { 
  nirjan = tasks;
  //console.log(tasks)
  
  console.log(nirjan);
}
console.log(nirjan);