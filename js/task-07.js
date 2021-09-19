const refs = {
    inputEl: document.querySelector('#font-size-control'),
    spanEl: document.querySelector('#text'),
}
 
function onChangeFontSize(e) {
    text.style.fontSize = `${e.target.value}px`;

}

refs.inputEl.addEventListener('input', onChangeFontSize);
