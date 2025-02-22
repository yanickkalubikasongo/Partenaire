'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class partenaire_membres extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  partenaire_membres.init({
    id_partenaire     : DataTypes.INTEGER,
    id_membre         : DataTypes.INTEGER,
    etat_user         : DataTypes.INTEGER,
    pseudo            : DataTypes.STRING,
    mot_de_passe      : DataTypes.STRING,
    etat_mot_de_passe : DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'partenaire_membres',
  });
  return partenaire_membres;
};