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
    protein: DataTypes.DECIMAL,
    fat: DataTypes.DECIMAL,
    carbohydrate: DataTypes.DECIMAL,
    imgUrl: DataTypes.STRING,
    calories: DataTypes.DECIMAL,
    price: DataTypes.DECIMAL,
    availability: DataTypes.JSON(DataTypes.DECIMAL)
  }, {
    sequelize,
    modelName: 'Food',
  });
  return Food;
};