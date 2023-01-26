import './style.css';
import Tasks from './modules/task.js';

const addBtn = document.querySelector('#add-btn');
addBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const description = document.querySelector('#add-task').value;
  const newTask = new Tasks(description);
  newTask.addTask(description);
});

// render the tasks from local storage on page load
const tasks = new Tasks();
tasks.render();
