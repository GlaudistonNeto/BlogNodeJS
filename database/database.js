const Sequelize = require('sequelize');

const connection = new Sequelize('gnetopress', 'root', 'dev320', {
  host: 'localhost',
  dialect: 'mysql',
  timezone: '-03:00'
});

module.exports = connection;