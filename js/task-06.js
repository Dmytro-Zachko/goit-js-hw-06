const inputRef = document.querySelector('#validation-input')
inputRef.addEventListener('blur', function (event) {
 if (event.currentTarget.value.length === Number (inputRef.dataset.length)) { 
     inputRef.classList.add('valid');
     inputRef.classList.remove('invalid');
  } else {
      inputRef.classList.add('invalid');
     inputRef.classList.remove('valid');
    }
    
})
console.log(inputRef.dataset.length)