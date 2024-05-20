const User = require('../models/User');
const { Op } = require('sequelize');

const checkIfUserExists = async (req, res, next) => {
	const { cpf, email } = req.body;
	try {
		const user = await User.findOne({
			where: {
				[Op.or]: [{ cpf }, { email }],
			},
		});
		if (user) {
			return res.status(400).send({ error: 'Usuário já existe' });
		}
		next();
	} catch (error) {
		console.error('Error:', error);
		res.status(500).send({ error: 'Internal Server Error' });
	}
};

const checkEmptyFields = (req, res, next) => {
	const values = Object.values(req.body); // Get values of the fields from the request body
	// Check if any field is empty
	if (values.some((value) => !value.trim())) {
		return res.status(400).send({ error: 'All fields are required' });
	}
	// If all fields are filled, proceed to the next middleware or route
	next();
};

exports.verifySignUp = {
	checkEmptyFields,
	checkIfUserExists,
};
