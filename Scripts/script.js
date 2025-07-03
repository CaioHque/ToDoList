// função que adiciona a tarefa
function addTask() {

    // titulo da tarefa
    const taskTitle = document.querySelector("#task-title").value;

    if(taskTitle) {

        // clona template
        const template = document.querySelector(".template");

        const newTask = template.cloneNode(true);

        // adiciona titulo
        newTask.querySelector(".task-title").textContent = taskTitle;

        // remove as classes desnecessarias

        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        // adiciona a tarefa na lista
        const list = document.querySelector("#task-list");
        list.appendChild(newTask);

        // evento de remover tarefa
        const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function(){
            removeTask(this);
        });

        // evento de completar tarefa
        const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function(){
            completeTask(this);
        });

        // limpar texto 
        document.querySelector("#task-title").value = "";
    }

    else{
        alert("insira alguma tarefa para prosseguir")
    }
};

//função de remover tarefa 
function removeTask(task){

    task.parentNode.remove(true);

}

// função que completa tarefa 
function completeTask(task){
    const taskToComplete = task.parentNode;
    taskToComplete.classList.toggle("done");
};

// evento de adicionar tarefa

const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function(e) {

    e.preventDefault();
    addTask();
});