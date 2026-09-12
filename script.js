const AddTasks = document.querySelector(".add-tasks");
const list = document.querySelector(".tasks");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function addTask(event) {
	event.preventDefault();
	const text = this.querySelector("[name = task]").value;

	const newTask = {
		text,
		done = false,
	};
	tasks.push(newTask);
	populateList(tasks,list);
	localStorage.setItem("tasks",JSON.stringify(tasks));
	this.reset();
}
function populateList(tasks = [], list) {
  list.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];


    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "task" + i;
    checkbox.checked = task.done;

   
    const label = document.createElement("label");
    label.htmlFor = "task" + i;
    label.textContent = task.text;

    
    const listItem = document.createElement("li");
    listItem.appendChild(checkbox);
    listItem.appendChild(label);

    
    list.appendChild(listItem);
  }
}

function toggleDone(e) {
	if(!e.target.matches("input")) return;
	const element = e.target;
	const index = element.dataset.index;
	tasks[index].done = !tasks[index].done;
	localStorager.setItem("tasks",JSON.stringify(tasks));
	populateList(tasks, list);
}

addTasks.addEventListener("submit", addTask);
list.addEventListener("click", toggleDone);
populateList(tasks,list);
