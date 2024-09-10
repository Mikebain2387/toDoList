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
  
  if(todoInput.value !== ""){ 
  
  
  // to div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  // create li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  // completed check button
  const completedButton = document.createElement('button');
  completedButton.innerText = "✓";  
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  
  // delete button
  const trashButton = document.createElement('button');
  trashButton.innerText = "X";  
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  
  // add to list
  todoList.appendChild(todoDiv);
  // clear input
  clear()
  }
  }

  //clear input
function clear(){
  todoInput.value="";
 }
 
 // delete items
 
 function deleteTask(e){
 const item = e.target;
 if(item.classList[0]=== "trash-btn"){
  const todo= item.parentElement;
  todo.remove();
 }
 }
 
 function completeTask(e){
  const item = e.target;
  if(item.classList[0]==="complete-btn"){
   const todo= item.parentElement;
   todo.classList.toggle("completed");
  }
 }