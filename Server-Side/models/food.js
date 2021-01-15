'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Food extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Food.init({
    name: DataTypes.STRING,
    kind: DataTypes.STRING,
    protein: DataTypes.INTEGER,
    fat: DataTypes.INTEGER,
    carbohydrate: DataTypes.INTEGER,
    calories: DataTypes.INTEGER,
    imgUrl: DataTypes.INTEGER,
    price: DataTypes.DECIMAL,
    availability: DataTypes.JSON(DataTypes.DECIMAL),
  }, {
    sequelize,
    modelName: 'Food',
  });
  return Food;
};