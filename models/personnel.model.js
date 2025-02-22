'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class membre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  membre.init({
    prenom: DataTypes.STRING,
    postnom: DataTypes.STRING,
    nom: DataTypes.STRING,
    sexe: DataTypes.STRING,
    data_naissance: DataTypes.STRING,
    lieu_naissance : DataTypes.STRING,
    type_piece: DataTypes.INTEGER,
    adresse: DataTypes.STRING,
    telephone: DataTypes.STRING,
    email: DataTypes.STRING,
    type_membre: DataTypes.INTEGER,
    numero_piece : DataTypes.STRING,
    id_province:DataTypes.INTEGER,
    id_agence:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'membre',
  });
  return membre;
};