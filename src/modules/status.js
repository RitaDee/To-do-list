export default class Status {
  constructor(task) {
    this.task = task;
    this.array = JSON.parse(localStorage.getItem('array')) || [];
    this.updateStatus = this.updateStatus.bind(this);
    this.clearCompleted = this.clearCompleted.bind(this);
  }

  updateStatus(index) {
    const updatedArray = this.array.map((arr) => (arr.index === index
      ? { ...arr, completed: !arr.completed }
      : { ...arr }));
    localStorage.setItem('array', JSON.stringify(updatedArray));
  }

  clearCompleted(includedInFunction = true) {
    this.array = JSON.parse(localStorage.getItem('array')) || [];
    this.array = this.array.filter((task) => task.completed === false);
    this.array.forEach((task, i) => {
      task.index = i + 1;
    });

    localStorage.setItem('array', JSON.stringify(this.array));
    if (includedInFunction) {
      window.location.reload();
    }
  }
}
