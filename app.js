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
  // DOM load event
  document.addEventListener("DOMContentLoaded", getTasks);
  // add task event
  form.addEventListener("submit", addTask);
  // remove task event
  taskList.addEventListener("click", removeTask);
  // clear task event
  clearBtn.addEventListener("click", clearTasks);
  // filter tasks event
  filter.addEventListener("keyup", filterTasks);
}

// Get Tasks from LS
function getTasks() {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.forEach(function (task) {
    //create li element
    const li = document.createElement("li");
    // add class to li
    li.className = "collection-item";
    // create text node and append to li
    li.appendChild(document.createTextNode(task));
    // create new link element
    const link = document.createElement("a");
    // add class to link
    link.className = "delete-item secondary-content";
    // add icon html
    link.innerHTML = '<i class="far fa-trash-alt"></i>';
    // Append the link to li
    li.appendChild(link);

    // append the li to ul
    taskList.appendChild(li);
  });
}

// Add Task
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
  link.innerHTML = '<i class="far fa-trash-alt"></i>';
  // Append the link to li
  li.appendChild(link);

  // append the li to ul
  taskList.appendChild(li);

  // store to LS
  storeTaskInLocalStorage(taskInput.value);

  // Clear input
  taskInput.value = "";

  e.preventDefault();
}

// store Task in LS
function storeTaskInLocalStorage(task) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Remove Task
function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("are you sure?")) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

// Clear Tasks
function clearTasks() {
  //option 1
  // taskList.innerHTML = "";
  // option 2 -- faster
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

// Filter Tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll(".collection-item").forEach(function (task) {
    const item = task.firstChild.textContent;

    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}
