'use strict';
const User = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: DataTypes.STRING,
  }, {
    underscored: true,
  });
  return User;
};

module.exports = User;
