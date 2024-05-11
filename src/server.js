require('../config/database');
const express = require('express');
const { loadRoutes, loadViews } = require('./utils/loader');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para fazer o parsing do corpo da solicitação JSON
app.use(express.json());

// Middleware para fazer o parsing de cookies
app.use(cookieParser());

// // Carrega dinamicamente as rotas e os arquivos HTML
loadRoutes(app);
loadViews(app, express);

app.listen(PORT, () => {
	console.log(`Servidor rodando na porta ${PORT}`);
});
