const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listItem = document.querySelector('#ingredients');
const ingredientsElement = ingredients.map(ingredient => {
  const listItemElement = document.createElement('li');
  listItemElement.textContent = ingredient;

  return listItemElement;
});
listItem.append(...ingredientsElement);
console.log(listItem);