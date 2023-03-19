// Wybieram element input i przypisuję do zmiennej inputEl
const inputEl = document.getElementById("font-size-control");

// Wybieram spana o id#text i przypsiuję go do zmiennej spanEl.
const spanEl = document.getElementById("text");

// Dodaję nasłuchiwanie zdarzeń na suwaku o id#font-size-control.
// Przypisuję aktualną wartość suwaka do zmiennej sliderValue.
// Przy pomocy style.fontSize zwracam w template stringu aktualną wielkość czcionki.
inputEl.addEventListener("input", () => {
  const sliderValue = inputEl.value;
  return (spanEl.style.fontSize = `${sliderValue}px`);
});
