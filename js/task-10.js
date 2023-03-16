const input = document.querySelector("input");
const createBtn = document.querySelector(`button[data-create]`);
const destroyBtn = document.querySelector(`button[data-destroy]`);
const container = document.getElementById("boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let amount = 0;

function createBoxes(amount) {
  container.innerHTML = "";
  amount = Number(input.value);
  for (let i = 0; i < amount; i++) {
    const item = document.createElement("div");
    item.style.backgroundColor = `${getRandomHexColor()}`;
    item.style.height = i * 10 + 30 + "px";
    item.style.width = i * 10 + 30 + "px";
    container.append(item);
  }
}
createBtn.addEventListener("click", createBoxes);

function destroyBoxes() {
  container.innerHTML = "";
}

destroyBtn.addEventListener("click", destroyBoxes);
