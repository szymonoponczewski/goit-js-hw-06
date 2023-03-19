// Wybieram formularz o klasie .login-form i przypusję go do zmiennej formEl
const formEl = document.querySelector(".login-form");

// Dodaję do niego nasłuchiwanie zdarzeń
formEl.addEventListener("submit", (e) => {
  e.preventDefault(); //uniemożliwia domyślne zachowanie formularza - wysłanie danych i przeładowanie strony.
  const {
    elements: { email, password },
  } = e.currentTarget; // deztrukturyzuję obiekt e.currentTarget, aby uzyskać dostęp do elementów formularza email i password.

  if (email.value === "" || password.value === "") {
    return alert("Proszę uzupełnić wszystkie pola!");
  } // wyświetlam warunke jezeli email lub password pozostną puste przy sumbicie.
  e.currentTarget.reset(); // resetuję formularz
});
