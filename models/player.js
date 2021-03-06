// Import the ORM to create functions that will interact with the database.
// var orm = require(""../config/orm.js");
const Sequelize = require('sequelize');

module.exports = function (Sequelize, DataTypes) { 
  const user = Sequelize.define("user", { 
    username: {
    type: DataTypes.STRING,
    allowNull: false,
    },
    points: DataTypes.INTEGER,
    yards: DataTypes.INTEGER
  }, {
    timestamps: false
  });
  return user;
}

// create variables to do work with the database info