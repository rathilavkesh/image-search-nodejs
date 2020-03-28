'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: { isEmail: true, notEmpty: true, notNull: true },
        set(val) {
          this.setDataValue('email', val.toLoweCase());
        },
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { is: /^[a-zA-Z0-9 ]+$/i, notEmpty: true, notNull: true },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { is: /^[a-zA-Z0-9 ]+$/i, notEmpty: true, notNull: true },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true, notNull: true },
      },
      active: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true },
    },
    {
      underscored: true,
      tableName: 'user',
      getterMethods: {
        fullName() {
          return `${this.firstName} ${this.lastName}`;
        },
      },
    }
  );

  User.associate = (models) => {
    User.hasMany(models.Address, { as: 'address' });
  };

  return User;
};
