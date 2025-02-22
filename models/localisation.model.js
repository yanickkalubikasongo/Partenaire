'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class localisation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  localisation.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    chefferie: DataTypes.STRING,
    territoire: DataTypes.STRING,
    province : DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'localisation',
  });
  return localisation;
};