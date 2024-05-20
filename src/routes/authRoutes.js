const express = require('express');
const router = express.Router();
const { AuthController } = require('../controllers/AuthController');
const { verifySignUp } = require('../middleware');
const path = require('path');

router.get('/', (req, res) =>
	res.sendFile(path.join(__dirname, '..', 'views/sign', 'index.html'))
);

// Rota para registro de usuário
router.post(
	'/signup',
	[verifySignUp.checkEmptyFields, verifySignUp.checkIfUserExists],
	AuthController.signup
);

// Rota para login de usuário
router.post('/signin', [verifySignUp.checkEmptyFields], AuthController.signin);

// Rota para deslogar usuário
router.post('/logout', AuthController.logout);

module.exports = router;
