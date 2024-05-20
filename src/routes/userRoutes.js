const express = require('express');
const router = express.Router();
const { UserController } = require('../controllers/UserController');
const { authJWT } = require('../middleware');

router.get('/dashboard', [authJWT.verifyToken], UserController.dashboard); // Rota para tela Inicial
router.get('/userData', [authJWT.verifyToken], UserController.getUserData); // Rota para captura de dados do usuario

module.exports = router;
