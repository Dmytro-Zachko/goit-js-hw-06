const formRef = document.querySelector('.login-form');
formRef.addEventListener('submit', (event) => {
    event.preventDefault();
    const FormEl = event.currentTarget.elements
    const email = FormEl.email.value
    const password = FormEl.password.value
    const FormObject = {
        email,
        password,
    }
    if (!email && !password) {
        alert('Всі поля повинні бути заповнені')
        }
    console.log(FormObject);
        formRef.reset()
})