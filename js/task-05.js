const refs = {
    inputEl: document.querySelector('#name-input'),
    outputEl: document.querySelector('#name-output'),
}

refs.inputEl.addEventListener('input', changeInputEl);

function changeInputEl(event) {
    if (event.target.value.length > 0) {
        refs.outputEl.textContent = event.target.value;
    }
    return refs.outputEl.textContent = 'незнакомец';
}