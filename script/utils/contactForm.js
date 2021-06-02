/**
 * DOM elements
 */
async function displayPhotographerModale() {
	const modal = document.getElementById("contact__modal");
	const btn = document.querySelector(".photographer-page__contact__button");
	const span = document.getElementsByClassName("close")[0];
	const firstNameInput = document.getElementById("firstname");
	const lastNameInput = document.getElementById("lastname");
	const emailInput = document.getElementById("email");
	const messageInput = document.getElementById("message");
	const submitButton = document.getElementById("form-submit-button");

  
	/**
	 * Display the modal when the user click on the button
	 * @return {string}
	 */
	btn.onclick = function () {
		modal.style.display = "block";
	};

	/**
	 * Undisplay the modal when the user click on the span
	 * @return {string}
	 */
	span.onclick = function () {
		modal.style.display = "none";
	};

	/**
	 * Undisplay the modal if the user click anywhere outside
	 */
	window.onclick = function (event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	};

  document.body.addEventListener('keypress', function(e) {
    if (e.key == "Escape") {
      modal.style.display = "none";
    }
  });
	/**
	 * Send form with inputs values in the console
	 */
	if (submitButton) {
		submitButton.addEventListener("click", function (event) {
			event.preventDefault();
			console.log(
				`L'utilisateur ${firstNameInput.value} ${lastNameInput.value} avec l'adresse mail suivante ${emailInput.value} vous adresse le message suivant : ${messageInput.value}`
			);
			modal.style.display = "none";
		});
	}
}