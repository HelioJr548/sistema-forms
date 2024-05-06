'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert('forms', [
			{
				title: 'Formulário 1',
				description: 'Descrição do Formulário 1',
				active: true,
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				title: 'Formulário 2',
				description: 'Descrição do Formulário 2',
				active: true,
				created_at: new Date(),
				updated_at: new Date(),
			},
			// Adicione mais entradas conforme necessário
		]);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('forms', null, {});
	},
};
