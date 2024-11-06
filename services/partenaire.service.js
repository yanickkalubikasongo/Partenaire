const {sequelize,Op,Partenaire,Organisation} = require('../config/db');
const fs = require('fs')

module.exports={
    check_telephone_partenaire: async (telephone,id)=>{
        try{
            const [check_telephone, metadata_] = await sequelize.query("SELECT partenaires.telephone FROM partenaires WHERE partenaires.telephone=:tel AND partenaires.id <> :id",
            {
                replacements: { tel:telephone, id:id }
            }); 
            const check_telephone_ = JSON.parse(JSON.stringify(check_telephone))
            return check_telephone_
            
        } catch (error) {
            res.send('Erreur '+ error)
        }
    },
    check_rccm_partenaire: async (rccm_f,id)=>{
        try{
            const [check_rccm_f, metadata_] = await sequelize.query("SELECT partenaires.rccm_f FROM partenaires WHERE partenaires.rccm_f=:rccm_f AND partenaires.id <> :id",
            {
                replacements: { rccm_f:rccm_f, id:id}
            }); 
            const check_rccm_f_ = JSON.parse(JSON.stringify(check_rccm_f))
            return check_rccm_f_
        } catch (error) {
            res.send('Erreur '+ error)
        }
    },
    check_id_national_partenaire: async (id_national,id)=>{
        try{
            const [check_id_national, metadata_] = await sequelize.query("SELECT partenaires.id_national FROM partenaires WHERE partenaires.id_national=:id_national AND partenaires.id <> :id",
            {
                replacements: { id_national:id_national, id:id }
            }); 
            const check_id_national_ = JSON.parse(JSON.stringify(check_id_national))
            return check_id_national_
        } catch (error) {
            res.send('Erreur '+ error)
        }
    },
    check_email_partenaire: async (email,id)=>{
        const [check_email, metadata_] = await sequelize.query("SELECT partenaires.email FROM partenaires WHERE partenaires.email=:email AND partenaires.id <> :id",
        {
            replacements: { email:email, id:id }
        }); 
        const check_email_ = JSON.parse(JSON.stringify(check_email))
        return check_email_
    },
    nb_partner : async ()=>{ 
        const [nb_partner, meta] = await sequelize.query("SELECT COUNT(partenaires.id) n FROM partenaires");
        let nb_partner_ = JSON.parse(JSON.stringify(nb_partner))
        return nb_partner_[0].n
    },
    update_partner : async function(data,id_part,file,id_user){
        const path = "public/autorisation/"+await this.nb_partner()+ file.name,
              nameDocument = "static/autorisation/"+await this.nb_partner()+ file.name
        if(file){
            file.mv(path, async(err) => {
                if (err) {
                    res.send(err)
                }else {
                    await Partenaire.update(
                        { 
                            denomination: data.denomination,
                            id_national : data.id_national,
                            rccm_f      : data.rccm,
                            telephone   : data.telephone,
                            email       : data.email,
                            autorisation: nameDocument
                        }, 
                        {
                        where: { 
                            id : id_part 
                        }
                    });
                }
            })
        }else{
            await Partenaire.update(
                { 
                    denomination: data.denomination,
                    id_national : data.id_national,
                    rccm_f      : data.rccm,
                    telephone   : data.telephone,
                    email       : data.email
                }, 
                {
                where: { 
                    id : id_part 
                }
            });
        }

        let donnees = {
            'id' : id_part,
            'denomination': data.denomination,
            'id_national':data.id_national,
            'rccm':data.rccm,
            'telephone':data.telephone,
            'email':data.email,
            'action':'Mise à jour',
            'adresse_physique':'',
            'autorisation':'',
            'id_user':id_user,
            'date_': new Date().toISOString()
        },
        dat = fs.readFileSync('Logs/partenaire.json'),
        donnees_conversees = JSON.parse(dat)
        donnees_conversees.push(donnees)
        let nouveau =  JSON.stringify(donnees_conversees) 
        fs.writeFileSync('Logs/partenaire.json', nouveau , err=>{
            if(err) throw err
        })
        return 'r'
    },
    membre_actif : async (partner)=>{
        const [part, metada] = await sequelize.query("SELECT COUNT(DISTINCT users.id) n FROM membres INNER JOIN partenaire_membres ON partenaire_membres.id_membre=membres.id INNER JOIN partenaires ON partenaire_membres.id_partenaire=partenaires.id INNER JOIN users ON users.id=membres.id_user WHERE partenaires.id=:id_part AND partenaire_membres.etat_user=1",
        {
            replacements: { id_part :  partner}
        }),
        partenaire = JSON.parse(JSON.stringify(part))
        return partenaire[0].n
    },
    somme_depot : async (id_cmt,data)=>{
        const [somme_depot, m] = await sequelize.query("SELECT SUM(depots.montant_depose) n FROM depots INNER JOIN compte_moneys ON compte_moneys.id=depots.id_compte WHERE depots.id_compte=:id_compte AND depots.devise=:devise",
        {
            replacements: { id_compte : id_cmt, devise:data.devise}
        }),
        somme_depot_ = JSON.parse(JSON.stringify(somme_depot)) // Somme des dépôts
        return somme_depot_
    },
    somme_transfert_recu : async (id_cmt,data)=>{
        const [somme_transfert_cdf_recu, meta] = await sequelize.query("SELECT SUM(transferts.montant_envoye) n FROM transferts INNER JOIN compte_moneys ON compte_moneys.id=transferts.fk_recipiendaire WHERE transferts.devise=:devise AND transferts.fk_recipiendaire=:id_compte",
        {
            replacements: { id_compte :  id_cmt, devise:data.devise}
        }), 
        somme_transfert_cdf_recu_ = JSON.parse(JSON.stringify(somme_transfert_cdf_recu)) // Somme des transferts reçus
        return somme_transfert_cdf_recu_
    },
    somme_retrait : async (id_cmt,data)=>{
        const [somme_retrait, met] = await sequelize.query("SELECT SUM(retraits.montant_retire)+SUM(((retraits.montant_retire*retraits.pourc_preleve)/100)) n FROM retraits INNER JOIN compte_moneys ON compte_moneys.id=retraits.id_compte WHERE retraits.devise=:devise AND retraits.id_compte=:id_compte",
        {
            replacements: { id_compte : id_cmt, devise:data.devise}
        }),
        somme_retrait_ = JSON.parse(JSON.stringify(somme_retrait)) // Somme des montants retirés + le frais de retrait 
        return somme_retrait_
    },
    somme_transfert_effectue : async (id_cmt,data)=>{
        const [somme_transfert_effectue, me] = await sequelize.query("SELECT (SUM(transferts.montant_envoye)+ SUM(((transferts.montant_envoye*transferts.pourc_preleve)/100))) n FROM transferts INNER JOIN compte_moneys ON compte_moneys.id=transferts.fk_expediteur WHERE transferts.devise=:devise AND transferts.fk_expediteur=:id_compte",
        {
            replacements: { id_compte : id_cmt,devise:data.devise}
        }),
        somme_transfert_effectue_ = JSON.parse(JSON.stringify(somme_transfert_effectue)) // Somme des transferts effectués - pourcentage transfert
        return somme_transfert_effectue_
    },
    somme_achat_im : async (id_compt,data)=>{
        let somme_achat_im_ = ''

        if(data.devise == 'USD' || data.devise == 'EUR'){
            const [somme_achat_im, mgain] = await sequelize.query("SELECT SUM(config_generales.prix_im) n FROM vente_ims INNER JOIN config_generales ON config_generales.id=vente_ims.id_config_generale WHERE vente_ims.devise=:devise AND vente_ims.id_compte_money=:id_compte",
            {
                replacements: { id_compte : id_compt, devise:data.devise}
            })
            somme_achat_im_ = JSON.parse(JSON.stringify(somme_achat_im)) // Somme achat im USD and EUR
        }
        if(data.devise == 'CDF'){
            const [somme_achat_im, mgain] = await sequelize.query("SELECT SUM(config_generales.prix_im * config_generales.taux_change) n FROM vente_ims INNER JOIN config_generales ON config_generales.id=vente_ims.id_config_generale WHERE vente_ims.devise=:devise AND vente_ims.id_compte_money=:id_compte",
            {
                replacements: { id_compte : id_compt, devise:data.devise}
            })
            somme_achat_im_ = JSON.parse(JSON.stringify(somme_achat_im)) // Somme achat im CDF²
        }
        return somme_achat_im_
    },
    solde_partenaire : async function (id_partner,devise){

        let id_compt= await this.search_id_compte_partner(id_partner),
            msg = 0,
            data = {
                devise:devise
            }

        if(id_compt !=''){ // Vérification existance du compte
            let somme_depot_effectue = await this.somme_depot(id_compt[0].id,data),
                somme_transfert_recu_ = await this.somme_transfert_recu(id_compt[0].id,data),
                somme_retrait = await this.somme_retrait(id_compt[0].id,data),
                somme_transfert_effectue = await this.somme_transfert_effectue(id_compt[0].id,data),
                somme_achat_im = await this.somme_achat_im(id_compt[0].id,data),
            
                r1= (somme_depot_effectue[0].n == null) ? 0 : somme_depot_effectue[0].n,
                r2= (somme_transfert_recu_[0].n == null) ? 0 : somme_transfert_recu_[0].n,
                r3= (somme_retrait[0].n == null) ? 0 : somme_retrait[0].n,
                r4= (somme_transfert_effectue[0].n == null) ? 0 : somme_transfert_effectue[0].n,
                r8= (somme_achat_im[0].n == null) ? 0 : somme_achat_im[0].n
                
            msg = (parseFloat(r1) + parseFloat(r2)) - (parseFloat(r3) + parseFloat(r4) + parseFloat(r8) ) // Calcul solde partenaire
        }

        return msg
    },
    adhesion_janvier_mars : async (id_partner)=>{
        const [adhesion_janvier_mars, metad] = await sequelize.query("SELECT COUNT(membres.id) n FROM membres INNER JOIN partenaire_membres ON partenaire_membres.id_membre=membres.id INNER JOIN partenaires ON partenaire_membres.id_partenaire=partenaires.id INNER JOIN type_membres ON type_membres.id=membres.id_type_membre WHERE type_membres.id=7 AND partenaires.id=:part AND CONVERT_TZ(membres.createdAt,'+00:00','+01:00') BETWEEN CONCAT( YEAR(CONVERT_TZ(UTC_TIMESTAMP(),'+00:00','+01:00')),'-01-01') AND CONCAT( YEAR(CONVERT_TZ(UTC_TIMESTAMP(),'+00:00','+01:00')),'-03-31')",
        {
            replacements: { part :  id_partner}
        }),
        adhesion_janvier_mars_ = JSON.parse(JSON.stringify(adhesion_janvier_mars))
        return adhesion_janvier_mars_[0].n
    },
    adhesion_avril_juin : async (id_partner)=>{
        const [adhesion_avril_juin, metad] = await sequelize.query("SELECT COUNT(membres.id) n FROM membres INNER JOIN partenaire_membres ON partenaire_membres.id_membre=membres.id INNER JOIN partenaires ON partenaire_membres.id_partenaire=partenaires.id INNER JOIN type_membres ON type_membres.id=membres.id_type_membre WHERE type_membres.id=7 AND partenaires.id=:part AND CONVERT_TZ(membres.createdAt,'+00:00','+01:00') BETWEEN CONCAT( YEAR(CONVERT_TZ(UTC_TIMESTAMP(),'+00:00','+01:00')),'-01-04') AND CONCAT( YEAR(CONVERT_TZ(UTC_TIMESTAMP(),'+00:00','+01:00')),'-06-30')",
        {
            replacements: { part :  id_partner}
        }),
        adhesion_avril_juin_ = JSON.parse(JSON.stringify(adhesion_avril_juin))
        return adhesion_avril_juin_[0].n
    },
    adhesion_juillet_septembre : async (id_partner)=>{
        const [adhesion_juillet_septembre, metad] = await sequelize.query("SELECT COUNT(membres.id) n FROM membres INNER JOIN partenaire_membres ON partenaire_membres.id_membre=membres.id INNER JOIN partenaires ON partenaire_membres.id_partenaire=partenaires.id INNER JOIN type_membres ON type_membres.id=membres.id_type_membre WHERE type_membres.id=7 AND partenaires.id=:part AND CONVERT_TZ(membres.createdAt,'+00:00','+01:00') BETWEEN CONCAT( YEAR(CONVERT_TZ(UTC_TIMESTAMP(),'+00:00','+01:00')),'-07-01') AND CONCAT(YEAR(CONVERT_TZ(UTC_TIMESTAMP(),'+00:00','+01:00')),'-09-30')",
        {
            replacements: { part :  id_partner}
        }),
        adhesion_juillet_septembre_ = JSON.parse(JSON.stringify(adhesion_juillet_septembre))
        return adhesion_juillet_septembre_[0].n
    },
    adhesion_octobre_decembre : async (id_partner)=>{
        const [adhesion_octobre_decembre, metad] = await sequelize.query("SELECT COUNT(membres.id) n FROM membres INNER JOIN partenaire_membres ON partenaire_membres.id_membre=membres.id INNER JOIN partenaires ON partenaire_membres.id_partenaire=partenaires.id INNER JOIN type_membres ON type_membres.id=membres.id_type_membre WHERE type_membres.id=7 AND partenaires.id=:part AND CONVERT_TZ(membres.createdAt,'+00:00','+01:00') BETWEEN CONCAT( YEAR(CONVERT_TZ(UTC_TIMESTAMP(),'+00:00','+01:00')),'-10-01') AND CONCAT(YEAR(CONVERT_TZ(UTC_TIMESTAMP(),'+00:00','+01:00')),'-12-30')",
        {
            replacements: { part :  id_partner}
        }),
        adhesion_octobre_decembre_ = JSON.parse(JSON.stringify(adhesion_octobre_decembre))
        return adhesion_octobre_decembre_[0].n
    },
    search_id_compte_partner : async (partner)=>{
        const [part, metada] = await sequelize.query("SELECT compte_moneys.* FROM compte_moneys WHERE compte_moneys.id_partenaire=:id_part",
        {
            replacements: { id_part :  partner}
        }),
        partenaire = JSON.parse(JSON.stringify(part))
        return partenaire
    },
    solde_usd : async (partner)=>{
        const [solde_usd, metada] = await sequelize.query("SELECT COUNT(DISTINCT users.id) n FROM membres INNER JOIN type_membres ON type_membres.id=membres.id_type_membre INNER JOIN partenaire_membres ON partenaire_membres.id_membre=membres.id INNER JOIN partenaires ON partenaire_membres.id_partenaire=partenaires.id INNER JOIN users ON users.id=membres.id_user INNER JOIN compte_moneys ON compte_moneys.id_user=users.id WHERE type_membres.id=7 AND partenaires.id=:id_part",
        {
            replacements: { id_part :  partner}
        }),
        solde_usd_ = JSON.parse(JSON.stringify(solde_usd))
        return solde_usd_[0].n
    },
    max_membre : async (partner)=>{
        const [part, metada] = await sequelize.query("SELECT COUNT(DISTINCT membres.id) n FROM membres INNER JOIN partenaire_membres ON partenaire_membres.id_membre=membres.id INNER JOIN partenaires ON partenaires.id=partenaire_membres.id_partenaire WHERE partenaires.id=:id_part",
        {
            replacements: { id_part :  partner}
        }),
        partenaire = JSON.parse(JSON.stringify(part))
        return partenaire[0].n
    },
    enregistrer_partenaire : async (dataPartenaire)=>{
        let msg = 'e'
        if(dataPartenaire.statut == 'nouveau'){
            await sequelize.transaction(async (t) => {
                let part = await Partenaire.create({ 
                    prenom : dataPartenaire.prenom,
                    postnom : dataPartenaire.postnom,
                    nom : dataPartenaire.nom,
                    sexe : dataPartenaire.sexe,
                    telephone:dataPartenaire.telephone,
                    mdp:dataPartenaire.mdp,
                    email:dataPartenaire.email
                },{ transaction: t });
                await Organisation.create({ 
                    denomination : dataPartenaire.denomination,
                    id_national : dataPartenaire.id_nat,
                    rccm_f : dataPartenaire.rccm_f,
                    id_partenaire : part.dataValues.id,
                    type_organisation:dataPartenaire.type_organisation
                },{ transaction: t });
                msg = 'r'
            })
        }else{
            await sequelize.transaction(async (t) => {
                await Organisation.create({ 
                    denomination : dataPartenaire.denomination,
                    id_national : dataPartenaire.id_nat,
                    rccm_f : dataPartenaire.rccm_f,
                    id_partenaire : dataPartenaire.id_partenaire,
                    type_organisation:dataPartenaire.type_organisation
                },{ transaction: t });
                msg = 'r'
            })
        }
        return msg
    },
    find_gerant : async (Part)=>{
        let partenaire
        if(Part.rep == true) {
            const [part, metada] = await sequelize.query("SELECT partenaires.id,partenaires.prenom,partenaires.nom,partenaires.postnom,partenaires.sexe,partenaires.telephone,organisations.denomination FROM partenaires INNER JOIN organisations ON partenaires.id=organisations.id_partenaire")
            partenaire = JSON.parse(JSON.stringify(part))
        }else{
            const [part, metada] = await sequelize.query("SELECT partenaires.id,partenaires.prenom,partenaires.nom,partenaires.postnom,partenaires.sexe,partenaires.telephone,organisations.denomination FROM partenaires INNER JOIN organisations ON partenaires.id=organisations.id_partenaire WHERE partenaires.id=:id",
            {
                replacements: { id :  Part.id}
            });
            partenaire = JSON.parse(JSON.stringify(part))
        }
        return partenaire
    },
    rep_part : async ()=>{
        const [part, metada] = await sequelize.query("SELECT partenaires.id,partenaires.prenom,partenaires.nom,partenaires.postnom,partenaires.sexe,partenaires.telephone,organisations.denomination FROM partenaires INNER JOIN organisations ON partenaires.id=organisations.id_partenaire"),
              partenaire = JSON.parse(JSON.stringify(part))
        return partenaire
    }
};