const jwt = require('jsonwebtoken');
const User = require('../models/User');
const path = require('path');

const verifyToken = (req, res, next) => {
	const token = req.cookies['accessToken'];

	if (!token) {
		return res.redirect('/');
	}

	jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, decoded) => {
		if (err) {
			return res.status(401).send({ message: 'Unauthorized' });
		}
		try {
			const user = await User.findByPk(decoded.id);
			if (!user) {
				return res.status(404).send({ message: 'User not found' });
			}
			req.user = user;
			next();
		} catch (error) {
			console.error('Error:', error);
			res.status(500).send({ message: 'Internal Server Error' });
		}
	});
};

const isAdmin = async (req, res, next) => {
	try {
		if (req.user.role === 'admin') {
			next();
		} else {
			res.status(403).send({
				message: 'Require Admin Role!',
				userRole: req.user.role,
			});
		}
	} catch (error) {
		console.error('Error:', error);
		res.status(500).send({ message: 'Internal Server Error' });
	}
};

exports.authJWT = {
	verifyToken,
	isAdmin,
};
