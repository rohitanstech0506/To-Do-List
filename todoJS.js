const inputsTask = document.querySelector(".taskInp");
const task = document.querySelector(".taskList");

function Add() {
  const inputsTasks = inputsTask.value.trim();
  if (inputsTasks === "") {
    alert("Please Add Any Task...");
    return;
  } else {
    let newEle = document.createElement("li");
    newEle.innerHTML = `<div><input type="checkbox" class="input-box"></div><span class="task-text">${inputsTask.value}</span><div class="icon-container"><i class="fa-solid fa-pen-to-square"></i><i class="fa-solid fa-trash"></i></div>`;
    task.appendChild(newEle);
    inputsTask.value = "";
    newEle.querySelector(".fa-trash").addEventListener("click", remove);
    function remove() {
      newEle.remove();
    }
    newEle.querySelector(".fa-pen-to-square").addEventListener("click", edit);
    function edit() {
      const taskTextSpan = newEle.querySelector(".task-text");
      const oldText = taskTextSpan.innerText;

      const newText = prompt("Add Updated ToDo List", oldText);

      if(newText !== null && newText.trim() !== ""){
        taskTextSpan.innerText = newText.trim();
      }else if(newText !== null){
        alert("Text cannot be empty");
      }
    }
  }
}

inputsTask.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    Add();
  }
})