export default class Tasks {
  constructor(description) {
    this.description = description;
    this.completed = false;
  }

  addTask(description) {
    this.description = description;
    if (description === '') {
      document.querySelector('.message').innerHTML = '*Please add a task to the list.';
    } else {
      const array = JSON.parse(localStorage.getItem('array')) || [];
      this.index = array.length + 1;
      array.push(this);
      array.forEach((task, i) => {
        task.index = i + 1;
      });
      localStorage.setItem('array', JSON.stringify(array));
      document.querySelector('.message').innerHTML = '*Added new task successfully';
      this.render();
      document.querySelector('#add-task').value = '';
    }
  }

  removeTask(index) {
    const array = JSON.parse(localStorage.getItem('array')) || [];
    const newArray = array.filter((e) => e.index !== index);
    newArray.forEach((task, i) => {
      task.index = i + 1;
    });
    localStorage.setItem('array', JSON.stringify(newArray));
    this.render();
  }

  editTask(index, newDescription) {
    const taskToEdit = this.find((task) => task.index === index);
    taskToEdit.description = newDescription;
    localStorage.setItem('array', JSON.stringify(this));
  }

  render() {
    const array = JSON.parse(localStorage.getItem('array')) || [];
    const toDo = document.querySelector('.to-do-items');
    toDo.innerHTML = '';
    if (array.length > 0) {
      for (let i = 0; i < array.length; i += 1) {
        toDo.innerHTML += `
        <div class="list-items" data-index="${array[i].index}">
          <div class="task-container">
            <input class="checkbox" type="checkbox"> 
            <input class="checkbox" class="desc" value="${array[i].description}">
          </div>
          <button class="btn-more remove"><i class="fa-solid fa-ellipsis-vertical"></i></button>
        </div>`;
      }
    }

    // add event listener to remove button
    const removeButtons = document.querySelectorAll('.remove');
    removeButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        event.preventDefault();
        const index = parseInt(event.target.parentElement.parentElement.getAttribute('data-index'), 10);
        this.removeTask(index);
      });
    });
  }
}
