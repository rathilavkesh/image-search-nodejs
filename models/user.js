'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
  });

  User.associate = (models) => {
    console.log(models);
  };

  return User;
};
