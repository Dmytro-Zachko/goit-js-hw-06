const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulRef = document.querySelector('#ingredients')
const AddingLi = (ingredients) => {
  return ingredients.map((ingredient) => {
    const liEL = document.createElement('li')
    liEL.classList.add('item')
    liEL.textContent = ingredient
    return liEL;
  });
};
const elements = AddingLi(ingredients)
ulRef.append(...elements)
