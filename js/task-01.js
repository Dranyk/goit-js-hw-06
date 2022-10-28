const categoriesList = document.querySelectorAll('li.item');
console.log('Number of categories:', categoriesList.length);

categoriesList.forEach((item) =>{
console.log(`Category: ${item.firstElementChild.textContent}`);
const listEl = item.lastElementChild;
console.log(`Elements: ${listEl.children.length}`);
});
