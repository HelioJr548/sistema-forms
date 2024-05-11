'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert('options', [
			{
				form_id: 1,
				question_id: 1,
				text: 'Vermelho',
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				form_id: 1,
				question_id: 1,
				text: 'Azul',
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				form_id: 1,
				question_id: 1,
				text: 'Verde',
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				form_id: 1,
				question_id: 2,
				text: 'Cachorro',
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				form_id: 1,
				question_id: 2,
				text: 'Gato',
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				form_id: 2,
				question_id: 2,
				text: 'Cavalo',
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				form_id: 2,
				question_id: 2,
				text: 'Passarinho',
				created_at: new Date(),
				updated_at: new Date(),
			},
			// Adicione mais entradas conforme necessário
		]);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('options', null, {});
	},
};
