/**
 * @jest-environment jsdom
 */

import Tasks from './src/modules/task.js';
import Status from './src/modules/status.js';

const status = new Status();

const task = new Tasks();

describe('addTask', () => {
  it('adds a task to the list', () => {
    task.addTask('Test task 4');
    task.addTask('Today is Friday');
    const array = JSON.parse(localStorage.getItem('array')) || [];
    expect(array).toHaveLength(2);
  });
});

describe('removeTask', () => {
  it('removes a task from the list', () => {
    task.addTask('Test task 4');
    task.addTask('Test task 4');
    task.removeTask(1);
    const array = JSON.parse(localStorage.getItem('array'));
    expect(array).toHaveLength(3);
  });
});

describe('editTask', () => {
  it('edits a task to the list', () => {
    task.addTask('Friday');
    task.editTask(4, 'Sunday');
    const array = JSON.parse(localStorage.getItem('array')) || [];
    array.forEach(() => {
      expect(array[3].description).toEqual('Sunday');
    });
  });
});

describe('Change status method', () => {
  it('should change the completed status to true', () => {
    status.updateStatus(0);
    const array = JSON.parse(localStorage.getItem('array')) || [];
    array.forEach(() => {
      expect(array[0].completed).toStrictEqual(true);
    });
  });
});

describe('Clear completed method', () => {
  it('should clear all completed task', () => {
    status.clearCompleted(false);
    const array = JSON.parse(localStorage.getItem('array'));
    array.forEach((task) => {
      expect(task.completed).toStrictEqual(false);
    });
  });
});
