const { Model, DataTypes } = require('sequelize');

class Option extends Model {
    static init(sequelize) {
        super.init(
            {
                form_id: DataTypes.INTEGER,
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
        this.belongsTo(models.Form);
    }
}

module.exports = Option;
