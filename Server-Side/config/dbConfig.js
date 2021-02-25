const config = require('./config');
const Sequelize = require('sequelize');

let env = process.env.NODE_ENV || 'development';

const sequelize = new Sequelize(config[env].database, config[env].username, config[env].password, {
    host: config[env].host,
    dialect: 'postgres',
    // ssl:true, 
    // dialectOptions: {
    //     ssl: {
    //       require: true, // This will help you. But you will see nwe error
    //       rejectUnauthorized: false // This line will fix new error
    //     }
    //   },
});

module.exports = sequelize;