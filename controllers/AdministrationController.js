require('dotenv').config();
const bodyParser = require('body-parser')
const {sequelize} = require('../config/db');
const utilisateurService = require('../services/utilisateur.service');
const administrationService = require('../services/administration.service');


module.exports={
    journal_connexion: async (req, res)=> {
        try {
            let pseudo_session_admin =  req.session.pseudo,
                hopital_session_admin =  req.session.hp,
                mdp_session_admin = req.session.mdp,
                id_compte_session = req.session.id_compte
            if(typeof pseudo_session_admin !== 'undefined' && typeof hopital_session_admin !== 'undefined' && typeof mdp_session_admin !== 'undefined' && typeof id_compte_session !== 'undefined')  {
                
                let type_user = await utilisateurService.check_pseudo_mdp_admin_plat(pseudo_session_admin,mdp_session_admin),
                    admin = ''

                if(type_user[0].typee == 'Admin-hop') admin = true
                else admin = false

                res.render('Utilisateur/journal_connexion', {
                    journal_connexion_ : await administrationService.journal_connexion(req.session.hp ),
                    droits : await droitService.get_liste_droit("'"+req.session.hp+"'" ,"'"+req.session.id_compte+"'"),
                    admin
                });
            }else{
                res.redirect("/administrateur")
            }
        } catch (error) {
            res.send('Erreur '+ error)
        }
    },
    journal_connexion_adm: async (req, res)=> {
        try {
            let pseudo_session_admin =  req.session.pseudo,
                hopital_session_admin =  req.session.hp,
                mdp_session_admin = req.session.mdp,
                id_compte_session = req.session.id_compte
            if(typeof pseudo_session_admin !== 'undefined' && typeof hopital_session_admin !== 'undefined' && typeof mdp_session_admin !== 'undefined' && typeof id_compte_session !== 'undefined')  {
               
                res.render('Utilisateur/journal_connexion_adm', {
                    droits : await droitService.get_liste_droit(req.session.hp,req.session.id_compte),
                    hop : await hopitalService.get_liste_hopital(),
                    voir_profil_admin : 'voir',
                    role : await roleService.get_liste_role(),
                    compte : await utilisateurService.repertoire_comptes_espace_platforme(),
                    journal_connexion_ : await administrationService.journal_connexion_adm(),
                    id : req.session.id_compte 
                });
            }else{
                res.redirect("/administrateur")
            }
        } catch (error) {
            res.send('Erreur '+ error)
        }
    },
    voir_profil_simple_utilisateur : async (req, res)=> {
        try {
            let pseudo_session_admin =  req.session.pseudo,
                hopital_session_admin =  req.session.hp,
                mdp_session_admin = req.session.mdp,
                id_compte_session = req.session.id_compte
            if(typeof pseudo_session_admin !== 'undefined' && typeof hopital_session_admin !== 'undefined' && typeof mdp_session_admin !== 'undefined' && typeof id_compte_session !== 'undefined')  {
               
                res.render('Utilisateur/vision_profile_simple_user', {
                    cmt_ : await administrationService.vision_profile_adm_plat(req.session.id_compte,req.session.hp),
                    droits : await droitService.get_liste_droit("'"+req.session.hp+"'","'"+req.session.id_compte+"'"),
                    service_ : await utilisateurService.get_services_compte(hopital_session_admin,pseudo_session_admin),
                    admin : await utilisateurService.check_pseudo_mdp_admin_plat(pseudo_session_admin,mdp_session_admin),
                    voir_profil_user : 'voir_profil_user',
                    etat_hopital : await hopitalService.check_etat_hopital(pseudo_session_admin),
                    voir : 'voir'
                 });
            }else{
                res.redirect("/administrateur")
            }
        } catch (error) {
            res.send('Erreur '+ error)
        }
    },
    voir_profil_adm_hopital : async (req, res)=> {
        try {
            let pseudo_session_admin =  req.session.pseudo,
                hopital_session_admin =  req.session.hp,
                mdp_session_admin = req.session.mdp,
                id_compte_session = req.session.id_compte
            if(typeof pseudo_session_admin !== 'undefined' && typeof hopital_session_admin !== 'undefined' && typeof mdp_session_admin !== 'undefined' && typeof id_compte_session !== 'undefined')  {
                
                let type_user = await utilisateurService.check_pseudo_mdp_admin_plat(pseudo_session_admin,mdp_session_admin),
                admin = ''

                if(type_user[0].typee == 'Admin-hop') admin = true
                else admin = false
                
                res.render('Utilisateur/vision_profile_simple_user', {
                    cmt_ : await administrationService.vision_profile (req.session.hp,req.session.id_compte),
                    droits : await droitService.get_liste_droit(req.session.hp,req.session.id_compte),
                    service_ : await serviceServices.get_liste_service(req.session.hp,req.session.pseudo),
                    voir : 'voir',
                    admin
                });

            }else{
                res.redirect("/administrateur")
            }
        } catch (error) {
            res.send('Erreur '+ error)
        }
    },
    voir_profil_user_hopital : async (req, res)=> {
        try {
            let pseudo_session_admin =  req.session.pseudo,
                hopital_session_admin =  req.session.hp,
                mdp_session_admin = req.session.mdp,
                id_compte_session = req.session.id_compte
            if(typeof pseudo_session_admin !== 'undefined' && typeof hopital_session_admin !== 'undefined' && typeof mdp_session_admin !== 'undefined' && typeof id_compte_session !== 'undefined')  {
          
                const hopital = await hopitalService.check_etat_hopital(pseudo_session_admin)
                let type_user = await utilisateurService.check_pseudo_mdp_admin_plat(pseudo_session_admin,mdp_session_admin),
                    admin = ''

                if(type_user[0].typee == 'Admin-hop') admin = true
                else admin = false
                
                res.render('Utilisateur/vision_profile_adm_plateforme',{
                    comptes : await utilisateurService.repertoire_comptes_espace_hopital(req.session.hp),
                    droits : await droitService.get_liste_droit("'"+hopital_session_admin+"'","'"+req.session.id_compte+"'"),
                    cmt_ : await administrationService.vision_profile_adm_plat(req.body.num_compte,hopital_session_admin),
                    voir_profil_admin : 'voir',
                    admin,
                    entite : 'hopital',
                    etat_hopital : await hopitalService.check_etat_hopital(pseudo_session_admin),
                    id : req.session.id_compte
                }); 
            }else{
                res.redirect("/administrateur")
            }
        } catch (error) {
            res.send('Erreur '+ error)
        }
    },
    voir_profil_adm_platforme : async (req, res)=> {
        try {
            let pseudo_session_admin =  req.session.pseudo,
                hopital_session_admin =  req.session.hp,
                mdp_session_admin = req.session.mdp,
                id_compte_session = req.session.id_compte
            if(typeof pseudo_session_admin !== 'undefined' && typeof hopital_session_admin !== 'undefined' && typeof mdp_session_admin !== 'undefined' && typeof id_compte_session !== 'undefined')  {
                let num_compte = '',
                    hopital = '',
                    voir_lien_modification = ''
                if(req.body.num_hopital && req.body.num_compte){ // vision profil à partir du repertoire des comptes coté administrateur plateforme
                    num_compte = req.body.num_compte
                    hopital = req.body.num_hopital
                    voir_lien_modification = false
                }else{
                    num_compte = req.session.id_compte
                    hopital = req.session.hp
                    voir_lien_modification = true
                }

                let type_user = await utilisateurService.check_pseudo_mdp_admin_plat(pseudo_session_admin,mdp_session_admin),
                    admin = ''

                if(type_user[0].typee == 'Admin-hop') admin = true
                else admin = false

                res.render('Utilisateur/vision_profile_adm_plateforme', {
                    cmt_ : await administrationService.vision_profile_adm_plat(num_compte,hopital),
                    droits : await droitService.get_liste_droit(req.session.hp,req.session.id_compte),
                    hop : await hopitalService.get_liste_hopital(),
                    voir_profil_admin : 'voir',
                    role : await roleService.get_liste_role(),
                    voir_lien_modification,
                    compte : await utilisateurService.repertoire_comptes_espace_platforme(),
                    voir_menu_admin : 'voir',
                    admin,
                    id : req.session.id_compte 
                });
            }else{
                res.redirect("/administrateur")
            }
        } catch (error) {
            res.send('Erreur '+ error)
        }
    },
    modification_profile_adm : async (req, res)=> {
        try {
            let pseudo_session_admin =  req.session.pseudo,
                hopital_session_admin =  req.session.hp,
                mdp_session_admin = req.session.mdp,
                id_compte_session = req.session.id_compte
            if(typeof pseudo_session_admin !== 'undefined' && typeof hopital_session_admin !== 'undefined' && typeof mdp_session_admin !== 'undefined' && typeof id_compte_session !== 'undefined')  {
                
                let type_user = await utilisateurService.check_pseudo_mdp_admin_plat(pseudo_session_admin,mdp_session_admin),
                    admin = ''

                if(type_user[0].typee == 'Admin-hop') admin = true
                else admin = false
                
                res.render('Utilisateur/vision_profile_adm_plateforme', {
                    cmt_ : await administrationService.vision_profile_adm_plat(req.session.id_compte,hop),
                    droits : await droitService.get_liste_droit(req.session.hp,req.session.id_compte),
                    modifier_profile : 'modifier profil',
                    hop : await hopitalService.get_liste_hopital(),
                    message,
                    id :  req.session.id_compte,
                    admin,
                    modifier_profile_admin
                });
            }else{
                res.redirect("/administrateur")
            }
        } catch (error) {
            res.send('Erreur '+ error)
        }
    },
    modifier : async (req, res)=> {
        try {
            let pseudo_session_admin =  req.session.pseudo,
                hopital_session_admin =  req.session.hp,
                mdp_session_admin = req.session.mdp,
                id_compte_session = req.session.id_compte
            if(typeof pseudo_session_admin !== 'undefined' && typeof hopital_session_admin !== 'undefined' && typeof mdp_session_admin !== 'undefined' && typeof id_compte_session !== 'undefined')  {
     
                res.render('Utilisateur/vision_profile_adm_plateforme', {
                    cmt_ : await administrationService.vision_profile_adm_plat(req.session.id_compte,hopital_session_admin),
                    droits : await droitService.get_liste_droit(req.session.hp,req.session.id_compte),
                    modifier_profile : 'modifier profil',
                    hop : await hopitalService.get_liste_hopital(),
                    compte : await utilisateurService.liste_compte(),
                    modifier_profile_admin : 'voir_form_modification',
                    role : await roleService.get_liste_role(),
                    id :  req.session.id_compte,
                    service_ : await serviceServices.get_liste_service(req.session.hp,req.session.pseudo),
                    voir : 'voir'
                });

            }else{
                 res.redirect("/administrateur")
            }
        } catch (error) {
            res.send('Erreur '+ error)
        }
    },
    modifier_user_hopital : async (req, res)=> {
        try {
            let pseudo_session_admin =  req.session.pseudo,
                hopital_session_admin =  req.session.hp,
                mdp_session_admin = req.session.mdp,
                id_compte_session = req.session.id_compte
            if(typeof pseudo_session_admin !== 'undefined' && typeof hopital_session_admin !== 'undefined' && typeof mdp_session_admin !== 'undefined' && typeof id_compte_session !== 'undefined')  {
                res.render('Utilisateur/vision_profile_simple_user',{
                    cmt_ : await administrationService.vision_profile_adm_plat(req.session.id_compte,hopital_session_admin),
                    droits : await droitService.get_liste_droit("'"+hopital_session_admin+"'","'"+req.session.id_compte+"'"),
                    modifier_profile_user : 'modifier_profil_hopital',
                    msg_profil_hop : req.params.message,
                    admin : await utilisateurService.check_pseudo_mdp_admin_plat(pseudo_session_admin,mdp_session_admin),
                    etat_hopital : await hopitalService.check_etat_hopital(pseudo_session_admin)
                });
                
            }else{
                 res.redirect("/administrateur")
            }
        } catch (error) {
            res.send('Erreur '+ error)
        }
    },
    enreg_modifier :  async (req, res)=> {
        try {
            let pseudo_session_admin =  req.session.pseudo,
                hopital_session_admin =  req.session.hp,
                mdp_session_admin = req.session.mdp,
                id_compte_session = req.session.id_compte
            if(typeof pseudo_session_admin !== 'undefined' && typeof hopital_session_admin !== 'undefined' && typeof mdp_session_admin !== 'undefined' && typeof id_compte_session !== 'undefined')  {
                 
                let bodyrequest = req.body
                if(await utilisateurService.check_zero_modification(req.session.id_compte, bodyrequest.pseudo, bodyrequest.email, bodyrequest.telephone, bodyrequest.adresse_physique) == ''){
                    if(await utilisateurService.check_doublon(req.session.id_compte,bodyrequest.pseudo) == ''){
                        await utilisateurService.update_profile_user(req.session.id_compte,bodyrequest)
                        message = 'reussite'
                    }else{
                        message = 'Ce Pseudo existe déjà'
                    }
                }else{
                    message = 'Zéro changement effectué'
                }
                res.redirect('/administration/modifier/'+ message)
            }else  res.redirect("/administrateur")
        } catch (error) {
            res.send('Erreur '+ error)
        }
    },
    enreg_modif_user_hop :  async (req, res)=> {
        try {
            let pseudo_session_admin =  req.session.pseudo,
                hopital_session_admin =  req.session.hp,
                mdp_session_admin = req.session.mdp,
                id_compte_session = req.session.id_compte
            if(typeof pseudo_session_admin !== 'undefined' && typeof hopital_session_admin !== 'undefined' && typeof mdp_session_admin !== 'undefined' && typeof id_compte_session !== 'undefined')  {
                 
                let bodyrequest = req.body,
                    message = ''
                if(await utilisateurService.check_zero_modification(req.session.id_compte, bodyrequest.pseudo, bodyrequest.email, bodyrequest.telephone, bodyrequest.adresse_physique) == ''){
                    if(await utilisateurService.check_doublon(req.session.id_compte,bodyrequest.pseudo) == ''){
                        await utilisateurService.update_profile_user(req.session.id_compte,bodyrequest)
                        message = 'reussite'
                    }else{
                        message = 'Ce Pseudo existe déjà'
                    }
                }else{
                    message = 'Zéro changement effectué'
                }
                res.redirect('/administration/modifier_user_hopital/'+ message)
            }else { res.redirect("/administrateur")}
        } catch (error) {
            res.send('Erreur '+ error)
        }
    }
}
