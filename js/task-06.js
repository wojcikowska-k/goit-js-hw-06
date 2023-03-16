// const input = document.getElementById(`validation-input`);
const input = document.querySelector(`input`);

const checkLength = () => {
  if (input.textLength < 6) {
    input.classList.remove(`valid`);
    input.classList.add(`invalid`);
  } else {
    input.classList.remove(`invalid`);
    input.classList.add(`valid`);
  }
};

input.addEventListener("blur", checkLength);
