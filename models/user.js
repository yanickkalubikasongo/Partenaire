'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    prenom             :DataTypes.STRING,
    nom                :DataTypes.STRING,
    post_nom           :DataTypes.STRING,
    sexe               :DataTypes.STRING,
    date_naissance     :DataTypes.STRING,
    lieu_naissance     :DataTypes.STRING,
    etat_civil         :DataTypes.INTEGER,
    id_type            :DataTypes.INTEGER,
    email              :{
                            type: DataTypes.TEXT,
                            allowNull: false,
                            unique: true
                        },
    telephone          :DataTypes.STRING,
    pseudo             :DataTypes.STRING,
    motpasse           :DataTypes.STRING,
    etat_mot_de_passe  :DataTypes.STRING,
    numero_piece       :DataTypes.STRING,
    id_etat_civil      :DataTypes.INTEGER,
    adresse_physique   :DataTypes.STRING,
    photo              :DataTypes.STRING,
    id_type_piece_ident:DataTypes.INTEGER,
    id_nationalite     :DataTypes.INTEGER,
    id_province        :DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};