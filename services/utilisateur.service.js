const {sequelize,Op,compte,Connexion,Partenaire_membre,User, role} = require('../config/db');
const fs     = require('fs')
const Helper = require('../helper/nombreEnregistrement');
const { parse } = require("csv-parse");
const bcrypt = require("bcrypt");

module.exports={ 
    recuperation_id_mdp_oublie : async function(pseudo){
        const [rec_id, metadata] = await sequelize.query("SELECT partenaire_membres.* FROM partenaire_membres WHERE partenaire_membres.pseudo=:ps",
        {
            replacements: { ps: pseudo }
        });
        const rec_id_ = JSON.parse(JSON.stringify(rec_id))
        return rec_id_
    },
    create_new_mdp_ : async function(BodyRequest){
        await sequelize.transaction(async (t) => {
            let id = await this.recuperation_id_mdp_oublie(BodyRequest.pseudo),
                salt     = await bcrypt.genSalt(10),
                mdp_hash = await bcrypt.hash(BodyRequest.new_mdp,salt)

            await Partenaire_membre.update({ mot_de_passe : mdp_hash,etat_mot_de_passe : 1 }, {
                where: { pseudo : BodyRequest.pseudo }
            },{ transaction: t });
            
               donnees = {
                    'id' : id[0].id,
                    'nouveau_mot_de_passe': BodyRequest.new_mdp,
                    'action': 'Récupération mot de passe',
                    'date_': new Date().toISOString()
                },
                data = fs.readFileSync('Logs/compte.json'),
                donnees_conversees = JSON.parse(data)
            donnees_conversees.push(donnees)
            let nouveau =  JSON.stringify(donnees_conversees) 
            fs.writeFileSync('Logs/compte.json', nouveau , err=>{
                if(err) throw err
            })
        });
    },
    recuperation_mdp : async function(DataRecMdp){
        const [rec_mdp, metadata] = await sequelize.query("SELECT comptes.*, users.* FROM comptes,users WHERE comptes.id=users.id AND comptes.pseudo=:ps AND comptes.vehicule_prefere=:vp AND comptes.fruit_prefere=:fp AND comptes.date_ouverture=:datouv AND users.nom=:n AND users.email=:em AND users.prenom=:p AND users.telephone=:tel AND users.post_nom=:post",
        {
            replacements: { ps: DataRecMdp.pseudo, vp: DataRecMdp.voiture, fp: DataRecMdp.fruit, datouv : DataRecMdp.date_ouverture,n: DataRecMdp.nom, em : DataRecMdp.email, p: DataRecMdp.prenom, tel: DataRecMdp.telephone, post: DataRecMdp.postnom }
        });
        const rec_mdp_ = JSON.parse(JSON.stringify(rec_mdp))
        return rec_mdp_
    },
check_pseudo_mdp_admin_plat : async function(pseudo_,id_nation){
    const [cmtt, metadata_] = await sequelize.query("SELECT partenaires.id id_o,partenaires.id_national, type_membres.id typee, users.id id,partenaire_membres.mot_de_passe mdp,partenaire_membres.etat_mot_de_passe etat_mdp  FROM partenaires INNER JOIN partenaire_membres ON partenaire_membres.id_partenaire=partenaires.id INNER JOIN membres ON membres.id=partenaire_membres.id_membre INNER JOIN users ON users.id=membres.id_user INNER JOIN type_membres ON type_membres.id=membres.id_type_membre WHERE partenaire_membres.pseudo LIKE BINARY :ps AND partenaires.id_national=:id_national",
        {
            replacements: { ps: pseudo_ ,id_national:id_nation}
        }
    ); 
    const obj = JSON.parse(JSON.stringify(cmtt))
    return obj
},
connexion_administrateur : async function(pseudo,id_nation){
    const [cmt, metadata_] = await sequelize.query("SELECT partenaires.id id_0,UPPER(partenaires.denomination) d, type_membres.id typee, users.id id,users.prenom,users.nom,users.post_nom,users.photo p,users.sexe,users.telephone,users.email,users.adresse_physique, partenaire_membres.mot_de_passe mdp FROM partenaires INNER JOIN partenaire_membres ON partenaire_membres.id_partenaire=partenaires.id INNER JOIN membres ON membres.id=partenaire_membres.id_membre INNER JOIN users ON users.id=membres.id_user INNER JOIN type_membres ON type_membres.id=membres.id_type_membre WHERE partenaire_membres.pseudo LIKE BINARY :ps AND partenaires.id_national=:id_national",
    {
        replacements: { ps: pseudo,id_national:id_nation }
    }); 
    const compte_ = JSON.parse(JSON.stringify(cmt))
    return compte_
},
    connexion_simple_utilisateur : async function(pseudo,mdp_){
        const [cmt, metadata] = await sequelize.query("SELECT hopitals.id id,comptes.id id_cmt FROM hopitals INNER JOIN hopital_comptes ON hopital_comptes.id_hopital=hopitals.id INNER JOIN comptes ON comptes.id=hopital_comptes.id_compte WHERE comptes.pseudo=:ps AND comptes.motpasse=:mdp AND comptes.etat_mot_de_passe=:eta AND hopitals.etat='Activer' AND (hopital_comptes.etat_compte = 'Activer' OR hopital_comptes.etat_compte = 'En Attente de Suppression' OR hopital_comptes.etat_compte = 'En Attente de desactivation')",
        {
            replacements: { ps : pseudo ,mdp : mdp_,eta : 'Activer'}
        }); 
        const compte_ = JSON.parse(JSON.stringify(cmt))
        return compte_
    },
    create_connexion : async function(id_cmt){
        await Connexion.create({
            id_user       : id_cmt
        }) 
    },
    deconnexion_simple_user : async function(id_compte){   
        const [conn, met] = await sequelize.query("SELECT connexions.id id FROM connexions WHERE connexions.id_user = :idcmt ORDER BY connexions.id DESC LIMIT 1",
        {
            replacements: { idcmt : id_compte }
        });
        const connexion_ = JSON.parse(JSON.stringify(conn))
        await Connexion.update({  date_heure_decon : new Date().toISOString().replace('Z', '').replace('T', ' ') }, {
            where: { id : connexion_[0].id }
        });
    }
};