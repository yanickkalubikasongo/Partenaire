require('dotenv').config();
const bodyParser = require('body-parser')
const {sequelize} = require('../config/db');
const helperServices = require('../helper/helper');
const personnelServices = require('../services/personnel.service');

module.exports={
    enreg_personnel: async (req, res)=> {
        if(typeof req.session.org !== 'undefined' && typeof req.session.pseudo !== 'undefined' && typeof req.session.mdp !== 'undefined' && typeof req.session.id_compte !== 'undefined')  {
            try {
                
                let file = ''
                
                if(req.files) file = req.files.photo;
                else file = ''
                
                let dataRequest = req.body,
                    erreur=[]

                if(helperServices.presence(dataRequest.prenom)) erreur.push('Merci de saisir le prénom')
                else{
                    if(helperServices.taille(dataRequest.prenom,15)) erreur.push('La taille du prénom doit être inférieure ou égale à 15')
                    else{
                        if(helperServices.letter_beginning(dataRequest.prenom)) erreur.push('Le prénom doit commencer par une lettre')
                        else{
                            if(helperServices.presence(dataRequest.prenom)) erreur.push('Merci de saisir le nom')
                                else{
                                    if(helperServices.taille(dataRequest.prenom,15)) erreur.push('La taille du nom doit être inférieure ou égale à 15')
                                    else{
                                        if(helperServices.letter_beginning(dataRequest.prenom)) erreur.push('Le nom doit commencer par une lettre')
                                            else{
                                                if(helperServices.presence(dataRequest.postnom)) erreur.push('Merci de saisir le postnom')
                                                    else{
                                                        if(helperServices.taille(dataRequest.postnom,15)) erreur.push('La taille du postnom doit être inférieure ou égale à 15')
                                                        else{
                                                            if(helperServices.letter_beginning(dataRequest.postnom)) erreur.push('Le postnom doit commencer par une lettre')
                                                            else{
                                                                if(helperServices.presence(dataRequest.province)) erreur.push('Merci de choisir la province')
                                                                    else{
                                                                        if(helperServices.presence(dataRequest.sexe)) erreur.push('Merci de choisir la sexe')
                                                                            else{
                                                                                if(helperServices.presence(dataRequest.adresse)) erreur.push('Merci de saisir l\'adresse')
                                                                                else{
                                                                                    if(helperServices.taille(dataRequest.adresse,30)) erreur.push('La taille du postnom doit être inférieure ou égale à 30')
                                                                                    else{
                                                                                        if(helperServices.presence(dataRequest.date_naissance)) erreur.push('Merci de saisir la date de naissance')
                                                                                        else{
                                                                                            if(helperServices.presence(dataRequest.telephone)) erreur.push('Merci de saisir le numéro de téléphone')
                                                                                            else{
                                                                                                if(helperServices.email(dataRequest.email)) erreur.push('Adresse éléctronique incorrecte')
                                                                                                    else{
                                                                                                        if(helperServices.presence(dataRequest.email)) erreur.push('Merci de saisir l\'adresse éléctronique')
                                                                                                        else{
                                                                                                            if(helperServices.presence(dataRequest.lieu_naissance)) erreur.push('Merci de saisir le lieu de naissance')
                                                                                                            else{
                                                                                                                if(helperServices.letter_beginning(dataRequest.lieu_naissance)) erreur.push('Le lieu de naissance doit commencer par une lettre')
                                                                                                                else{
                                                                                                                    if(helperServices.presence(dataRequest.photo)) erreur.push('Merci de rentrer la photo')
                                                                                                                    if(helperServices.presence(dataRequest.piece)) erreur.push('Merci de choisir la pièce d\'identité')
                                                                                                                    if(helperServices.presence(dataRequest.etat_civil)) erreur.push('Merci de choisir l\'état civil')
                                                                                                                    else{
                                                                                                                        if(helperServices.letter_beginning(dataRequest.lieu_naissance)) erreur.push('Le lieu de naissance doit commencer par une lettre')
                                                                                                                        else{
                                                                                                                            if(helperServices.presence(dataRequest.numero_piece)) erreur.push('La saisie du numéro de pièce d\'identité est obligatoire')
                                                                                                                            else{
                                                                                                                                if(await personnelServices.check_email(dataRequest.email) !='' ) erreur.push('Cette adresse email est déjà utilisé ')
                                                                                                                                else{
                                                                                                                                    if(await personnelServices.check_telephone(dataRequest.telephone) !='' ) erreur.push('Ce numéro de téléphone est déjà utilisé')
                                                                                                                                    else{
                                                                                                                                        if(helperServices.valid_telephone(dataRequest.telephone)) erreur.push('Le numéro de téléphone saisi n\'est pas valide')
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
                    }
                }
                if(erreur==''){
                    let send_personnel = await personnelServices.enregistrer_personnel(req.body,file,req.session.org)
                    if(send_personnel == 1){
                        erreur.push('Solde USD insuffisant')
                        res.json({
                            reponse: erreur
                        });
                    }else{
                        if(send_personnel == 2){
                            erreur.push('Solde CDF insuffisant')
                            res.json({
                                reponse: erreur
                            });
                        }else{
                            if(send_personnel == 3){
                                erreur.push('Solde EUR insuffisant')
                                res.json({
                                    reponse: erreur
                                });
                            }else{
                                if(send_personnel == 4){
                                    erreur.push('Solde USD, EUR et CDF insuffisants')
                                    res.json({
                                        reponse: erreur
                                    });
                                }else{
                                    if(send_personnel == 5){
                                        erreur.push('Votre structure n\'a pas de compte monnaie')
                                        res.json({
                                            reponse: erreur
                                        });
                                    }else{
                                        res.json({
                                            reponse: 'r'
                                        });
                                    }
                                }
                            }
                        }
                    }
                }else{
                    res.json({
                        reponse: erreur
                    });
                }
            } catch (error) {
                res.send('Erreur '+ error)
            }
        }else{
            res.json({result : 'deconnexion'});
        }   
    },
    rep_personnel: async (req, res)=> {
        if(typeof req.session.org !== 'undefined' && typeof req.session.pseudo !== 'undefined' && typeof req.session.mdp !== 'undefined' && typeof req.session.id_compte !== 'undefined')  {
            try {
                res.json({
                            result: await personnelServices.rep_personnel(req.body)
                });
            } catch (error) {
                res.send('Erreur '+ error)
            }
        }else{
            res.json({result : 'deconnexion'});
        }       
    },
    on_personnel: async (req, res)=> {
        if(typeof req.session.org !== 'undefined' && typeof req.session.pseudo !== 'undefined' && typeof req.session.mdp !== 'undefined' && typeof req.session.id_compte !== 'undefined')  {
            try {
                res.json({
                        result: await personnelServices.on_personnel(req.body)
                });
            } catch (error) {
                res.send('Erreur '+ error)
            }
        }else{
            res.json({result : 'deconnexion'});
        } 
            
    },
    update_personnel: async (req, res)=> {
        if(typeof req.session.org !== 'undefined' && typeof req.session.pseudo !== 'undefined' && typeof req.session.mdp !== 'undefined' && typeof req.session.id_compte !== 'undefined')  {
            try {
                res.json({
                    result: await personnelServices.update_personnel(req.body)
                });
            } catch (error) {
                res.send('Erreur '+ error)
            }
        }else{
            res.json({result : 'deconnexion'});
        }      
    },
    profil_user: async (req, res)=> {
        if(typeof req.session.pseudo !== 'undefined' && typeof req.session.org !== 'undefined' && typeof req.session.mdp !== 'undefined' && typeof req.session.id_compte !== 'undefined')  {
            try {

                let dataRequest = req.body,
                    erreur=[]
                
                if(helperServices.presence(dataRequest.adresse_electronique)) erreur.push('Merci de saisir l\'adresse électronique')
                else{
                    if(helperServices.presence(dataRequest.adresse_physique)) erreur.push('Merci de saisir l\'adresse physique')
                    else{
                        if(helperServices.presence(dataRequest.telephone)) erreur.push('Merci de saisir le numéro de téléphone')
                        else{
                            if(helperServices.email(dataRequest.adresse_electronique) ) erreur.push('L\'adresse électronique saisie est incorrecte')
                            else{
                                if(await personnelServices.check_email_profil(dataRequest.adresse_electronique,req.session.id_compte) !='') erreur.push('L\'adresse électronique saisie existe déjà')
                                else{
                                    if(await personnelServices.check_telephone_profil(dataRequest.telephone,req.session.id_compte) !='') erreur.push('Le numéro de téléphone saisi existe déjà')
                                    else{
                                        if(helperServices.valid_telephone(dataRequest.telephone) !='') erreur.push('Le numéro de téléphone doit être saisi sous format +243XXXXXXXXX')
                                    }
                                }
                            }
                        }
                    }
                }
                
                res.json({
                    result:  erreur == '' ? await personnelServices.update_profil_user(dataRequest,req.session.id_compte) : erreur
                });
            
            } catch (error) {
                res.send('Erreur '+ error)
            }
        }else{
            res.json({result : 'deconnexion'});
        }
    }
}
