const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// ###

const list = document.getElementById("ingredients");

// const markup = ingredients
//   .map((ingredient) => `<li class="item">${ingredient}</li>`)
//   .join("");

// list.innerHTML = markup;

// #########

for (let i = 0; i < ingredients.length; i += 1) {
  const element = document.createElement("li");
  element.textContent = ingredients[i];
  element.classList.add("item");
  list.append(element);
}
