const taskInput = document.querySelector('.task-input');
const addButton = document.querySelector('.add-button');
const todoList = document.querySelector('.todo-list');

addButton.addEventListener('click', addTask);

function addTask(event){
	event.preventDefault();
	
	const todoDiv = document.createElement('div');
	todoDiv.classList.add('todo');

    const checkButton = document.createElement('button')
	checkButton.innerHTML = '<img class="img-check" src="images/check-solid.svg" width="15px" height="15px">';
	checkButton.classList.add("complete-task-button");
	todoDiv.appendChild(checkButton);

	const newTask = document.createElement('li');
	newTask.innerText = taskInput.value;
	newTask.classList.add('todo-item');
    if(newTask.innerText === '') {
    alert("Create a task!");
	}else todoDiv.appendChild(newTask);

	todoDiv.appendChild(newTask);
	
	

	const deleteButton = document.createElement('button')
	deleteButton.innerHTML = '<img class="img-trash" src="images/trash-solid.svg" width="15px" height="15px">';
	deleteButton.classList.add("delete-task-button");
	todoDiv.appendChild(deleteButton);

	todoList.appendChild(todoDiv);
	
	taskInput.value = "";
	
}

todoList.addEventListener('click', checkTask);

function checkTask(event){
    if(event.target.classList[0] === 'delete-task-button'){
		event.target.parentElement.remove();
	}

	if(event.target.classList[0] === 'complete-task-button'){
		event.target.parentElement.classList.toggle("completed");
	}
}
