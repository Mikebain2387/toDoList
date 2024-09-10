const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");



//event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteTask);
todoList.addEventListener("click", completeTask);


// function to add new task
function addTodo(event){
  event.preventDefault();
  if(todoInput.value !==""){

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    
    //create new li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    
    //checkmark
    const completedButton = document.createElement('button')
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    
    //delete button
    
  }
}