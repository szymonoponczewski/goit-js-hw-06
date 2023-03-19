// wybieram wszystkie elememty o klasie .item i wyświetlam długość pseudotablicy
const categoriesCount = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesCount.length}`);

// iteruję metodą .forEch po kazdym elemencie pseudotablicy categoriesCount
// i dla kadego elemmentu drukuję na konsoli zawartość tagu h2 oraz długość
// pseudotablicy z elementami li.
categoriesCount.forEach((element) => {
  const categoryName = element.querySelector("h2");
  const categoryEl = element.querySelectorAll("li");
  console.log(`Category: ${categoryName.textContent}`);
  console.log(`Elements: ${categoryEl.length}`);
});
