import './style.css';
const listContainer = document.querySelector('.todolist-tasks-list');

const lists = [{
  index: 1,
  completed: false,
  description: 'Morning Prayers',
}, {
  index: 2,
  completed: false,
  description: 'Prepare breakfast',
}, {
  index: 3,
  completed: false,
  description: 'Prepare for work',
}, {
  index: 5,
  completed: false,
  description: 'Sleep',
},
];

function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

lists.sort((a, b) => {
  const keyA = a.index;
  const keyB = b.index;
  if (keyA < keyB) return -1;
  if (keyA > keyB) return 1;
  return 0;
});

function render() {
  clearElement(listContainer);
  lists.forEach((list) => {
    const listElement = document.createElement('li');
    const divElement = document.createElement('div');
    const ptagElement = document.createElement('p');
    const checkboxElement = document.createElement('input');
    const iconElement = document.createElement('i');
    listElement.dataset.listId = list.id;
    divElement.classList.add('li-content');
    checkboxElement.classList.add('checkbox');
    iconElement.classList.add('material-icons');
    checkboxElement.type = 'checkbox';
    ptagElement.contentEditable = 'true';
    ptagElement.innerText = list.description;
    iconElement.innerText = 'more_vert';
    listContainer.appendChild(listElement);
    listElement.appendChild(divElement);
    listElement.appendChild(iconElement);
    divElement.appendChild(checkboxElement);
    divElement.appendChild(ptagElement);
  });
}

render();