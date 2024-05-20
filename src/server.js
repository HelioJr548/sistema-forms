require('../config/database');
const express = require('express');
const cors = require('cors');
const { loadRoutes, loadViews } = require('./utils/loader');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
	origin: process.env.CORS,
};
app.use(cors(corsOptions));
app.use(express.json()); // Parse JSON requests
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded requests
app.use(cookieParser()); // Parse cookies

// // Carrega dinamicamente as rotas e os arquivos HTML
loadRoutes(app);
loadViews(app, express);

app.listen(PORT, () => {
	console.log(`Servidor rodando na porta ${PORT}`);
});
