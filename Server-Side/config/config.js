require('dotenv').config();
const { DB_HOSTNAME, DB_USERNAME, DB_PASSWORD } = process.env;

const creds = {
    development: {
      username: DB_USERNAME,
      password: DB_PASSWORD,
      database: 'sequelize_database_dev',
      host: DB_HOSTNAME,
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
    production: {
      username: DB_USERNAME,
      password: DB_PASSWORD,
      database: 'sequelize_database_prod',
      host: DB_HOSTNAME,
      dialect: 'postgresql',
      authCookieName: 'x-auth-token'
    }
};

module.exports = creds;
  