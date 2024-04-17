function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value === "") {
        alert("Please enter a task!");
        return;
    }

    var li = document.createElement("li");
    var taskContainer = document.createElement("div");
    taskContainer.className = "task-container";

    var taskDoneRadio = document.createElement("input");
    taskDoneRadio.type = "radio";
    taskDoneRadio.name = "taskDone";
    taskDoneRadio.className = "task-done-radio";
    taskDoneRadio.onclick = function () {
        if (this.checked) {
            li.style.textDecoration = "line-through";
        } else {
            li.style.textDecoration = "none";
        }
    };

    var taskText = document.createElement("span");
    taskText.textContent = taskInput.value;

    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.style.backgroundColor = "#9223EE"; // Set background color

    deleteBtn.onclick = function () {
        taskList.removeChild(li);
    };

    taskContainer.appendChild(taskDoneRadio);
    taskContainer.appendChild(taskText);

    li.appendChild(taskContainer);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
}
