const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// do zmiennej list przypisuję element ul o id ingredients
// metodą .forEach iteruję po kadym elemencie tablicy ingredients.
// dla zmiennej listEl tworzę element listy li dla kadej pozycji z tablicy
// do kazdego listEl dodaję klasę .item
// do listEl przypisuję zawartość teksotwą kazdego elementu tablicy ingredients
// za pomocą metody .append dodaję do list kazdy utworozny listEl.

const list = document.getElementById("ingredients");

ingredients.forEach((element) => {
  const listEl = document.createElement("li");
  listEl.classList.add("item");
  listEl.textContent = element;
  list.append(listEl);
});
