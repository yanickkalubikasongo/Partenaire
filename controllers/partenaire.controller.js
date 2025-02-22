require('dotenv').config();
const bodyParser = require('body-parser')
const {sequelize} = require('../config/db');
const partenaireServices = require('../services/partenaire.service');
const agenceServices = require('../services/agence.service');
const personnelServices = require('../services/personnel.service');
const helperServices    = require('../helper/helper');

module.exports={
    tableau_bord: async (req, res)=> {
        if(typeof req.session.org !== 'undefined' && typeof req.session.pseudo !== 'undefined' && typeof req.session.mdp !== 'undefined' && typeof req.session.id_compte !== 'undefined')  {
            try {  
                let prix_im = await agenceServices.select_price_im()

                 res.json({
                    result1: await partenaireServices.membre_actif(req.session.org),
                    result2: parseInt(await partenaireServices.max_membre(req.session.org)) - parseInt(await partenaireServices.membre_actif(req.session.org)),
                    result3: await partenaireServices.solde_partenaire(req.session.org,'CDF'),
                    result4: await partenaireServices.solde_partenaire(req.session.org,'USD'),
                    result8: await partenaireServices.solde_partenaire(req.session.org,'EUR'),
                    result5: (parseFloat(await partenaireServices.solde_partenaire(req.session.org,'USD')) / parseFloat(prix_im[0].prix_im_usd)) <= 0 ? 0 : (parseFloat(await partenaireServices.solde_partenaire(req.session.org,'USD')) / prix_im[0].prix_im_usd),
                    result6: (parseFloat(await partenaireServices.solde_partenaire(req.session.org,'CDF')) / parseFloat(prix_im[0].prix_im_cdf)) <= 0 ? 0 : (parseFloat(await partenaireServices.solde_partenaire(req.session.org,'CDF')) / prix_im[0].prix_im_cdf),
                    result7: (parseFloat(await partenaireServices.solde_partenaire(req.session.org,'EUR')) / parseFloat(prix_im[0].prix_im_cdf)) <= 0 ? 0 : (parseFloat(await partenaireServices.solde_partenaire(req.session.org,'EUR')) / prix_im[0].prix_im_usd),
                    adhesion_janvier_mars: await partenaireServices.adhesion_janvier_mars(req.session.org),
                    adhesion_avril_juin: await partenaireServices.adhesion_avril_juin(req.session.org),
                    adhesion_juillet_septembre: await partenaireServices.adhesion_juillet_septembre(req.session.org),
                    adhesion_octobre_decembre: await partenaireServices.adhesion_octobre_decembre(req.session.org)
                });
            } catch (error) {
                res.send('Erreur '+ error)
            }
        }else{
            res.json({result : 'deconnexion'});
        }
    },
    update_partner: async (req, res)=> {
        if(typeof req.session.org !== 'undefined' && typeof req.session.pseudo !== 'undefined' && typeof req.session.mdp !== 'undefined' && typeof req.session.id_compte !== 'undefined')  {
            try {
                let bodyRequest = req.body,
                    erreur=[],
                    file = ''
                
                if(req.files) file = req.files.document;
                else file = ''

                if(await personnelServices.check_email_profil(bodyRequest.email,req.session.org) !='' ) erreur.push('Cette adresse email est déjà utilisée')
                else{
                    if(await personnelServices.check_telephone_profil(bodyRequest.telephone,req.session.org) !='' ) erreur.push('Ce numéro de téléphone est déjà utilisé')
                    else{
                        if(helperServices.presence(bodyRequest.denomination)) erreur.push('Merci de saisir la denomination')
                        else{
                            if(helperServices.presence(bodyRequest.id_national)) erreur.push('Merci de saisir l\'identifiant national')
                            else{
                                if(helperServices.presence(bodyRequest.rccm)) erreur.push('Merci de saisir le rccm')
                                else{
                                    if(helperServices.presence(bodyRequest.telephone)) erreur.push('Merci de saisir le rccm')
                                    else{
                                        if(helperServices.presence(bodyRequest.email)) erreur.push('Merci de saisir l\'adresse email')
                                        else{
                                            if(helperServices.presence(bodyRequest.adresse_physique)) erreur.push('Merci de saisir l\'adresse physique')
                                            else{
                                                if(await partenaireServices.check_email_partenaire(bodyRequest.email,req.session.org) !='') erreur.push('Cette adresse électronique a dajà été utilisé')
                                                else{
                                                    if(await partenaireServices.check_id_national_partenaire(bodyRequest.id_national,req.session.org) !='') erreur.push('Cet ID national a déjà été utilisé')
                                                    else{
                                                        if(await partenaireServices.check_rccm_partenaire(bodyRequest.rccm,req.session.org) !='') erreur.push('Ce RCCM a déjà été utilisé')
                                                        else{
                                                            if(await partenaireServices.check_telephone_partenaire(bodyRequest.telephone,req.session.org) !='') erreur.push('Ce numéro de téléphone a déjà été utilisé')
                                                            else{
                                                                if(helperServices.valid_telephone(bodyRequest.telephone) !='') erreur.push('Ce numéro de téléphone doit être saisi sous format +243XXXXXXXXX')
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
                    res.json({result:await partenaireServices.update_partner(bodyRequest,req.session.org,file,req.session.id_compte)});
                }else{
                    res.json({
                        result: erreur
                    });
                }
            }
            catch (error) {
                res.send('Erreur '+ error)
            }
        }else{
            res.json({result : 'deconnexion'});
        }
    },
    enreg_partenaire: async (req, res)=> {
        if(typeof req.session.org !== 'undefined' && typeof req.session.pseudo !== 'undefined' && typeof req.session.mdp !== 'undefined' && typeof req.session.id_compte !== 'undefined')  {
            try {
                res.json({
                        reponse: await partenaireServices.enregistrer_partenaire(req.body)
                });
            }
            catch (error) {
                res.send('Erreur '+ error)
            }
        }else{
            res.json({result : 'deconnexion'});
        }
    },
    find_gerant: async (req, res)=> {
        if(typeof req.session.org !== 'undefined' && typeof req.session.pseudo !== 'undefined' && typeof req.session.mdp !== 'undefined' && typeof req.session.id_compte !== 'undefined')  {
            try {
                res.json({
                    reponse: await partenaireServices.find_gerant(req.body)
                });
            } catch (error) {
                res.send('Erreur '+ error)
            }
        }else{
            res.json({result : 'deconnexion'});
        }
    },
    rep_partenaire: async (req, res)=> {
        if(typeof req.session.org !== 'undefined' && typeof req.session.pseudo !== 'undefined' && typeof req.session.mdp !== 'undefined' && typeof req.session.id_compte !== 'undefined')  {
            try {
                res.json({
                    rep: await partenaireServices.rep_part()
                });
            } catch (error) {
                res.send('Erreur '+ error)
            }
        }else{
            res.json({result : 'deconnexion'});
        }
    }
}
