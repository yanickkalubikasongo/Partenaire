const config          = require('../config/db');
const { QueryTypes }  = require('sequelize');
//const organisation = require('../models/organisation');
const {
  //  Organisation,
  //  User,
  //  Agence,
  //  Agent,
    adherent,
    compte_money,
  //  Personnel,
  //  Devise,
  //  Credit,
    sequelize
} = config;

module.exports={
    create:async function(data,fiche_adhesion){
        await adherent.create({
            numero_piece        :data.numero_piece,
            type_piece_id       :data.type_piece,
            nom                 :data.nom,
            postnom             :data.postnom ,
            prenom              :data.prenom ,
            date_naissance      :data.date_naissance ,
            lieu_naissance      :data.lieu_naissance ,
            sexe_id             :data.sexe_id ,
            etat_civil          :data.etat_civil ,
            nationalite_id      :data.nationalite_id ,
            nom_pere            :data.nom_pere ,
            nom_mere            :data.nom_mere ,
            telephone           :data.telephone,
            avenue              :data.avenue,
            quartier            :data.quartier,
            numero_parcel       :data.numero_parcel,
            commune_id          :data.commune_id,
            fiche_adhesion      :fiche_adhesion
        });
    },
    get_adherent_by_im_id_piece:async function(dataAdherent){
        return await adherent.findAll({
            where: { 
                im:dataAdherent.im,
                numero_piece :dataAdherent.num_piece
            }
        })
    },
    rep_compte:async function(){
        const [rep_cmt, metadata_] = await sequelize.query("SELECT compte_moneys.id,compte_moneys.id_agence,adherents.nom,adherents.postnom,adherents.prenom,adherents.sexe,adherents.telephone,agences.denomination FROM compte_moneys INNER JOIN adherents ON compte_moneys.id_member=adherents.id INNER JOIN agences ON compte_moneys.id_agence=agences.id"),
              rep_comp = JSON.parse(JSON.stringify(rep_cmt))
        return rep_comp
    },
    create_compte:async function(compte,id_compte){
        let cmt = await compte_money.create({ 
            devise:compte.devise,
            type_compte:compte.type_compte,
            statut:compte.statut,
            id_agence:compte.id_agence,
            id_user:id_compte,
            id_member:compte.id_member
        }),
        id_cmt = cmt.dataValues.id
        return id_cmt
    }  /*,
    getAll:async function(){
        return await Membre.findAll();
    },
    get_credit:async function(){
       return await Credit.findAll();
      // return 'oui'
    },
    one_member:async function(id_){
        return await Membre.findAll({
            where: { id : id_ }
        })
    },
    getById:async function(id){
        return await Membre.findOne({
            where:{
                id:parseInt(id)
            }
        });
    },
    update:async function(data,file_name=null){
        let data_to_update;

        if(file_name == null){
            data_to_update = {
                numero_piece        :data.numero_piece,
                type_piece_id       :data.type_piece,
                nom                 :data.nom,
                postnom             :data.postnom ,
                prenom              :data.prenom ,
                date_naissance      :data.date_naissance ,
                lieu_naissance      :data.lieu_naissance ,
                sexe_id             :data.sexe_id ,
                etat_civil          :data.etat_civil ,
                nationalite_id      :data.nationalite_id ,
                nom_pere            :data.nom_pere ,
                nom_mere            :data.nom_mere ,
                telephone           :data.telephone,
                avenue              :data.avenue,
                quartier            :data.quartier,
                numero_parcel       :data.numero_parcel,
                commune_id          :data.commune_id,
            } 
        }else{
            data_to_update = {
                numero_piece        :data.numero_piece,
                type_piece_id       :data.type_piece,
                nom                 :data.nom,
                postnom             :data.postnom ,
                prenom              :data.prenom ,
                date_naissance      :data.date_naissance ,
                lieu_naissance      :data.lieu_naissance ,
                sexe_id             :data.sexe_id ,
                etat_civil          :data.etat_civil ,
                nationalite_id      :data.nationalite_id ,
                nom_pere            :data.nom_pere ,
                nom_mere            :data.nom_mere ,
                telephone           :data.telephone,
                avenue              :data.avenue,
                quartier            :data.quartier,
                numero_parcel       :data.numero_parcel,
                commune_id          :data.commune_id,
                fiche_adhesion      :file_name
            } 
        }

        await Membre.update(data_to_update,{ 
            where:{
                id:parseInt(data.membre_id)
            }
        });
    },   
    destroy:async function(id){
        await Membre.destroy({
            where:{
                id:parseInt(id)
            }
        });
    } */  
};