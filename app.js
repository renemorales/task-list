// Define Ui Vars

const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// load all event lisiteners
loadEventListeners();

//  load all event listeners
function loadEventListeners() {
  // add task event
  form.addEventListener("submit", addTask);
}

// Add task
function addTask(e) {
  if (taskInput.value === "") {
    alert("add a task");
  }

  //create li element
  const li = document.createElement("li");
  // add class to li
  li.className = "collection-item";
  // create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // create new link element
  const link = document.createElement("a");
  // add class to link
  link.className = "delete-item secondary-content";
  // add icon html
  // link.innerHTML = '<i class="fa fa-remove"></i>';
  link.innerHTML = '<i class="far fa-trash-alt"></i>';
  // Append the link to li
  li.appendChild(link);

  // append the li to ul
  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";

  e.preventDefault();
}
