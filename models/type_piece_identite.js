'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class type_piece_identite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  type_piece_identite.init({
    libelle :DataTypes.STRING
  }, {
    sequelize,
    modelName: 'type_piece_identite',
  });
  return type_piece_identite;
};