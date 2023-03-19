const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
// wybieram element ul z klasą .gallery
const list = document.querySelector(".gallery");

// Przy pomocy metody .map iteruję po kazdym obiekcie tablicy images i tworzę dla nich,
// przy pomocy template strings elementy < img > umieszoncze w < li >
// Metodą .join łączę elementy tablicy galleryEl w jeden string, będący kodem HTML do wstrzyknięcia.
const galleryEl = images
  .map(
    (image) =>
      `<li class="list-item"><img class="picture" src="${image.url}"alt="${image.alt}"/></li>`
  )
  .join("");

list.insertAdjacentHTML("beforeend", galleryEl);

// Wersja alternatywna z uzyciem pętli for..of

// const list = document.querySelector(".gallery");
// let galleryEl = "";

// for (const image of images) {
//   galleryEl += `<li class="list-item"><img class="picture" src="${image.url}"alt="${image.alt}"/></li>`;
// }

// list.insertAdjacentHTML("beforeend", galleryEl);
