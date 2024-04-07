const { DataTypes } = require('sequelize');
const db = require('../config/database'); // Configure your database connection

const Music = db.define(
  'Music', // Model names 
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    singer: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        isInt: true, // Ensures the year is an integer
        min: 1900,
        max: new Date().getFullYear(), // Cannot be in the future
      }
    },
  },
  {
    tableName: 'music', // Custom table name
    timestamps: false, 
  }
);

module.exports = Music;
