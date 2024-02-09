document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm-call");
  const nameInput = document.getElementById("name-call");
  const timeInput = document.getElementById("time");
  const tellInput = document.getElementById("tel-call");
  const dayInput = document.getElementById("day");
  const submitButton = document.getElementById("submitButton-call");


  function showError() {
    nameInput.classList.add("error");
    timeInput.classList.add("error");
    tellInput.classList.add("error");
    dayInput.classList.add("error");
  }

  function hideError() {
    nameInput.classList.remove("error");
    timeInput.classList.remove("error");
    tellInput.classList.remove("error");
    dayInput.classList.remove("error");
  }

  function checkValidity() {
    const nameValue = nameInput.value.trim();
    const tellValue = tellInput.value.trim();
    const timeValue = timeInput.value.trim();
    const dayValue = dayInput.value.trim();

    if (nameValue !== "" && tellValue !== "" && timeValue !== "" && dayValue !== "") {
      submitButton.classList.add("enabled");
      submitButton.removeAttribute("disabled");
      hideError();
    } else {
      submitButton.classList.remove("enabled");
      submitButton.setAttribute("disabled", true);
    }
  }

  form.addEventListener("submit", function (event) {
    if (!submitButton.classList.contains("enabled")) {
      event.preventDefault();
      showError();
    }
  });

  nameInput.addEventListener("input", checkValidity);
  timeInput.addEventListener("change", checkValidity);
  tellInput.addEventListener("input", checkValidity);
  dayInput.addEventListener("change", checkValidity);

  checkValidity();
});






// ---------------pop-close

const toggleButtons = document.querySelectorAll(".arrow-btn");
const closeButton = document.getElementById("close-call");
const myMenu = document.getElementById("pop-call");

toggleButtons.forEach(button => {
  button.addEventListener("click", function () {
    myMenu.classList.add("active");
  });
});

closeButton.addEventListener("click", function () {
  myMenu.classList.remove("active");
});


