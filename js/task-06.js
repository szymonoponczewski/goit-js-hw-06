// Wybieram input ze strony
const inputEl = document.getElementById("validation-input");

// Dodaję addEventListener przy zdarzeniu blur na polu input
// Do zmiennej inputValue przypisuję aktualną wartość inputEl (string), aby pózniej móc sprawdzić długość tego stringu metodą .length
// Do zmiennej validLength przypisuję przy pomocy metody .getAttribute wartość z data-length
// Poniewaz .getAttribute zwraca z data-length wartość w postaci stringa, uzylem parseInt, aby przekonwertować
// go na wartość liczbową, co pozwoliło mi na porównanie w warunkach z długością inputValue
// Sprawdzam czy spełniony jest warunek co do ilości znaków i odpowiednio dodaję i usuwam klasy metodą .classList

inputEl.addEventListener("blur", () => {
  const inputValue = inputEl.value;

  const validLength = parseInt(inputEl.getAttribute("data-length"));

  if (inputValue.length === validLength) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
});
