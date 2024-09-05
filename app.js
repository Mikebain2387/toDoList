let newTask = document.getElementById('addTask');
let submit = document.getElementById('addBtn');
let deleteItem = document.getElementById('remove');
let taskItem = document.getElementById('list');

// take value from input and send it to the list when the add button is clicked

submit.addEventListener('click', addNewItem)

function addNewItem(){
 if(addTask.value != '') //checks to see if addTask input is not equal to an empty string
 {
  let listItem = document.createElement("li"); // creating a new li element
  listItem.innerText = addTask.value; //giving new list item value from input
  listItem.classList.add = ("newLi"); //assigning list item class name for styling purposes
listItem.style.color = 'ivory';
 listItem.style.background = 'cadetblue';
 listItem.style.marginBottom = '10px';
 newTask.style.padding = '0px, 10px, 0px, 0px';
  
  document.getElementById("theList").appendChild(listItem); // sends li into parent element ul with id= "theList"
/*
checkbox needs work
  let checkbox = document.createElement('input'); // creates  new checkbox element
  checkbox.type = 'checkbox'; //sets input to checkbox

  listItem.appendChild(checkbox); //sends new checkbox item to parent element li
  
*/
  

 clearInput() //calls function to set input to an empty string after everything else has ran
 }
 
}
function complete(){

}

function clearInput(){
 newTask.value = ""; //sets input to an empty string which brings back default placeholder "new task"
}
/*
how to delete checked item???

deleteItem.addEventListener("click", removeItem)
function removeItem(){
 if(checkbox.checked){
  listItem.value = "";
 }
}

*/

/*
trying to add checkbox may not be bext choice

function addCheckBox(){
 if( != ""){
  let checkItem = document.createElement("input");
  checkItem.type = 'checkbox';
  document.getElementsByTagName("li").appendChild(checkItem);
 }
}

*/

