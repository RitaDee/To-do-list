import './style.css';

const array = [
  {
    description: 'Make the bed',
    completed: true,
    index: 4,
  },
  {
    description: 'Clean the house',
    completed: false,
    index: 2,
  },
  {
    description: 'Bath',
    completed: false,
    index: 1,
  },
  {
    description: 'Cook',
    completed: true,
    index: 3,
  },
];

array.sort((a, b) => a.index - b.index);

const toDo = document.querySelector('.to-do-items');
for (let i = 0; i < array.length; i += 1) {
  toDo.innerHTML += `
  <div class="list-items"
    <div>
    <input type="checkbox"> 
    <input class="desc" value="${array[i].description}">
    <button class="btn-more"><i class="fa-solid fa-ellipsis-vertical"></i></button>
    </div>
    </div>`;
}
