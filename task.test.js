/**
 * @jest-environment jsdom
 */

import Tasks from "./src/modules/task.js";

const task = new Tasks();
describe("addTask", () => {
  it("adds a task to the list", () => {
    task.addTask("Test task 4");
    task.addTask("Today is Friday");
    const array = JSON.parse(localStorage.getItem("array")) || [];
    expect(array).toHaveLength(2);
  });
});

describe("removeTask", () => {
  it("removes a task from the list", () => {
    task.addTask("Test task 4");
    task.addTask("Test task 4");
    task.removeTask(1);
    const array = JSON.parse(localStorage.getItem("array"));
    expect(array).toHaveLength(3);
  });
});
