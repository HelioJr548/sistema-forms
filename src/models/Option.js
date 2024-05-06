const { Model, DataTypes } = require('sequelize');

class Option extends Model {
    static init(sequelize) {
        super.init(
            {
                question_id: DataTypes.INTEGER,
                text: DataTypes.STRING,
            },
            {
                sequelize,
            }
        );
    }

    static associate(models) {
        this.belongsTo(models.Question);
    }
}

module.exports = Option;
