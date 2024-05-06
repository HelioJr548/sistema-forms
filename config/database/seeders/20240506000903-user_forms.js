'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert('user_forms', [
			// Qual sua cor favorita?
			{
				user_id: 1,
				form_id: 1,
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				user_id: 1,
				form_id: 2,
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				user_id: 2,
				form_id: 1,
				created_at: new Date(),
				updated_at: new Date(),
			},
		]);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('user_forms', null, {});
	},
};
