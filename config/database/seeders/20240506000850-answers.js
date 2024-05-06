'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert('answers', [
			// Qual sua cor favorita?
			{
				user_id: 1,
				question_id: 1,
				option_id: 1,
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				user_id: 1,
				question_id: 1,
				option_id: 2,
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				user_id: 2,
				question_id: 1,
				option_id: 1,
				created_at: new Date(),
				updated_at: new Date(),
			},
			// Qual é o seu animal favorito?
			{
				user_id: 2,
				question_id: 2,
				option_id: 1,
				created_at: new Date(),
				updated_at: new Date(),
			},
			// Qual o seu nome?
			{
				user_id: 1,
				question_id: 3,
				answer: 'Teste',
				created_at: new Date(),
				updated_at: new Date(),
			},
			// Adicione mais entradas conforme necessário
		]);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('answers', null, {});
	},
};
