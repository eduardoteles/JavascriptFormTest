function showMessage(input, message, type) {
	const msg = input.parentNode.querySelector("small");
	msg.innerText = message;
	input.className = type ? "success" : "error";
	return type;
}

function hasValue(input, message) {
	if (input.value.trim() === "") {
		return showMessage(input, message, false);
	}
	return showMessage(input, "", true);
}

function validateEmail(input, requiredMsg, invalidMsg) {
	// verificar se o valor recebido não é vazio
	// validar o formato de email
}

const form = document.querySelector("#signup");
const NAME_REQUIRED = "Please enter your name";
const EMAIL_REQUIRED = "Please enter your email";
const EMAIL_INVALID = "Please enter a correct email address format";

form.addEventListener("submit", function (event) {
	// Suspensão do evento submit
	event.preventDefault();

	// Chamar as funções para validar o formulário

	// Se OK, submeter o formulário e redirecionar para página de resposta
	if (nameValid && emailValid) {
		window.location.href = "response.html";
	}
});