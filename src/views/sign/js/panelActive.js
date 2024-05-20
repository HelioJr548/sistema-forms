export function panelActive() {
	const ghostSignUpButton = document.getElementById('ghostSignUp');
	const ghostSignInButton = document.getElementById('ghostSignIn');
	const container = document.getElementById('container');

	ghostSignUpButton.addEventListener('click', () => {
		container.classList.add('right-panel-active');
	});

	ghostSignInButton.addEventListener('click', () => {
		container.classList.remove('right-panel-active');
	});
}
