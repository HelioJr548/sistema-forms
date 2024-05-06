'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('users', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			cpf: {
				type: Sequelize.TEXT,
				allowNull: false,
				unique: true,
			},
			name: {
				type: Sequelize.TEXT,
				allowNull: true,
			},
			email: {
				type: Sequelize.TEXT,
				allowNull: false,
				unique: true,
			},
			password: {
				type: Sequelize.TEXT,
				allowNull: false,
			},
			type: {
				type: Sequelize.TEXT,
				allowNull: false,
				defaultValue: 'entrevistador',
			},
			created_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			updated_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('users');
	},
};
