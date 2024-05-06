'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert('form_questions', [
			// Qual sua cor favorita?
			{
				form_id: 1,
				question_id: 1,
				created_at: new Date(),
				updated_at: new Date(),
			},
			// Qual é o seu animal favorito?
			{
				form_id: 1,
				question_id: 2,
				created_at: new Date(),
				updated_at: new Date(),
			},
			// Qual é o seu nome?
			{
				form_id: 1,
				question_id: 3,
				created_at: new Date(),
				updated_at: new Date(),
			},
		]);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('form_questions', null, {});
	},
};
