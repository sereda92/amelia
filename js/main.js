// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();

//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });




const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const tellInput = document.getElementById("tel");
const textInput = document.getElementById("text");
const submitButton = document.getElementById("submitButton");

// Функция для проверки, можно ли активировать кнопку
function checkValidity() {
  if (nameInput.value.trim() !== "" && emailInput.value.trim() !== "" && tellInput.value.trim() !== "" && textInput.value.trim() !== "") {
    submitButton.classList.add("enabled");
    submitButton.removeAttribute("disabled");
  } else {
    submitButton.classList.remove("enabled");
    submitButton.setAttribute("disabled", true);
  }
}

// Слушатели событий на изменение полей формы
nameInput.addEventListener("input", checkValidity);
emailInput.addEventListener("input", checkValidity);
tellInput.addEventListener("input", checkValidity);
textInput.addEventListener("input", checkValidity);

// Проверить начальное состояние при загрузке страницы
checkValidity();




