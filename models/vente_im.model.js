'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vente_im extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  vente_im.init({
    id_config_generale: { type: DataTypes.INTEGER, allowNull: false },
    devise            : { type: DataTypes.TEXT, allowNull: false },
    id_compte_money   : { type: DataTypes.INTEGER, allowNull: false },
    motif             : DataTypes.STRING
  }, {
    sequelize,
    modelName: 'vente_im',
  });
  return vente_im;
};