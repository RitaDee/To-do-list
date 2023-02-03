import './style.css';
import Tasks from './modules/task.js';
import Status from './modules/status.js';

import render from './modules/display.js';

const addBtn = document.querySelector('#add-btn');
addBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const description = document.querySelector('#add-task').value;
  const newTask = new Tasks(description);
  newTask.addTask(description);
  document.querySelector('.message').innerHTML = '*Added new task successfully';
  render();
  window.location.reload();
  document.querySelector('#add-task').value = '';
});
// render the tasks from local storage on page load
const tasks = new Tasks();
const status = new Status(tasks);
window.onload = render();
const checkboxes = document.getElementsByClassName('checkbox-tick');
Array.from(checkboxes).forEach((checkbox) => {
  checkbox.addEventListener('change', (event) => {
    const index = parseInt(event.target.parentElement.parentElement.getAttribute('data-index'), 10);
    status.updateStatus(index);
    window.location.reload();
    render();
  });
});

const clearCompletedBtn = document.querySelector('.clear-completed');
clearCompletedBtn.addEventListener('click', () => {
  status.clearCompleted();
  render();
});
// Call delete Event listeners
const removeButtons = document.querySelectorAll('.remove');
removeButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    const index = parseInt(event.target.parentElement.parentElement.getAttribute('data-index'), 10);
    tasks.removeTask(index);
    render();
  });
});

const inputs = document.querySelectorAll('.checkbox');
inputs.forEach((input) => {
  input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const index = Number(input.parentNode.parentNode.getAttribute('data-index'));
      tasks.editTask(index, input.value);
      window.location.reload();
      render();
    }
  });
});
