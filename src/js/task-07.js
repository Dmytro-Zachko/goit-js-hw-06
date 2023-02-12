const spanRef = document.querySelector('#text')
const inputRef = document.querySelector('#font-size-control')
inputRef.addEventListener('input', (event) => {
    spanRef.style.fontSize = event.currentTarget.value + "px"})