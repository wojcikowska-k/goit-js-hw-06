const categories = document.getElementById("categories");

console.log(
  "Number of categories:",
  categories.getElementsByClassName("item").length
);

const items = categories.children;

for (const item of items) {
  console.log(`Category: ${item.firstElementChild.innerHTML}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
}
