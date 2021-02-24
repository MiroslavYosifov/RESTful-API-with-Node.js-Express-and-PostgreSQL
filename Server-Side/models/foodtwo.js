'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FoodTwo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  FoodTwo.init({
    name: DataTypes.STRING,
    kind: DataTypes.STRING,
    protein: DataTypes.INTEGER,
    fat: DataTypes.INTEGER,
    carbohydrate: DataTypes.INTEGER,
    calories: DataTypes.INTEGER,
    imgUrl: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'FoodTwo',
  });
  return FoodTwo;
};