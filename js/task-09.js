const btnRef = document.querySelector('.change-color');
const spanRef = document.querySelector('.color');
btnRef.addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomHexColor();
  spanRef.textContent = getRandomHexColor()
})


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
