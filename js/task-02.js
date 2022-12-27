const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsList = document.querySelector("#ingredients");

const list = ingredients.map((item) => {
  const itemList = document.createElement("li");
  itemList.classList.add("item");
  itemList.textContent = item;
  return itemList;
});
ingredientsList.append(...list);

