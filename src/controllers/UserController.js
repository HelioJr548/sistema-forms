const path = require('path');

const userBoard = (req, res) => {
	res.sendFile(path.join(__dirname, '..', 'views/user', 'index.html'));
};

const adminBoard = (req, res) => {
	res.sendFile(path.join(__dirname, '..', 'views/admin', 'index.html'));
};

const getUserData = (req, res) => {
	// Obtenha os dados do usuário de onde você armazena eles
	const user = req.user;

	const userData = {
		name: user.name,
		role: user.role,
	};
	res.json(userData);
};

const dashboard = async (req, res) => {
	try {
		// // Verifique se o usuário é um administrador
		const isAdmin = req.user.role === 'admin';

		// Lógica para usuários comuns e administradores
		if (isAdmin) {
			// Se o usuário for um administrador, chame a função adminBoard
			adminBoard(req, res);
		} else {
			// Se o usuário não for um administrador, chame a função userBoard
			userBoard(req, res);
		}
	} catch (error) {
		res.status(500).send({ message: error.message });
	}
};

exports.UserController = {
	dashboard,
	getUserData,
};
