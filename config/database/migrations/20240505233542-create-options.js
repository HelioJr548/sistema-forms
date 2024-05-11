'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('options', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			form_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: 'forms', key: 'id' },
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
			},
			question_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: 'questions', key: 'id' },
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
			},
			text: {
				type: Sequelize.STRING,
				allowNull: false,
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
		await queryInterface.dropTable('options');
	},
};
