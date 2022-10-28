const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

const elements = ingredients.map(option => {
  const item = document.createElement("li");
  item.textContent = `${ingredients}`;
  item.classList.add("item");

  return item;
})

list.append(...elements);
