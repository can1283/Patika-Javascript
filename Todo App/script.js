let input = document.querySelector("#task");
let addButton = document.querySelector("#liveToastBtn");
let list = document.querySelector("#list");

addButton.addEventListener('click', function() {
    let inputValue = input.value.trim();
    if (inputValue !== "") {
        addTask(inputValue);
        input.value = "";
    }
    showToast("addTodo");
});

function addTask(taskText) {
    let li = document.createElement("li");
    let spanContent = document.createElement("span");
    spanContent.className = "ullicontent";
    spanContent.textContent = taskText;

    let spanClose = document.createElement("span");
    spanClose.className = "material-symbols-outlined close-button";
    spanClose.textContent = "close";
    spanClose.addEventListener('click', function() {
        li.remove();
        showToast("deleteTodo");
    });

    li.appendChild(spanContent);
    li.appendChild(spanClose);
    list.appendChild(li);
}


function showToast(toastId) {
    let toastElement = document.querySelector(`#${toastId}`);
    let toast = new bootstrap.Toast(toastElement);
    toast.show();
}
