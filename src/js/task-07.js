const input = document.getElementById(`font-size-control`);
const text = document.getElementById(`text`);

const changeSize = () => {
  text.style.fontSize = `${input.value}px`;
};

input.addEventListener("click", changeSize);
