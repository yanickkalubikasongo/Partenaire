const {sequelize,Op,Agence,Monnaie_electronique,Transaction,Pourcentage,Province,Type_piece_identite,etat_civil,type_users} = require('../config/db');
module.exports={
    select_price_im: async ()=>{
        const [pourcentage, metadata_] = await sequelize.query("SELECT config_generales.prix_im prix_im_usd,(config_generales.prix_im*config_generales.taux_change) prix_im_cdf FROM config_generales ORDER BY config_generales.id DESC LIMIT 1"); 
        const pourcentage_ = JSON.parse(JSON.stringify(pourcentage))
        return pourcentage_
    },
    config_generales: async (dataTransaction)=>{
        const [config_gen, metadata_] = await sequelize.query("SELECT config_generales.* FROM config_generales ORDER BY config_generales.id DESC LIMIT 1"); 
        const config_generales_ = JSON.parse(JSON.stringify(config_gen))
        return config_generales_
    },
    create_monnaie:async function(data){
        await Monnaie_electronique.create({
            id_agence : data.agence,
        	montant   : data.montant,
        	devise    : data.devise
        });
        return 'r'
    },
    create:async function(data){
        await Agence.create({
            denomination : data.denomination,
            telephone    : data.telephone,
            avenue       : data.avenue,
            quartier     : data.quartier,
            numero_parcel: data.ref_parcelle,
            commune      : data.commune
        });
        return 'r'
    },
    repertoire:async function(){
        return await Agence.findAll();
    },
    transac: async (dataTransaction)=>{
        let trans = await Transaction.findAll({
                where: { 
                    type  :dataTransaction.type,
                    devise:dataTransaction.devise
                }
            })
        return trans
    },
    create_poucentage_depot: async (dataTransaction)=>{
        await Transaction.create({
            minimum:dataTransaction.minimum,
            maximum:dataTransaction.maximum,
            frais  :dataTransaction.frais,
            type   :"Depot",
            devise :dataTransaction.devise
        });
        return 'r'
    },
    select_poucentage_depot: async (dataTransaction)=>{
        const [pourcentage, metadata_] = await sequelize.query("SELECT pourcentages.* FROM pourcentages ORDER BY pourcentages.id DESC LIMIT 1"); 
        const pourcentage_ = JSON.parse(JSON.stringify(pourcentage))
        return pourcentage_
    },
    send_pourcentage: async (dataTransaction)=>{
        await Pourcentage.create({
            credit:dataTransaction.credit,
            agent :dataTransaction.agent
        });
        return 'r'
    },
    on_agence: async (data)=>{
        let agence = await Agence.findAll({
            where: { id : data.id }
        })
        return agence
    },
    update: async (data)=>{
        await Agence.update(
            { 
                denomination :data.denomination,
                numero_parcel:data.ref_parcelle,
                commune      :data.commune,
                telephone    :data.telephone,
                avenue       :data.avenue,
                quartier     :data.quartier
            }, 
            {
            where: { 
                id : data.id 
            }
        });
    },
    on_transaction: async (data)=>{
        let trans = await Transaction.findAll({
            where: { id : data.id }
        })
        return trans
    },
    update_transaction: async (data)=>{
        await Transaction.update(
            { 
                minimum:data.min,
                maximum:data.max,
                frais  :data.frais
            }, 
            {
            where: { 
                id : data.id 
            }
        });
    },
    rep_province:async ()=>{
        let prov = await Province.findAll()
        return prov
    },
    rep_type_piece:async (id)=>{
        let type_piece = await Type_piece_identite.findAll()
        return type_piece
    },
    rep_type_membre:async()=>{
        const [type_membre, metadata_] = await sequelize.query("SELECT type_membres.* FROM type_membres INNER JOIN membres ON membres.id_type_membre=type_membres.id WHERE type_membres.id<>7"); 
        const type_membre_ = JSON.parse(JSON.stringify(type_membre))
        return type_membre_
    },
    rep_etat_civil:async function(){
        let type_piece = await etat_civil.findAll()
        return type_piece
    }
};