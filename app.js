// Defining UI variables
const form = document.querySelector("#task-form");
const tasksList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// Load all event listeners
loadEventListeners();

// Creating function loadEventListeners
function loadEventListeners() {
    // Add task event
    form.addEventListener("submit", addTask);
    // Remove task event
    tasksList.addEventListener("click", removeTask);
    // Clear all tasks
    clearBtn.addEventListener("click", clearTasks);
    // Filter tasks
    filter.addEventListener("keyup", filterTasks);
};

// Add task
function addTask(e) {
    if(taskInput.value === "") {
        alert("Please enter a task");
    }

    // Create <li> element
    const li = document.createElement("li");
    // Add class
    li.className = "collection-item yellow darken-2";
    // Create text node and append to the <li>
    li.appendChild(document.createTextNode(taskInput.value))
    // Create new link element
    const link = document.createElement("a");
    // Add class
    link.className = "delete-item secondary-content";
    // Add icon html
    link.innerHTML = "<i class='fa fa-remove'></i>";
    // Append link to the <li>
    li.appendChild(link);

    // Append the <li> to the <ul>
    tasksList.appendChild(li);

    // Clear input
    taskInput.value = "";

    e.preventDefault();
}

// Remove Task
function removeTask(e) {
    if(e.target.parentElement.classList.contains("delete-item")) {
        if(confirm("Are you sure you want to delete this task?")){
            e.target.parentElement.parentElement.remove();
        }
    }
}

// Clear All Tasks
function clearTasks() {
    while(tasksList.firstChild) {
        tasksList.removeChild(tasksList.firstChild);
    }
}

// Filter Tasks
function filterTasks(e) {
    const text = e.target.value.toLowerCase();
  
    document.querySelectorAll(".collection-item").forEach(
        function(task) {
            const item = task.firstChild.textContent;
            if(item.toLowerCase().indexOf(text) != -1){
                task.style.display = "Block";
            } else {
                task.style.display = "None";
            }
        }
    );
}