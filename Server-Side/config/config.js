require('dotenv').config();
const { DB_HOSTNAME, DB_USERNAME, DB_PASSWORD } = process.env;

let env = process.env.NODE_ENV || 'production';

const creds = {
    development: {
      username: DB_USERNAME,
      password: DB_PASSWORD,
      database: 'sequelize_database_dev',
      host: DB_HOSTNAME,
      dialect: 'postgresql',
      authCookieName: 'x-auth-token'
    },
    production: {
      username: 'qtinnowzgymddt',
      password: 'ba32877896791a93ee1b83ce383e06e7fbd219aef3bb9e4a1e2c67dbca4212cb',
      database: 'd6r0he3co6njke',
      host: 'ec2-54-78-127-245.eu-west-1.compute.amazonaws.com',
      dialect: 'postgresql',
      authCookieName: 'x-auth-token'
    },
    test: {
      username: DB_USERNAME,
      password: DB_PASSWORD,
      database: 'sequelize_database_test',
      host: DB_HOSTNAME,
      dialect: 'postgresql',
      authCookieName: 'x-auth-token'
    },
};

module.exports = creds;
  