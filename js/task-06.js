const validationInputEl = document.querySelector('#validation-input');

validationInputEl.addEventListener('blur', onValidationInputLength);

function onValidationInputLength(event) {
    if (event.currentTarget.value.length == validationInputEl.dataset.length) {
        validationInputEl.classList.remove('invalid');
        validationInputEl.classList.add('valid');
    }
    else {
        validationInputEl.classList.remove('valid');
        validationInputEl.classList.add('invalid');
    }
}



