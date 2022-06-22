let taskList = [];
const tasks = document.querySelector("#tasks");


//This Function Add Item into taskList 
function addItem(){
    let task = document.querySelector('#textField');
    if( task.length == 0){
        alert("Please Enter a Task")
    }
    else{
      const newTask = {
        id: Date.now(),
        title: task.value,
      }
      taskList.push(newTask);
      displayItems(); 
      task.value="";  
  }
}

//This Function delete item from tasklist 
function deleteItems(id){
  for(var i in taskList){
    console.log(i);
    if(taskList[i].id==id){
      taskList.splice(i,1);
      displayItems();
      return;
    }}
}

//This Function Update item. 
function updateItem(id){
var newTask =prompt("Update Task");
for(var i in taskList){
  if(taskList[i].id==id){
    taskList[i].title=newTask;
    displayItems();
    return;
  }
 }
}

//This function display items of itemsList
function displayItems(){
 if(taskList.length==0){
   tasks.innerHTML = "";
 }else{
  tasks.innerHTML = "";
   taskList.forEach(element =>{
     tasks.innerHTML += `
     <div>
       ${element.title}
       <span><input type="button" value="Delete" onclick="deleteItems(${element.id})" ></span>
       <span><input type="button" value="Update" onclick="updateItem(${element.id})" ></span>
     </div>
     `
    },
  )
 }
 }