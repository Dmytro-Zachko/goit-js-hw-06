let counter = 0

const decrementbtn = document.querySelector('button[data-action="decrement"]')
const incrementbtn = document.querySelector('button[data-action="increment"]')
const value = document.querySelector('#value')

decrementbtn.addEventListener('click', function () {
    counter -= 1
    value.textContent = counter
});
incrementbtn.addEventListener('click', function () {
    counter += 1
    value.textContent = counter
})