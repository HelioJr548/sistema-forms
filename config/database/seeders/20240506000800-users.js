'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert('users', [
			{
				cpf: '12345678901',
				name: 'Usuário 1',
				email: 'usuario1@example.com',
				password: 'senha1',
				type: 'entrevistador',
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				cpf: '23456789012',
				name: 'Usuário 2',
				email: 'usuario2@example.com',
				password: 'senha2',
				type: 'entrevistador',
				created_at: new Date(),
				updated_at: new Date(),
			},
			// Adicione mais entradas conforme necessário
		]);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('users', null, {});
	},
};
