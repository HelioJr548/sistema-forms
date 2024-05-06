const { Model, DataTypes } = require('sequelize');

class Question extends Model {
    static init(sequelize) {
        super.init(
            {
                body: DataTypes.TEXT,
                type: DataTypes.TEXT,
            },
            {
                sequelize,
            }
        );
    }

    static associate(models) {
        this.belongsToMany(models.Form, { through: 'form_questions' });
        this.hasMany(models.Option);
        this.hasMany(models.Answer);
    }
}

module.exports = Question;
