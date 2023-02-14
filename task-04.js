let counterValue = 0

const decrementbtn = document.querySelector('button[data-action="decrement"]')
const incrementbtn = document.querySelector('button[data-action="increment"]')
const value = document.querySelector('#value')

decrementbtn.addEventListener('click', function () {
    counterValue -= 1
    value.textContent = counterValue
});
incrementbtn.addEventListener('click', function () {
    counterValue += 1
    value.textContent = counterValue
})