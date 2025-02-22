const {sequelize,Op} = require('../config/db');
const fs = require('fs');

module.exports={
    chambre_par_hopital_designation:async function(hop,designation_){
        const [chamb, metadata] = await sequelize.query("SELECT chambres.* FROM chambres INNER JOIN hopitals ON chambres.id_hopital =hopitals.id WHERE hopitals.id = :hp AND chambres.designation = :des",
        {
            replacements: { hp : hop, des : designation_ }
        });
        const chamb_ = JSON.parse(JSON.stringify(chamb))
        return chamb_
    },
    nb_enregistrement_hopital:async function(entite){
        const [chamb, metadata] = await sequelize.query("SELECT COUNT("+entite+".id) nb FROM "+entite+"");
        const chamb_ = JSON.parse(JSON.stringify(chamb))
        return chamb_[0].nb
    }
};