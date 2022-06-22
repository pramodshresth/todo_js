let taskList = [];
const tasks = document.querySelector("#tasks");
function addItem(){
    const task = document.querySelector('#newtask input').value;
    if( task.length == 0){
        alert("Please Enter a Task")
    }
    else{
      const newTask = {
        id: Date.now(),
        title: task,
        
      }
      taskList.push(newTask); 
      display(newTask);
  }
}


function deleteItems(id){
  for(var i in taskList){
    if(taskList[i].id==id){
      taskList.splice(i,1);
      display2();}}
}

function updateItem(e){
var n =prompt("Update Task");
for(var i in taskList){
  if(taskList[i].id==e){
    taskList[i].title=n;
    display2();
  }
 }
}



function display(newTask){
  tasks.innerHTML += `
  <div>
    ${newTask.title}
    <span><input type="button" value="Delete" onclick="deleteItems(${newTask.id})" ></span>
    <span><input type="button" value="Update" onclick="updateItem(${newTask.id})" ></span>
  </div>
  `
}


function display2(){
  console.log(taskList);
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
    },)
 }
 }