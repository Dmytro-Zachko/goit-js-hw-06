const boxesRef = document.querySelector('#boxes')
const inputRef = document.querySelector('input')
const btnCreate = document.querySelector('[data-create]')
const btnDestroy = document.querySelector('[data-destroy]')
btnCreate.addEventListener('click', makeInputWork);
btnDestroy.addEventListener('click', destroyBoxes);


function createBoxes(amount) {
  const elements = [];
  for ( let i = 1, j = 30;
    i <= amount && amount <= 100;
    i += 1, j += 10) {
    const div = document.createElement('div')
    div.style.width = `${j}px `;
    div.style.height = `${j}px `;
    div.style.backgroundColor = getRandomHexColor();
    elements.push(div)
  }
  boxesRef.append(...elements)
}

function destroyBoxes() {
  boxesRef.innerHTML = " "
}

function makeInputWork() {
  inputRef.addEventListener('input', () => {
    return inputRef.value
  });
  createBoxes(inputRef.value);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}