const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const { Op } = require('sequelize');
const path = require('path');

const signup = async (req, res) => {
	try {
		const hashedPassword = await bcrypt.hash(req.body.password, 12);
		await User.create({
			cpf: req.body.cpf,
			name: req.body.name,
			email: req.body.email,
			password: hashedPassword,
		});

		res.status(200).send({
			message: 'User was registered successfully!',
		});
	} catch (error) {
		console.error('Error:', error);
		res.status(500).send({ message: 'Internal Server Error' });
	}
};

const signin = async (req, res) => {
	try {
		const user = await User.findOne({
			where: {
				[Op.or]: [
					{ cpf: req.body.account },
					{ email: req.body.account },
				],
			},
		});

		if (!user) {
			return res.status(404).send({ message: 'User Not Found.' });
		}

		const passwordIsValid = bcrypt.compareSync(
			req.body.password,
			user.password
		);

		if (!passwordIsValid) {
			return res.status(401).send({
				accessToken: null,
				message: 'Senha incorreta.',
			});
		}

		const accessToken = generateAccessToken(user);
		const refreshToken = generateRefreshToken(user);

		// Save refreshToken to the database or in-memory store securely
		user.refreshToken = refreshToken;
		await user.save();

		res.cookie('accessToken', accessToken, {
			maxAge: 15 * 60 * 1000,
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production',
		});
		res.cookie('refreshToken', refreshToken, {
			maxAge: 7 * 24 * 60 * 60 * 1000,
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production',
		});
		res.status(200).send({ username: user.name });
	} catch (error) {
		console.error('Error:', error);
		res.status(500).send({ message: 'Internal Server Error' });
	}
};

const logout = (req, res) => {
	try {
		// Clear the JWT token cookies
		Object.keys(req.cookies).forEach((cookieName) => {
			res.clearCookie(cookieName, { path: '/' });
		});
	} catch (error) {
		console.error('Error:', error);
		res.status(500).send({ message: 'Internal Server Error' });
	}
};

const generateAccessToken = (user) => {
	return jwt.sign(
		{ id: user.id, role: user.role },
		process.env.ACCESS_TOKEN_SECRET,
		{ expiresIn: process.env.ACCESS_TOKEN_EXPIRY || '15m' }
	);
};

const generateRefreshToken = (user) => {
	return jwt.sign(
		{ id: user.id, role: user.role },
		process.env.REFRESH_TOKEN_SECRET,
		{ expiresIn: process.env.ACCESS_TOKEN_EXPIRY || '7d' }
	);
};

exports.AuthController = {
	signup,
	signin,
	logout,
};
