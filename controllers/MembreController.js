const bcrypt         = require('bcrypt');
const Validator      = require('body-validator');
const membreService  = require("../services/membre.service");
const {sequelize}    = require('../config/db');
const personnelServices = require('../services/personnel.service');
const helperServices = require('../helper/helper');

module.exports={
    all_part:async (req,res)=>{
        if(typeof req.session.org !== 'undefined' && typeof req.session.pseudo !== 'undefined' && typeof req.session.mdp !== 'undefined' && typeof req.session.id_compte !== 'undefined')  {
            try {
                res.json({ result: await membreService.all_part(req.session.org) });
            } catch (error) {
                res.send('Erreur '+ error)
            }
        }else{
            res.json({result : 'deconnexion'});
        }       
    },
    find_membre:async (req,res)=>{
        if(typeof req.session.org !== 'undefined' && typeof req.session.pseudo !== 'undefined' && typeof req.session.mdp !== 'undefined' && typeof req.session.id_compte !== 'undefined')  {
            try {
                res.json({ response: await membreService.on_membre_by_member(req.body,req.session.org) });
            } catch (error) {
                res.send('Erreur '+ error)
            }
        }else{
            res.json({result : 'deconnexion'});
        }       
    },
    store:async (req,res)=>{
        if(typeof req.session.org !== 'undefined' && typeof req.session.pseudo !== 'undefined' && typeof req.session.mdp !== 'undefined' && typeof req.session.id_compte !== 'undefined')  {
            try {
                res.json({ result: await membreService.create(req.body,req.session.org) });
            } catch (error) {
                res.send('Erreur '+ error)
            }
        }else{
            res.json({result : 'deconnexion'});
        } 
    },
    rep_membre:async (req,res)=>{
        if(typeof req.session.org !== 'undefined' && typeof req.session.pseudo !== 'undefined' && typeof req.session.mdp !== 'undefined' && typeof req.session.id_compte !== 'undefined')  {
            try {
                res.json({ result: await membreService.rep_membre(req.session.org) });
            } catch (error) {
                res.send('Erreur '+ error)
            }
        }else{
            res.json({result : 'deconnexion'});
        } 
    },
    rep_nationalite:async (req,res)=>{
        if(typeof req.session.org !== 'undefined' && typeof req.session.pseudo !== 'undefined' && typeof req.session.mdp !== 'undefined' && typeof req.session.id_compte !== 'undefined')  {
            try {
                res.json({ result: await membreService.rep_nationalite() });
            } catch (error) {
                res.send('Erreur '+ error)
            }
        }else{
            res.json({result : 'deconnexion'});
        } 
    },
    rep_etat:async (req,res)=>{
        if(typeof req.session.org !== 'undefined' && typeof req.session.pseudo !== 'undefined' && typeof req.session.mdp !== 'undefined' && typeof req.session.id_compte !== 'undefined')  {
            try {
                res.json({ result: await membreService.rep_etat() });
            } catch (error) {
                res.send('Erreur :'+ error)
            }
        }else{
            res.json({result : 'deconnexion'});
        }
    },
    on_membre:async (req,res)=>{
        if(typeof req.session.org !== 'undefined' && typeof req.session.pseudo !== 'undefined' && typeof req.session.mdp !== 'undefined' && typeof req.session.id_compte !== 'undefined')  {
            try {
                res.json({ result: await membreService.on_membre(req.body) });
            } catch (error) {
                res.send('Erreur :'+ error)
            }
        }else{
            res.json({result : 'deconnexion'});
        }
    },
    update:async (req,res)=>{
        if(typeof req.session.org !== 'undefined' && typeof req.session.pseudo !== 'undefined' && typeof req.session.mdp !== 'undefined' && typeof req.session.id_compte !== 'undefined')  {
            try {
                let dataRequest = req.body,
                    erreur=[]

                if(helperServices.presence(dataRequest.prenom)) erreur.push('Merci de remplir le champ Prénom')
                    else{
                        if(helperServices.taille(dataRequest.prenom,15)) erreur.push('La taille du prénom doit être inférieure ou égale à 15')
                        else{
                            if(helperServices.letter_beginning(dataRequest.prenom)) erreur.push('Le prénom doit commencer par une lettre')
                            else{
                                if(helperServices.letter_beginning(dataRequest.nom)) erreur.push('Le nom doit commencer par une lettre')
                                else{
                                    if(helperServices.presence(dataRequest.nom)) erreur.push('Merci de remplir le champ Nom')
                                    else{
                                        if(helperServices.taille(dataRequest.nom,15)) erreur.push('La taille du prénom doit être inférieure ou égale à 15')
                                        else{
                                            if(helperServices.letter_beginning(dataRequest.postnom)) erreur.push('Le postnom doit commencer par une lettre')
                                            else{
                                                if(helperServices.taille(dataRequest.postnom,15)) erreur.push('La taille du postnom doit être inférieure ou égale à 15')
                                                else{
                                                    if(helperServices.presence(dataRequest.postnom)) erreur.push('Merci de remplir le champ Postnom')
                                                    else{
                                                        if(helperServices.presence(dataRequest.adresse_physique)) erreur.push('Merci de remplir le champ Adresse physique')
                                                        else{
                                                            if(helperServices.taille(dataRequest.adresse_physique,30)) erreur.push('La taille de l\'adresse doit être inférieure ou égale à 30')
                                                            else{
                                                                if(helperServices.presence(dataRequest.date_naissance)) erreur.push('Merci de remplir le champ Date de naissance')
                                                                else{
                                                                    if(helperServices.presence(dataRequest.telephone)) erreur.push('Merci de remplir le champ Téléphone')    
                                                                    else{
                                                                        if(helperServices.presence(dataRequest.email)) erreur.push('Merci de remplir le champ Adresse Electronique')
                                                                        else{
                                                                            if(helperServices.email(dataRequest.email)) erreur.push('Adresse Electronique incorrecte') 
                                                                            else{
                                                                                if(helperServices.date_valid(dataRequest.date_naissance)) erreur.push('L\'utilisateur est mineur')     
                                                                                else{
                                                                                    if(helperServices.presence(dataRequest.lieu_naissance)) erreur.push('Merci de remplir le champ Lieu de naissance')
                                                                                    else{
                                                                                        if(helperServices.taille(dataRequest.lieu_naissance,15)) erreur.push('Le champ Lieu de naissance doit avoir une taille inférieure ou égale à 15')
                                                                                        else{
                                                                                            if(helperServices.letter_beginning(dataRequest.lieu_naissance)) erreur.push('Le lieu de naissance doit commencer par une lettre')
                                                                                            else{
                                                                                                if(helperServices.content_letter(dataRequest.adresse_physique)) erreur.push('L\'adresse physique doit comporter au moins une lettre ')
                                                                                                else{
                                                                                                    if(await personnelServices.check_email_update(dataRequest.email,dataRequest.id) !='' ) erreur.push('Cette adresse électronique a déjà été utilisée ')
                                                                                                    else{
                                                                                                        if(await personnelServices.check_telephone_update(dataRequest.telephone,dataRequest.id) !='' ) erreur.push('Ce numéro de téléphone a déjà été utilisé')
                                                                                                        else{
                                                                                                            if(helperServices.valid_telephone(dataRequest.telephone)) erreur.push('Le numéro de téléphone doit être saisi sous format +243XXXXXXXXX')
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                        
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
               
                if(erreur==''){
                    res.json({ 
                        result: await membreService.update(req.body,req.session.id_compte ) 
                    });
                }else{
                    res.json({ 
                        result: erreur
                    });
                } 
            } catch (error) {
                res.send('Erreur :'+ error)
            }
        }else{
            res.json({result : 'deconnexion'});
        }
    },
    bannir:async (req,res)=>{
        if(typeof req.session.org !== 'undefined' && typeof req.session.pseudo !== 'undefined' && typeof req.session.mdp !== 'undefined' && typeof req.session.id_compte !== 'undefined')  {
            try {
                res.json({ result: await membreService.bannir(req.body,req.session.org,req.session.id_compte) });
            } catch (error) {
                res.send('Erreur :'+ error)
            }
        }else{
            res.json({result : 'deconnexion'});
        }
    }
}