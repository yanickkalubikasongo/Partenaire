require('dotenv').config();

const Sequelize                     = require('sequelize');
const RoleModel                     = require('../models/role');
const OrganisationModel             = require('../models/organisation.model');
const Droit_Model                   = require('../models/droit');
const Connexion_Model               = require('../models/connexion');

const Personnel_Model               = require('../models/personnel.model');
const Localisation_Model            = require('../models/localisation.model');
const Partenaire_Model              = require('../models/partenaire.model');
const Organisation_Model            = require('../models/organisation.model');
const compte_money_Model            = require('../models/compte_money.model');
const Partenaire_membre_model       = require('../models/partenaire_membre.model');
const agence_Model                  = require('../models/agence.model');
const transaction_Model             = require('../models/transaction');
const Pourcentage_Model             = require('../models/poucentage');
const nationaliteModel              = require('../models/nationalite');
const Type_piece_identite_Model     = require('../models/type_piece_identite');
const type_users_Model              = require('../models/type_user');
const structure_user_Model          = require('../models/structure_user');
const etat_civil_Model              = require('../models/etat_civil');
const UserModel                     = require('../models/user');
const ProvinceModel                 = require('../models/province');
const MembreModel                   = require('../models/membre.model');
const Monnaie_electroniqueModel     = require('../models/monnaie_electronique');
const venteImModel                  = require('../models/vente_im.model');

const sequelize = new Sequelize('finuseco','finuseco','Admin2704@',{
    host    : 'localhost',
    dialect : 'mysql'
});

const Connexion                     = Connexion_Model(sequelize,Sequelize);
const Droit                         = Droit_Model(sequelize,Sequelize);
const hopital                       = OrganisationModel(sequelize,Sequelize);
const role                          = RoleModel(sequelize,Sequelize);

const Personnel                     = Personnel_Model(sequelize,Sequelize);
const VenteIm                       = venteImModel(sequelize,Sequelize);
const Partenaire_membre             = Partenaire_membre_model(sequelize,Sequelize);
const Localisation                  = Localisation_Model(sequelize,Sequelize);
const Partenaire                    = Partenaire_Model(sequelize,Sequelize)
const Organisation                  = Organisation_Model(sequelize,Sequelize)
const compte_money                  = compte_money_Model(sequelize,Sequelize)
const Agence                        = agence_Model(sequelize,Sequelize)
const Transaction                   = transaction_Model(sequelize,Sequelize)
const Pourcentage                   = Pourcentage_Model(sequelize,Sequelize)
const nationalite                   = nationaliteModel(sequelize,Sequelize);
const Type_piece_identite           = Type_piece_identite_Model(sequelize,Sequelize);
const type_users                    = type_users_Model(sequelize,Sequelize);
const structure_user                = structure_user_Model(sequelize,Sequelize);
const etat_civil                    = etat_civil_Model(sequelize,Sequelize);
const User                          = UserModel(sequelize,Sequelize);
const Province                      = ProvinceModel(sequelize,Sequelize);
const Membre                        = MembreModel(sequelize,Sequelize);
const Monnaie_electronique          = Monnaie_electroniqueModel(sequelize,Sequelize);

const Op = Sequelize.Op

module.exports = {
    Connexion,
    role,
    User,

    Personnel,
    VenteIm,
    Localisation,
    Partenaire_membre,
    Membre,
    Monnaie_electronique,
    Partenaire,
    Organisation,
    compte_money,
    Agence,
    Transaction,
    Pourcentage,
    nationalite,
    Type_piece_identite,
    type_users,
    structure_user,
    etat_civil,
    Province,
    
    Droit,
    sequelize
};
