const validationInput = document.querySelector('#validation-input');
const inputLength = validationInput.dataset.length;

const input = document.querySelector('input');

validationInput.addEventListener('blur', element => {
    const text = element.currentTarget.value;
    
    if (text.length == inputLength) {
        validationInput.classList.add('valid');
        validationInput.classList.remove('invalid');
    } else {
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
};
})



