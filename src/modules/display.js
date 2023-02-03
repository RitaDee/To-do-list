const render = () => {
  const array = JSON.parse(localStorage.getItem('array')) || [];
  const toDo = document.querySelector('.to-do-items');
  toDo.innerHTML = '';
  if (array.length > 0) {
    for (let i = 0; i < array.length; i += 1) {
      toDo.innerHTML += `
            <div class="list-items" data-index="${array[i].index}">
              <div class="task-container">
                <input class="checkbox-tick" type="checkbox">
                <input class="checkbox" class="desc" value="${array[i].description}">
              </div>
              <button class="btn-more remove"><i class="fa-solid fa-ellipsis-vertical"></i></button>
            </div>`;
    }
  }
  const checkboxes = document.querySelectorAll('.checkbox-tick');
  for (let i = 0; i < array.length; i += 1) {
    checkboxes[i].checked = array[i].completed;
  }
};
export default render;