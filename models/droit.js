'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class droit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  droit.init({
    creer_patient: DataTypes.STRING,
    repertoire_patient: DataTypes.STRING,
    alerte: DataTypes.STRING,
    annuler_deces : DataTypes.STRING,
    modifier_patient: DataTypes.STRING,  
    mise_a_jour_dossier : DataTypes.STRING,
    supprimer_patient: DataTypes.STRING,
    creer_rvd: DataTypes.STRING,
    repertoire_rdv: DataTypes.STRING,
    consulter_rdv: DataTypes.STRING,
    historique_rdv: DataTypes.STRING,
    annuler_rdv: DataTypes.STRING,
    module_gestion_acces: DataTypes.STRING,
    recherche_dossier: DataTypes.STRING,
    repertoire_dossier: DataTypes.STRING,
    lecture_dossier: DataTypes.STRING,
    repertoire_naissance: DataTypes.STRING,
    repertoire_deces: DataTypes.STRING,
    historique_maladie: DataTypes.STRING,
    nouveau_ne: DataTypes.STRING,
    id_role : DataTypes.INTEGER,
    nouveau_deces: DataTypes.STRING,
    editer_demande_exam: DataTypes.STRING,
    tableau_demande_exa: DataTypes.STRING,
    catalogue_tarifaire: DataTypes.STRING,
    recherche_facture_patient: DataTypes.STRING,
    payement_facture: DataTypes.STRING,
    generer_facture : DataTypes.STRING, 
    repertoire_facture : DataTypes.STRING,  
    modifier_prix : DataTypes.STRING, 
    regler_facture : DataTypes.STRING, 
    programmer_medecin : DataTypes.STRING, 
    modifier_programation : DataTypes.STRING,
    faire_consultation : DataTypes.STRING,
    parametres_generaux : DataTypes.STRING, 
    voir_calendier_consultation : DataTypes.STRING,
    terrain : DataTypes.STRING,
    exploration : DataTypes.STRING,
    elemens_clinnics : DataTypes.STRING,
    intervention : DataTypes.STRING,
    decision : DataTypes.STRING

  }, {
    sequelize,
    modelName: 'droit',
  });
  return droit;
};