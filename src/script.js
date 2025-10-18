let submitButton = document.getElementById("submitButton");
let nameInput = document.getElementById("nameInput");

if (submitButton) {
  submitButton.addEventListener("click", function () {
    if (
      nameInput.value === "Denise" ||
      nameInput.value === "denise" ||
      nameInput.value === "DENISE"
    ) {
      alert("Hello, Denise!");
    } else {
      alert("Hello, stranger!");
    }
  });
}
