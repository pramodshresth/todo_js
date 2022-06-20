function addItem(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please Enter a Task")
    }

    else{
        document.querySelector('#tasks').innerHTML += `
            <li class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <input type="button" value="Delete" onclick="" id="delete">
            </li>
        `;
        var current_tasks = document.querySelectorAll("#delete");
        console.log(current_tasks);
for(var i=0; i<current_tasks.length; i++){
    current_tasks[i].onclick = function(){
        this.parentNode.remove();
    }
}      
    }
}

