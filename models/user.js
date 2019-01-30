'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {
    hooks: {
      beforeCreate: (user) => {
        return user.email = user.email.toUpperCase()
      }
    }
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};