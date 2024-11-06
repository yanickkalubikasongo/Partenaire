const {nationalite,User,structure_user,etat_civil,Partenaire_membre,sequelize} = require('../config/db');
const { QueryTypes }  = require('sequelize');
const fs = require('fs')

module.exports={
    all_part:async function(part){
        const [organisat, metadata_] = await sequelize.query("SELECT partenaires.* FROM partenaires WHERE partenaires.id=:id_part",
        {
            replacements: { id_part: part }
        }); 
        const organisat_ = JSON.parse(JSON.stringify(organisat))
        return organisat_
    },
    create:async function(data,structure){
        await sequelize.transaction(async (t) => {
            let user = await User.create({
                prenom            :data.prenom,
                nom               :data.nom,
                post_nom          :data.postnom,
                sexe              :data.sexe,
                date_naissance    :data.date_naissance,
                lieu_naissance    :data.lieu_naissance,
                etat_civil        :data.etat_civil,
                id_type           :7,
                email             :data.email,
                telephone         :data.telephone,
                numero_piece      :data.num_piece_identite,
                type_piece_id     :data.type_piece_identite,
                adresse_physique  :data.adresse,
                nationalite_id    :data.nationalite
            }, { transaction: t });
            await structure_user.create({
                id_user        :user.dataValues.id,
                id_structure   :structure,
                etat_user      :'Active',
                type_structure :'Organisation'
            }, { transaction: t });
        })
        return 'r'
    },
    rep_membre:async function(organisation){
        const [organisat, metadata_] = await sequelize.query("SELECT users.id,partenaires.id id_org,users.prenom,users.nom,users.post_nom,users.sexe,partenaire_membres.etat_user FROM users INNER JOIN membres ON membres.id_user INNER JOIN partenaire_membres ON partenaire_membres.id_membre=membres.id INNER JOIN partenaires ON partenaires.id=partenaire_membres.id_partenaire WHERE partenaires.id=:org AND membres.id_type_membre=7",
        {
            replacements: { org: organisation }
        }); 
        const organisat_ = JSON.parse(JSON.stringify(organisat))
        return organisat_
    },
    rep_nationalite:async function(){
        return await nationalite.findAll();
    },
    rep_etat:async function(){
        return await etat_civil.findAll();
    },
    on_membre_by_member:async function(data){
        const [us, metadata_] = await sequelize.query("SELECT users.*,users.id id_user,partenaires.*,partenaires.id id_org,type_membres.id id_type,partenaire_membres.etat_user etat,membres.id id_memb FROM users INNER JOIN membres ON membres.id_user=users.id INNER JOIN partenaire_membres ON partenaire_membres.id_membre=membres.id INNER JOIN partenaires ON partenaires.id=partenaire_membres.id_partenaire INNER JOIN type_membres ON type_membres.id=membres.id_type_membre WHERE (CONCAT(LPAD(partenaires.id,4,0),'-',LPAD(users.id,6,0)))=:im",
        {
            replacements: { im: data.im }
        }),
        us_ = JSON.parse(JSON.stringify(us))
        return us_
    },
    on_membre:async function(data){
        const [us, metadata_] = await sequelize.query("SELECT users.*,provinces.libelle nat,partenaire_membres.etat_user,partenaires.id id_org,membres.id id_memb FROM users INNER JOIN provinces ON provinces.id=users.id_province INNER JOIN membres ON membres.id_user=users.id INNER JOIN partenaire_membres ON partenaire_membres.id_membre=membres.id INNER JOIN partenaires ON partenaires.id=partenaire_membres.id_partenaire WHERE users.id=:id",
        {
            replacements: { id: data.id }
        }),
        us_ = JSON.parse(JSON.stringify(us))
        return us_
    },
    check_update_member:async function(data){
        const [check_update, metadata_] = await sequelize.query("SELECT users.id FROM users WHERE users.prenom=:prenom AND users.nom=:nom AND users.post_nom=:post_nom AND users.date_naissance=:dat AND users.lieu_naissance=:lieu AND users.email=:email AND users.telephone=:tel AND users.adresse_physique=:adresse_physique",
        {
            replacements: { 
                prenom: data.prenom,
                nom:data.nom,
                post_nom:data.postnom,
                dat:data.date_naissance,
                lieu:data.lieu_naissance,
                email:data.email,
                tel:data.telephone,
                adresse_physique:data.adresse_physique
             }
        }),
        check_update_ = JSON.parse(JSON.stringify(check_update))
        return check_update_
    },
    update:async function(data,id_user){
        let msg = 'null'
        if(await this.check_update_member(data) == ''){
            msg = 'r'
            
            await User.update(
                { 
                    prenom          :data.prenom,
                    nom             :data.nom,
                    post_nom        :data.postnom,
                    date_naissance  :data.date_naissance,
                    lieu_naissance  :data.lieu_naissance,
                    email           :data.email,
                    //telephone       :data.telephone,
                    adresse_physique:data.adresse_physique
                }, 
                {
                where: { 
                    id : data.id 
                }
            });

            let donnees = {
                'prenom'          :data.prenom,
                'nom'             :data.nom,
                'post_nom'        :data.postnom,
                'date_naissance'  :data.date_naissance,
                'lieu_naissance'  :data.lieu_naissance,
                'email'           :data.email,
                'telephone'       :data.telephone,
                'adresse_physique':data.adresse_physique,
                'opération'       :'mise à jour',
                'id_user'         :id_user,
                'date_': new Date().toISOString()
            },
            dat = fs.readFileSync('Logs/membre.json'),
            donnees_conversees = JSON.parse(dat)
            donnees_conversees.push(donnees)
            let nouveau =  JSON.stringify(donnees_conversees) 
            fs.writeFileSync('Logs/membre.json', nouveau , err=>{
                if(err) throw err
            })
        }
        return msg
    },
    bannir:async function(data,structure,id_user){
        await Partenaire_membre.update(
            { 
                etat_user:data.etat
            }, 
            {
            where: { 
                id_membre    : data.id,
                id_partenaire: structure
            }
        });
        
        let donnees = {
            'state'    :data.etat,
            'opération':'mise à jour',
            'id_user':id_user,
            'date_'    : new Date().toISOString()
        },
        dat = fs.readFileSync('Logs/membre.json'),
        donnees_conversees = JSON.parse(dat)
        donnees_conversees.push(donnees)
        let nouveau =  JSON.stringify(donnees_conversees) 
        fs.writeFileSync('Logs/membre.json', nouveau , err=>{
            if(err) throw err
        })
        return this.on_membre(data)
    }  
};
