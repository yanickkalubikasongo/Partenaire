const {sequelize,Op} = require('../config/db');
const fs = require('fs')

module.exports={
    vision_profile : async (hp,compt)=>{
        await sequelize.transaction(async (t) => {
            const [cmt, metad] = await sequelize.query("SELECT comptes.*, users.*, type_comptes.id id_type FROM comptes INNER JOIN users ON users.id = comptes.id INNER JOIN hopital_comptes ON hopital_comptes.id_compte = comptes.id INNER JOIN hopitals ON hopitals.id = hopital_comptes.id_hopital INNER JOIN type_comptes ON comptes.id_type = type_comptes.id WHERE hopital_comptes.id_hopital = :hp AND hopital_comptes.id_compte = :cmt",
            {
              replacements: { hp : hp, cmt : compt }
            }, { transaction: t }),
            cmt_ = JSON.parse(JSON.stringify(cmt))
            return cmt_
        })
    },
    vision_profile_adm_plat : async (compt,hop)=>{
        const [cmt, metad] = await sequelize.query("SELECT comptes.*, users.*, type_comptes.id id_type FROM comptes INNER JOIN users ON users.id = comptes.id INNER JOIN hopital_comptes ON hopital_comptes.id_compte = comptes.id INNER JOIN hopitals ON hopitals.id = hopital_comptes.id_hopital INNER JOIN type_comptes ON type_comptes.id = comptes.id_type WHERE hopital_comptes.id_hopital = :hp AND hopital_comptes.id_compte = :cmt",
        {
            replacements: { cmt : compt, hp : hop }
        }),
        cmt_ = JSON.parse(JSON.stringify(cmt))
        return cmt_
    },
    journal_connexion : async (hop)=>{
        const [cmt, metad] = await sequelize.query("SELECT connexions.date_heure_con dto, connexions.date_heure_decon dtf, comptes.* FROM connexions INNER JOIN comptes ON connexions.id_compte = comptes.id WHERE connexions.id_hopital = :hp AND DAY(connexions.date_heure_con) = :jour ORDER BY connexions.date_heure_con DESC",
        {
            replacements: { hp : hop,jour : (new Date().getDate()) }
        });
        let journal_connexion_ = JSON.parse(JSON.stringify(cmt))
        return journal_connexion_
    },
    journal_connexion_adm : async ()=>{
        const [cmt, metad] = await sequelize.query("SELECT connexions.*, comptes.*,hopitals.designation ds FROM connexions,comptes,hopitals WHERE connexions.id_compte = comptes.id AND connexions.id_hopital = hopitals.id AND DAY(connexions.date_heure_con) = :jour ORDER BY connexions.date_heure_con DESC",
        {
            replacements: { jour : (new Date().getDate()) }
        });
        let journal_connexion_ = JSON.parse(JSON.stringify(cmt))
        return journal_connexion_
    }
};