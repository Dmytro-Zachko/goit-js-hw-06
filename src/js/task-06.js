const inputRef = document.querySelector('#validation-input')
inputRef.addEventListener('blur', function (event) {
 if (event.currentTarget.value.length > (inputRef.dataset.length)) { 
     inputRef.classList.add('invalid');
     inputRef.classList.remove('valid');
  } else {
      inputRef.classList.add('valid');
     inputRef.classList.remove('invalid');
    }
    
})
