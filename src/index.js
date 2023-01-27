import './style.css';
import Tasks from './modules/task.js';
import Status from './modules/status.js';

const addBtn = document.querySelector('#add-btn');
addBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const description = document.querySelector('#add-task').value;
  const newTask = new Tasks(description);
  newTask.addTask(description);
});

// render the tasks from local storage on page load
const tasks = new Tasks();
const status = new Status(tasks);
window.onload = tasks.render();

const checkboxes = document.getElementsByClassName('checkbox-tick');
Array.from(checkboxes).forEach((checkbox) => {
  checkbox.addEventListener('change', (event) => {
    const index = parseInt(event.target.parentElement.parentElement.getAttribute('data-index'), 10);
    status.updateStatus(index);
    tasks.render();
  });
});

const clearCompletedBtn = document.querySelector('.clear-completed');
clearCompletedBtn.addEventListener('click', () => {
  status.clearCompleted();
  tasks.render();
});
