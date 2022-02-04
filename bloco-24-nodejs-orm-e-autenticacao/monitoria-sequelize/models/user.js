const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    fullName: DataTypes.STRING,
    phone_num: DataTypes.STRING,
  });

  return User;
};

module.exports = User;
