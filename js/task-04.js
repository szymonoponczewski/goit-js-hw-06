// Wybieram oba przyciski ze strony oraz spana do uaktualniania interfejsu.
const btnIncrement = document.querySelector('[data-action="increment"]');
const btnDecrement = document.querySelector('[data-action="decrement"]');
const counterEl = document.getElementById("value");

// Zmienna counterValue w której będzie przechowywana aktualna wartość licznika
let counterValue = 0;

// Click listenery do przycisków, wewnątrz których zwiększa i zmniejsza się wartość licznika.
// Interfejs aktualizuje się nową wartością zmiennej counterValue.
const valueIncrement = btnIncrement.addEventListener("click", () => {
  counterValue++;
  counterEl.textContent = counterValue;
});

const valueDecrement = btnDecrement.addEventListener("click", () => {
  counterValue--;
  counterEl.textContent = counterValue;
});
