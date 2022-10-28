const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

const createIngredientsList = ingredients =>{
  return ingredients.map(ingredient => {
    const listEl = document.createElement("li");
    listEl.textContent = ingredient;
    listEl.classList.add("item");
  
    return listEl;
  });};

const elements = createIngredientsList(ingredients);

list.append(...elements);
