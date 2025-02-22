require('dotenv').config();
const Validator                                     = require('body-validator');
const {sequelize,Personnel,Partenaire,Organisation} = require('../config/db'); 
const fs                                            = require('fs/promises');
const utilisateurService                            = require('../services/utilisateur.service');
const bcrypt                                        = require("bcrypt");

module.exports={
    index:async (req,res)=>{
        message_alerte_authent = req.params.message
        res.render('Authentification/connexion_admin',{
            message_alerte_authent
        });
    },
    create_new_mdp:async (req,res)=>{
        delete req.params
        let BodyRequest = req.body,
            msg_err_new_mdp 
 
        if(BodyRequest.new_mdp == BodyRequest.mdp_confirm){
 
             let user = await utilisateurService.recuperation_id_mdp_oublie(BodyRequest.pseudo),
                 ancien_mdp = ( user != '') ? user[0].mot_de_passe : ''
 
             if(await bcrypt.compare(BodyRequest.mdp, ancien_mdp) == true){
                 if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{10,}$/.test(BodyRequest.new_mdp)) {  
                     msg_err_new_mdp = 'Le mot de passe doit être composé de 10 caractères; avoir au moins une lettre majuscule, une lettre miniscule, un chiffre, et un caractère special.'
                     res.redirect('/enregister_modif_mdp/'+ msg_err_new_mdp);
                 }else{
                     await utilisateurService.create_new_mdp_(BodyRequest)
                     res.redirect('/');
                 }
             }else{
                 msg_err_new_mdp = 'Pseudo ou mot de passe introuvable'
                 res.redirect('/enregister_modif_mdp/'+ msg_err_new_mdp);
             }
        }else{
             msg_err_new_mdp = 'Les deux nouveaux mots de passe ne correspondent pas'
             res.redirect('/enregister_modif_mdp/'+ msg_err_new_mdp);
        }
     },
    mdp_oublie:async (req,res)=>{
        res.render('Authentification/mdp_oublie',{
            msg_echec_recup_mdp : req.params.msg_echec_recup_mdp
        });
    },
    enregister_modif_mdp:async (req,res)=>{
        
        res.render('Authentification/changement_mot_de_passe',{
            msg:req.params.msg_err_new_mdp
        });
    },
    authentification_admin : async(req,res)=>{
        try {
            delete req.params
            let pseudo_   = req.body.Pseudo,
                mdp_      = req.body.mdp,
                message   = '',
                partenaire=req.body.id_national
            
            if(typeof pseudo_ !== 'undefined' && typeof mdp_ !== 'undefined' && typeof partenaire !== 'undefined' ) {
                let utilisateur= await utilisateurService.check_pseudo_mdp_admin_plat(pseudo_,partenaire),
                    connexion1 = await utilisateurService.connexion_administrateur(pseudo_,partenaire)

                let connexion = '',
                    mdp=''

                if(connexion1 != '' ){
                    mdp = connexion1[0].mdp
                }
                
                if(await bcrypt.compare(mdp_,mdp) == true){
                    connexion = connexion1
                }

                if(connexion == ''){
                    message = 'Coordonnées introuvables'
                    res.redirect('/administrateur/'+ message)
                }else{
                    if(utilisateur[0].typee == 6){
                        if(utilisateur[0].etat_mdp == 1){
                            req.session.org       = utilisateur[0].id_o
                            req.session.pseudo    = pseudo_
                            req.session.mdp       = mdp_
                            req.session.id_compte = utilisateur[0].id
                            req.session.id_nat    = partenaire
                            if(req.body.Pseudo) await utilisateurService.create_connexion(req.session.id_compte)
                                
                            res.redirect('/actualisation/'+ connexion1)
                        } else res.render('Authentification/changement_mot_de_passe')
                    }
                }
            }else{
                message = 'L\'un des champs n\'est pas rempli'
                res.redirect('/administrateur/'+ message)
            }
        } catch (error) {
            res.send('Erreur : '+ error)
        }
    },
    actualisation : async(req,res)=>{  
        //if(typeof req.session.org !== 'undefined' && typeof req.session.pseudo !== 'undefined' && typeof req.session.mdp !== 'undefined' && typeof req.session.id_compte !== 'undefined')  {
            try {
                let connexion = req.params.connexion1
                if(!connexion) connexion = await utilisateurService.connexion_administrateur(req.session.pseudo,req.session.id_nat)
                res.render('home',{
                    photo : connexion
                });

            } catch (error) {
                res.send('Erreur : '+ error)
            }
        /*}else{
            res.redirect('/')
        }*/
    },
    changer_mdp: async (req, res)=> {
         try {
            let erreur = req.params.erreur
            if(erreur){
                res.json({erreur})
            }else res.render('Authentification/changement_mot_de_passe')
        } catch (error) {
            res.send('Erreur '+ error)
        }
    },
    deconnexion : async (req, res)=> {
        try {
            if(req.session.id_compte){
                await utilisateurService.deconnexion_simple_user(req.session.id_compte)
                
                delete req.session.pseudo
                delete req.session.org
                delete req.session.mdp
                delete req.session.id_compte
            }
            res.redirect('/administrateur')
        } catch (error) {
            res.send('Erreur '+error)
        }
    },
    traitement_deconnexion : async (req,res)=>{
        try {
            let pseudo_session =  req.session.pseudo,
                hopital_session = req.session.hopital,
                id_compte_session = req.session.id_compte
            if(typeof pseudo_session !== 'undefined' && typeof hopital_session !== 'undefined' && typeof id_compte_session !== 'undefined')  {

                req.session.jour = new Date().getDate()
                req.session.heure = new Date().getHours()
                req.session.min = new Date().getMinutes()

              //  if(req.body.jour_ == req.session.jour){
                    res.send('Hello')
                //}


            }else{
                res.redirect('/administrateur')
            }
        } catch (error) {
            res.send("erreur :"+ error)
        }
    }
}
