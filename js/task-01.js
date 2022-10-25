const categoriesList = document.querySelectorAll('li.item');
console.log('Number of categories:', categoriesList.length);
const categories = document.querySelectorAll('h2');

//Animals
console.log('Category:', categories[0].textContent);

const animalsList = categoriesList[0];
console.log('Elements:', categoriesList[0].length);

//Products
console.log('Category:', categories[1].textContent);

const productsList = categoriesList[1];
console.log('Elements:', categoriesList[0].length);

//Technologies
console.log('Category:', categories[2].textContent);

const technologiesList = categories[2];
console.log('Elements:', categoriesList[0].length);


//Category: Animals
//Elements: 4

//Category: Products
//Elements: 3

//Category: Technologies
//Elements: 5