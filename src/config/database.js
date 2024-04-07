const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('music_list', 'root', '', {
  host: 'localhost',
  dialect: 'mysql', 
});

module.exports = sequelize; 