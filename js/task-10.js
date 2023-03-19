function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Przypisuję odpowiednie elmenty do zmiennych.
const inputEl = document.querySelector("input");
const createBtnEl = document.querySelector("[data-create]");
const destroyBtnEl = document.querySelector("[data-destroy]");
const boxesContainerEl = document.querySelector("#boxes");

// Funkcja tworząca elementy div.
function createBoxes(amount) {
  const boxes = []; //tworzę pustą tablicę, do przechowywanie wyniku pętli for
  for (let i = 0; i < amount; i++) {
    const boxEl = document.createElement("div"); // tworzę element div
    const boxSize = 30 + i * 10; // do kazdego kolejnego boxa dodaję 10 do rozmiaru
    boxEl.style.width = `${boxSize}px`; // nadpisuję szerokość boxEl
    boxEl.style.height = `${boxSize}px`; // nadpisuję wysokość boxEl
    boxEl.style.backgroundColor = getRandomHexColor(); // nadaję divowi losowy kolor
    boxes.push(boxEl); // wpycham do tablicy boxes kazdy utworzony boxEl
  }
  boxesContainerEl.append(...boxes); // rozpakowuję spread operatorem tablicę boxes i dodaję divy do kontenera.
}

// Funkcja usuwająca wszystkie elemenmty div w kontenerze.
function destroyBoxes() {
  boxesContainerEl.innerHTML = ""; // nadpisuję zawartość div#boxes pustym stringiem.
}

// Dodaję nasłuchiwania na oba buttony.
createBtnEl.addEventListener("click", () => createBoxes(inputEl.value));
destroyBtnEl.addEventListener("click", () => destroyBoxes());
