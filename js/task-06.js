const input = document.querySelector(`input`);

const checkLength = () => {
  if (input.textLength < Number(input.dataset.length)) {
    input.classList.remove(`valid`);
    input.classList.add(`invalid`);
  } else {
    input.classList.remove(`invalid`);
    input.classList.add(`valid`);
  }
};

input.addEventListener("blur", checkLength);
