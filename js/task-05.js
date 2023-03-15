const inputText = document.getElementById(`name-input`);
const outputText = document.getElementById(`name-output`);

// inputText.addEventListener(`input`, (event) => {
//   outputText.textContent = event.currentTarget.value;
// });

inputText.addEventListener(`input`, greetings);

// function greetings() {
//   outputText.innerHTML = inputText.value;
// }

function greetings(event) {
  outputText.innerHTML = event.currentTarget.value;
}
