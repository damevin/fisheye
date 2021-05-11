const modal = document.getElementById("contact__modal");
const btn = document.getElementById("photographer-page__contact__button");
const span = document.getElementsByClassName("close")[0];

//Submit button
const submitButton = document.getElementById('form-submit-button')

// DOM ELEMENTS 
const firstNameInput = document.getElementById('firstname')
const lastNameInput = document.getElementById('lastname')
const emailInput = document.getElementById('email')
const messageInput = document.getElementById('message')

console.log(emailInput)

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

console.log(submitButton)
if (submitButton) {
 submitButton.addEventListener("click", function(event) {
  event.preventDefault()
  console.log(`L'utilisateur ${firstNameInput.value} ${lastNameInput.value} avec l'adresse mail suivante ${emailInput.value} vous adresse le message suivant : ${messageInput.value}`)
  modal.style.display = "none";
 })

}

