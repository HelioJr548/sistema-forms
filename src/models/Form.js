const { Model, DataTypes } = require('sequelize');

class Form extends Model {
    static init(sequelize) {
        super.init(
            {
                title: DataTypes.TEXT,
                description: DataTypes.TEXT,
                active: DataTypes.BOOLEAN,
            },
            {
                sequelize,
            }
        );
    }

    static associate(models) {
        this.belongsToMany(models.User, { through: 'user_forms' });
        this.belongsToMany(models.Question, { through: 'form_questions' });
    }
}

module.exports = Form;
