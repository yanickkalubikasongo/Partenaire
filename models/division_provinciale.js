'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class division_provinciale extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  division_provinciale.init({
    designation: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'division_provinciale',
  });
  return division_provinciale;
};