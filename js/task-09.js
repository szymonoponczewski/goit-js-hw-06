function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Wybieram element button oraz span o przypisuję je do buttonEl oraz SpanEl.
const buttonEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");

// Dodaję nasłuchiwanie na kliknięcie do buttona
buttonEl.addEventListener("click", () => {
  const currentColor = getRandomHexColor(); //Prypisuję efekt wywołania funkcji do zmiennej.
  document.body.style.backgroundColor = currentColor; // Ustawiam styl koloru tła.
  spanEl.textContent = `- ${currentColor}`; // Wypisuję zawartośc tekstową w spanie, czyli hex danego koloru.
});
