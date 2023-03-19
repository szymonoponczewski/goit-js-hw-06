// Wybieram input oraz element span na stronie
const inputEl = document.getElementById("name-input");
const spanEl = document.getElementById("name-output");

// Zdarzenie input wstawia aktualną wartość input#name-input do span#name-output
// Jezeli input#name-input jest pusty, to value zostaje ustawiona a wartość będącą stringiem "Anonymous"
inputEl.addEventListener("input", (e) => {
  if (inputEl.value === "") {
    return (spanEl.textContent = "Anonymous");
  }
  return (spanEl.textContent = e.currentTarget.value);
});
