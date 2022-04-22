// Função que adiciona tarefa
function addTask() {
    
    // Título da tarefa
    const taskTitle = document.querySelector("#tasks-title").value;


    if(taskTitle) {

        // clonar template
        const template = document.querySelector(".template");

        const newTask = template.cloneNode(true);

        // Adiciona Titulo
        newTask.querySelector(".task-title").textContent = taskTitle;

        // removendo class desnecessarias
        newTask.classList.remove("template");
        newTask.classList.remove("hide");
        
        // Adicionar tarefa na lista
        const list = document.querySelector("#task-list");

        list.appendChild(newTask);

        // adicionar o evento de remover
        const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function() {
            removeTask(this);
        })

        // Adicionar evento de completar tarefa
        const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function() {
            completeTask(this);
        })

        // limpar texto
        document.querySelector("#tasks-title").value = "";

    }

}

// função de remove tarefa
function removeTask(task) {

    task.parentNode.remove(true);
}

// Funçao de completar a tarefa
function completeTask(task) {

    const taskToComplete = task.parentNode;

    taskToComplete.classList.toggle("done");
} 


//Evento de adicionar tarefa 
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function(e) {

    e.preventDefault();

    addTask();

});
