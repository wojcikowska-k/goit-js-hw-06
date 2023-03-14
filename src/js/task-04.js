const value = document.getElementById(`value`);
const decBtn = document.querySelector(`button[data-action="decrement"]`);
const incBtn = document.querySelector(`button[data-action="increment"]`);

let counterValue = 0;

display();

const increment = () => {
  counterValue++;
  display();
};
incBtn.addEventListener("click", increment);

const decrement = () => {
  counterValue--;
  display();
};
decBtn.addEventListener("click", decrement);

function display() {
  value.innerHTML = counterValue;
}
