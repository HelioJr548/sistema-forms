'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('answers', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			user_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: 'users', key: 'id' },
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
			option_id: {
				type: Sequelize.INTEGER,
				allowNull: true,
				references: { model: 'options', key: 'id' },
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
			},
			answer: {
				type: Sequelize.STRING,
				allowNull: true,
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
		await queryInterface.dropTable('answers');
	},
};
