const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(sequelize) {
        super.init(
            {
                cpf: DataTypes.TEXT,
                name: DataTypes.TEXT,
                email: DataTypes.TEXT,
                password: DataTypes.TEXT,
                type: DataTypes.TEXT,
            },
            {
                sequelize,
            }
        );
    }

    static associate(models) {
        this.belongsToMany(models.Form, { through: 'user_forms' });
        this.hasMany(models.Answer);
    }
}

module.exports = User;
