// import render from './display.js';

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
    }
  }

  removeTask(index) {
    this.index = index;
    const array = JSON.parse(localStorage.getItem('array')) || [];
    const newArray = array.filter((e) => e.index !== index);
    newArray.forEach((task, i) => {
      task.index = i + 1;
    });
    localStorage.setItem('array', JSON.stringify(newArray));
  }

  // editTask(index, newDescription) {
  //   const taskToEdit = this.find((task) => task.index === index);
  //   taskToEdit.description = newDescription;
  //   localStorage.setItem('array', JSON.stringify(this));
  // }

  editTask(index, newDescription) {
    this.index = index;
    const array = JSON.parse(localStorage.getItem('array')) || [];
    // const tasks = Array.from(this);
    const taskToEdit = array.find((task) => task.index === index);
    taskToEdit.description = newDescription;
    localStorage.setItem('array', JSON.stringify(array));
  }
}