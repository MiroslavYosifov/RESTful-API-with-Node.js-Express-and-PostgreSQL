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
      username: 'zttmuqycteihes',
      password: '68e599a3a1440aad184995b848ff62be7e3e458857df9a608cff2bc4347b1686',
      database: 'd6fvjbeae3ai77',
      host: 'ec2-34-254-69-72.eu-west-1.compute.amazonaws.com',
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
  