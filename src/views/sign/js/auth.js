import { checkEmptyFields } from './checkEmptyFields.js';

export { signIn, signUp };

async function fetchData(url, options) {
	const response = await fetch(url, options);
	if (!response.ok) {
		const errorMessage = `Error: ${response.statusText}`;
		throw new Error(errorMessage);
	}
	return response.json();
}

async function signIn(ev) {
	ev.preventDefault();

	const account = document.querySelector('#sign-in-cpf-email').value;
	const password = document.querySelector('#sign-in-password').value;

	const fields = [account, password];
	if (checkEmptyFields(fields)) {
		alert('Por favor, preencha todos os campos.');
		return;
	}

	try {
		const formData = { account, password };
		await fetchData('/signin', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(formData),
		});
		window.location.href = '/dashboard';
	} catch (error) {
		console.error('Error:', error.message);
		// Handle error, show error message to the user, etc.
	}
}

async function signUp(ev) {
	ev.preventDefault();

	const cpf = document.querySelector('#sign-up-cpf').value;
	const name = document.querySelector('#sign-up-name').value;
	const email = document.querySelector('#sign-up-email').value;
	const password = document.querySelector('#sign-up-password').value;

	const fields = [cpf, name, email, password];
	if (checkEmptyFields(fields)) {
		alert('Por favor, preencha todos os campos.');
		return;
	}

	try {
		const formData = { cpf, name, email, password };
		await fetchData('/signup', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(formData),
		});
		window.location.href = '/';
	} catch (error) {
		console.error('Error:', error.message);
		// Handle error, show error message to the user, etc.
	}
}
