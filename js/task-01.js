const categories = document.getElementById("categories");

console.log(
  "Number of categories:",
  categories.getElementsByClassName("item").length
);

// ###

const titles = document.getElementsByTagName("h2");

titles[0].innerHTML = "Category: Animals";
titles[1].innerHTML = "Category: Products";
titles[2].innerHTML = "Category: Technologies";

const items = categories.children;

for (let i = 0; i <= items.length; i += 1) {
  console.log(titles[i].innerHTML);
  const FirstElementChild = items[i].firstElementChild;
  const SiblingElementChild = FirstElementChild.nextElementSibling;
  console.log("Categories:", SiblingElementChild.children.length);
}
