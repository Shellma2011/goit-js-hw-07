const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listEl = document.querySelector('#ingredients');

ingredients.forEach(ingredient => {
   const list = document.createElement('li');
   listEl.appendChild(list);
   list.textContent = ingredient;
});

// console.log(ingredients)
