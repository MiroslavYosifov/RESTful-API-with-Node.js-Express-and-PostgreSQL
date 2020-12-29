'use strict';
const { Model } = require('sequelize');
let bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.AuthToken);
    }
  };
  
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: {
      type: DataTypes.STRING,
      allowNull: true,
      // Storing passwords in plaintext in the database is terrible.
      // Hashing the value with an appropriate cryptographic hash function is better.
    },
    comments: DataTypes.STRING
  },{
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate((user, options) => {
    return bcrypt.hash(user.password, bcrypt.genSaltSync(8))
        .then(hash => {
            user.password = hash;
        })
        .catch(err => { 
            throw new Error(); 
        });
  });

  User.prototype.validPassword = async function(password) {
    //console.log('Is it working', bcrypt.compare(password, this.password));
    return await bcrypt.compare(password, this.password);
  }

  return User;
};