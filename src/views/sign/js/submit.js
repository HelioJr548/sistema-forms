import { signIn, signUp } from './auth.js';

export function submit() {
	document.querySelector('#signUpButton').addEventListener('click', signUp);
	document.querySelector('#signInButton').addEventListener('click', signIn);
}
