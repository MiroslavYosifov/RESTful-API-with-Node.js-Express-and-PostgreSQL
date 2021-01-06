const config = require('./config');
const Sequelize = require('sequelize');

let env = process.env.NODE_ENV || 'development';

const sequelize = new Sequelize(config[env].database, config[env].username, config[env].password, {
    host: config[env].host,
    dialect: 'postgres'
});

module.exports = sequelize;