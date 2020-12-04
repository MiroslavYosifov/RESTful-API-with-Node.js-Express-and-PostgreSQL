const config = require('./config');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(config.development.database, config.development.username, config.development.password, {
    host: config.development.host,
    dialect: 'postgres'
});

module.exports = sequelize;