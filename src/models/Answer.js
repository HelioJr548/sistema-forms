const { Model, DataTypes } = require('sequelize');

class Answer extends Model {
    static init(sequelize) {
        super.init(
            {
                answer: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
            },
            {
                sequelize,
            }
        );
    }

    static associate(models) {
        this.belongsTo(models.User);
        this.belongsTo(models.Option);
        this.belongsTo(models.Question);
    }
}

module.exports = Answer;
