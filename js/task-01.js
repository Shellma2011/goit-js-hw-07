const categoriesEl = document.querySelector('#categories');
// console.log(categoriesEl)

const categoriesLengthEl = categoriesEl.children.length
const massage = `В списке ${categoriesLengthEl} категории.`;
console.log(massage)

const categoriesChildrensEl = categoriesEl.children;
// console.log(categoriesChildrensEl)
const categoriesChildrensListEl = [...categoriesChildrensEl]
// console.log(categoriesChildrensListEl)

const infoEl = options => {
    return options.map(option => {

    const titleEl = option.querySelector('.item h2')
    const titleTextContentEl = titleEl.textContent
    // console.log(titleTextContentEl)
        
    const quantityEl = option.querySelector('.item ul')
    const quantityElementsEl = quantityEl.children.length
    // console.log(quantityElementsEl)
        
    const message = `Категория: ${titleTextContentEl}, Количество элементов: ${quantityElementsEl}`    

        return message;
})
}

console.log(infoEl(categoriesChildrensListEl))






