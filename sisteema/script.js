// Seleciona o formulário de agendamento
const form = document.querySelector('#appointment-form');

// Seleciona os elementos do formulário
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const dateInput = document.querySelector('#date');
const timeInput = document.querySelector('#time');
const serviceInput = document.querySelector('#service');

// Seleciona o elemento para exibir as mensagens de erro
const errorElement = document.querySelector('#error');

// Adiciona um evento de submit ao formulário
form.addEventListener('submit', e => {
	// Previne o envio padrão do formulário
	e.preventDefault();

	// Verifica se os campos obrigatórios estão preenchidos
	if (nameInput.value === '' || emailInput.value === '' || phoneInput.value === '' || dateInput.value === '' || timeInput.value === '' || serviceInput.value === '') {
		// Exibe uma mensagem de erro caso algum campo esteja em branco
		errorElement.textContent = 'Por favor, preencha todos os campos.';
	} else {
		// Envia o formulário para o servidor caso todos os campos estejam preenchidos
		// Aqui você pode incluir o código para enviar o formulário para o servidor ou para exibir uma mensagem de sucesso
	}
});

// Adiciona validações aos campos de input
nameInput.addEventListener('blur', validateName);
emailInput.addEventListener('blur', validateEmail);
phoneInput.addEventListener('blur', validatePhone);
dateInput.addEventListener('blur', validateDate);
timeInput.addEventListener('blur', validateTime);

// Função para validar o nome
function validateName() {
	// Verifica se o campo está em branco
	if (nameInput.value === '') {
		setErrorFor(nameInput, 'Por favor, informe seu nome.');
	} else {
		setSuccessFor(nameInput);
	}
}

// Função para validar o e-mail
function validateEmail() {
	// Verifica se o campo está em branco
	if (emailInput.value === '') {
		setErrorFor(emailInput, 'Por favor, informe seu e-mail.');
		// Verifica se o e-mail é válido
	} else if (!isEmail(emailInput.value)) {
		setErrorFor(emailInput, 'Por favor, informe um e-mail válido.');
	} else {
		setSuccessFor(emailInput);
	}
}

// Função para validar o telefone
function validatePhone() {
	// Verifica se o campo está em branco
	if (phoneInput.value === '') {
		setErrorFor(phoneInput, 'Por favor, informe seu telefone.');
		// Verifica se o telefone é válido
	} else if (!isPhone(phoneInput.value)) {
		setErrorFor(phoneInput, 'Por favor, informe um telefone válido.');
	} else {
		setSuccessFor(phoneInput);
	}
}

// Função para validar a data
function validateDate() {
	// Verifica se o campo está em branco
	if (dateInput.value === '') {
		setErrorFor(dateInput, 'Por favor, informe a data desejada.');
	} else {
		setSuccessFor(dateInput);
	}
}

// Função para validar o horário
function validateTime() {
	// Verifica se o campo está em branco
	if (timeInput.value === '') {
		setErrorFor(timeInput, 'Por favor, informe o horáriodesejado.');
} else {
setSuccessFor(timeInput);
}
}

// Função para definir o estilo de erro para o campo com erro
function setErrorFor(input, message) {
const formControl = input.parentElement;
const small = formControl.querySelector('small');
formControl.className = 'form-control error';
small.innerText = message;
}

// Função para definir o estilo de sucesso para o campo sem erro
function setSuccessFor(input) {
const formControl = input.parentElement;
formControl.className = 'form-control success';
}

// Função para verificar se o e-mail é válido
function isEmail(email) {
return /^[^\s@]+@[^\s@]+.[^\s@]+$/.test(email);
}

// Função para verificar se o telefone é válido
function isPhone(phone) {
return /^\d{10}$/.test(phone);
};



