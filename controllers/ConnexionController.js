require('dotenv').config();
const bodyParser = require('body-parser')
const {sequelize} = require('../config/db');
const hopitalService = require('../services/hopital.service');
const dossierService = require('../services/dossier.service');
const droitService = require('../services/droit.service');
const utilisateurService = require('../services/utilisateur.service');
const roleService = require('../services/role.service');

module.exports={
    connexion_admin : async(req,res)=>{
        message = req.params.message
        res.render('Authentification/connexion_admin',{
            message,
            hop : await hopitalService.get_liste_partenaire()
        });
    },
    authentification_admin : async(req,res)=>{
        try {
            let pseudo_ = '',
                mdp_ = '',
                message = '',
                id_hopital = '' 
            if(req.body.id_hopital) id_hopital = req.body.id_hopital
            else id_hopital = req.session.hp
            if(req.body.Pseudo) pseudo_ = req.body.Pseudo
            else  pseudo_ = req.session.pseudo
            if(req.body.mdp) mdp_ = req.body.mdp
            else mdp_ = req.session.mdp
            if(typeof pseudo_ !== 'undefined' && typeof mdp_ !== 'undefined' ) {
                let hopital = await hopitalService.check_etat_hopital(pseudo_),
                    utilisateur = await utilisateurService.check_pseudo_mdp_admin_plat(pseudo_,mdp_),
                    connexion = await utilisateurService.connexion_administrateur(pseudo_,mdp_)
                if(connexion == ''){
                    message = 'Coordonnéees introuvables'
                    res.redirect('/administrateur/'+ message)
                }else{
                    if(utilisateur[0].typee == 'Super-admin-plat'){
                        req.session.hp = utilisateur[0].id_h
                        req.session.pseudo = pseudo_
                        req.session.mdp = mdp_
                        req.session.id_compte = utilisateur[0].id
                        await utilisateurService.create_connexion(req.session.id_compte, req.session.hp, new Date().getFullYear()+ '-' + (new Date().getMonth()+1) + '-' + (new Date().getDate())+ ' '+ new Date().getHours()+':'+new Date().getMinutes()+':'+new Date().getSeconds())
                        res.render('Utilisateur/zone_admin_plate_forme',{
                            comptes_actifs : await utilisateurService.comptes_actifs(),
                            comptes_desactives : await utilisateurService.comptes_desactives(),
                            comptes_supprimers : await utilisateurService.comptes_supprimes(),
                            cmt_attente_desactivation_ : await utilisateurService.comptes_attente_desactivation(),
                            nb_naissance_admin : await dossierService.nombre_naissance(),
                            cmt_attente_suppression_ : await utilisateurService.comptes_attente_suppression(),
                            cmt_attente_activation_ : await utilisateurService.comptes_attente_activation(),
                            nb_deces_admin : await dossierService.nombre_deces(),
                            nb_util_ : await utilisateurService.nombre_utilisateurs(),
                            medecin_: await utilisateurService.nombre_medecins(),
                            infirmier_: await utilisateurService.nombre_infirmier(),
                            dossier_admin : await dossierService.nombre_dossier_medical(),
                            nb_admin_plat_  : await utilisateurService.nombre_admin_plateforme(),
                            nb_hopitaux_active : await hopitalService.nombre_hopital_actifs(),
                            nb_hopitaux_inactif : await hopitalService.nombre_hopital_desactive(),
                            nb_admin_hop_ : await utilisateurService.nombre_admin_hopital(),
                            nb_hopitaux_att : await hopitalService.nombre_hopital_attentte_activation(),
                            hop : await hopitalService.get_liste_hopital(),
                            pseudo : pseudo_,
                            id : utilisateur[0].id,
                            nb_dossier_ouvert : await dossierService.nombre_vivant(),
                            droits : await droitService.get_liste_droit("'"+req.session.hp+"'","'"+utilisateur[0].id+"'"),
                            compte : await utilisateurService.check_pseudo(pseudo_),
                            role : await roleService.get_liste_role()
                        });
                    }else{
                        if(utilisateur[0].typee == 'admin-plat'){
                            req.session.hp = utilisateur[0].id_h
                            req.session.pseudo = pseudo_
                            req.session.mdp = mdp_
                            req.session.id_compte = utilisateur[0].id
                            await utilisateurService.create_connexion(req.session.id_compte, req.session.hp, new Date().getFullYear()+ '-' + (new Date().getMonth()+1) + '-' + (new Date().getDate())+ ' '+ new Date().getHours()+':'+new Date().getMinutes()+':'+new Date().getSeconds())
                            res.render('Utilisateur/zone_admin_plate_forme',{
                                comptes_actifs : await utilisateurService.comptes_actifs(),
                                comptes_desactives : await utilisateurService.comptes_desactives(),
                                comptes_supprimers : await utilisateurService.comptes_supprimes(),
                                cmt_attente_desactivation_ : await utilisateurService.comptes_attente_desactivation(),
                                nb_naissance_admin : await dossierService.nombre_naissance(),
                                cmt_attente_suppression_ : await utilisateurService.comptes_attente_suppression(),
                                cmt_attente_activation_ : await utilisateurService.comptes_attente_activation(),
                                nb_deces_admin : await dossierService.nombre_deces(),
                                nb_util_ : await utilisateurService.nombre_utilisateurs(),
                                medecin_: await utilisateurService.nombre_medecins(),
                                dossier_admin : await dossierService.nombre_dossier_medical(),
                                nb_admin_plat_  : await utilisateurService.nombre_admin_plateforme(),
                                infirmier_: await utilisateurService.nombre_infirmier(),
                                nb_hopitaux_active : await hopitalService.nombre_hopital_actifs(),
                                nb_hopitaux_inactif : await hopitalService.nombre_hopital_desactive(),
                                nb_admin_hop_ : await utilisateurService.nombre_admin_hopital(),
                                nb_hopitaux_att : await hopitalService.nombre_hopital_attentte_activation(),
                                hop : await hopitalService.get_liste_hopital(),
                                pseudo : pseudo_,
                                id : utilisateur[0].id,
                                nb_dossier_ouvert : await dossierService.nombre_vivant(),
                                droits : await droitService.get_liste_droit("'"+req.session.hp+"'","'"+utilisateur[0].id+"'"),
                                compte : await utilisateurService.check_pseudo(pseudo_),
                                role : await roleService.get_liste_role()
                            });
                        }else{
                            if(utilisateur[0].typee == 'Admin-hop'){
                                req.session.hp =  utilisateur[0].id_h
                                req.session.pseudo = pseudo_
                                req.session.mdp = mdp_
                                req.session.id_compte = utilisateur[0].id

                                await utilisateurService.create_connexion(req.session.id_compte, req.session.hp, new Date().getFullYear()+ '-' + (new Date().getMonth()+1) + '-' + (new Date().getDate())+ ' '+ new Date().getHours()+':'+new Date().getMinutes()+':'+new Date().getSeconds())
                                
                                res.render('Hopital/espace_admin_hopital',{
                                    etat_hopital : await hopitalService.check_etat_hopital(pseudo_),
                                    pseudo : pseudo_,
                                    cmtt : await utilisateurService.nombre_comptes_actifs_par_hopital(req.session.hp),
                                    cmtt1 : await utilisateurService.nb_comptes_desactives_par_hopital(req.session.hp),
                                    nb_ambul_ : await utilisateurService.nb_patient_ambulatoire_par_hopital(req.session.hp),
                                    cmt_supprimer_ : await utilisateurService.nb_comptes_supprimes_par_hopital(req.session.hp),
                                    cmt_attente_desactivation_ : await utilisateurService.nb_comptes_attente_desactivation_par_hopital(req.session.hp),
                                    cmt_attente_activation_ : await utilisateurService.nombre_comptes_actifs_par_hopital(req.session.hp),
                                    cmt_attente_suppression_ : await utilisateurService.nb_comptes_attente_suppression_par_hopital(req.session.hp),
                                    nb_naissance_ : await utilisateurService.nb_naissance_par_hopital(req.session.hp),
                                    nb_deces_ : await utilisateurService.nb_deces_par_hopital(req.session.hp),
                                    id : utilisateur[0].id,
                                    id_hopital : utilisateur[0].id_h,
                                    droits : await droitService.get_liste_droit("'"+req.session.hp+"'","'"+utilisateur[0].id+"'"),
                                    nb_hosp_ : await utilisateurService.nb_patient_hospitalise_par_hopital(req.session.hp),
                                    nb_urgent : await utilisateurService.nb_patient_urgent_par_hopital(req.session.hp),
                                    nb_read : await utilisateurService.nb_patient_readmission_par_hopital(req.session.hp),
                                    nb_proce : await utilisateurService.nb_patient_precoce_par_hopital(req.session.hp),
                                    nb_regle : await utilisateurService.nb_patient_regle_par_hopital(req.session.hp),
                                    nb_medecins : await utilisateurService.nombre_medecin_par_hopital(req.session.hp),
                                    dossier_ : await dossierService.nb_dossiers_medical_par_hopital(req.session.hp),
                                    nb_infirmiers : await utilisateurService.nombre_infirmier_by_hospital(req.session.hp)
                                });
                            
                            }else{
                                let etre = '',
                                    connexion_user_simple = await utilisateurService.connexion_simple_utilisateur(pseudo_,mdp_)
                                if(connexion_user_simple !='' ){
                                    for (let i = 0; i < connexion_user_simple.length; i++) {
                                        if(connexion_user_simple[i].id == id_hopital){
                                            etre = 'oui'
                                            req.session.hp = id_hopital
                                            req.session.id_compte = connexion_user_simple[i].id_cmt  
                                            req.session.pseudo = pseudo_,
                                            req.session.mdp = mdp_
                                        }
                                    }
                                    if(etre == 'oui'){
                                        let pseudo_session =  req.session.pseudo,
                                            hopital_session = req.session.hp,
                                            id_compte_session = req.session.id_compte,
                                            mdp_session = req.session.mdp
                                        if(typeof pseudo_session !== 'undefined' && typeof id_compte_session !== 'undefined' && typeof hopital_session !== 'undefined' && mdp_session !== 'undefined')  {
                                            await utilisateurService.create_connexion(id_compte_session,hopital_session, new Date().getFullYear()+ '-' + (new Date().getMonth()+1) + '-' + (new Date().getDate())+ ' '+ new Date().getHours()+':'+new Date().getMinutes()+':'+new Date().getSeconds())
                                            if(await droitService.get_liste_droit("'"+id_hopital+"'","'"+utilisateur[0].id+"'") !=''){
                                                res.render('home',{
                                                    droits : await droitService.get_liste_droit("'"+hopital_session+"'","'"+utilisateur[0].id+"'"),
                                                    cmtt : await utilisateurService.nombre_comptes_actifs_par_hopital(hopital_session),
                                                    cmtt1 : await utilisateurService.nb_comptes_desactives_par_hopital(hopital_session),
                                                    dossier_ : await dossierService.nb_dossiers_medical_par_hopital(hopital_session),
                                                    nb_hosp_ : await utilisateurService.nb_patient_hospitalise_par_hopital(hopital_session),
                                                    nb_ambul_ : await utilisateurService.nb_patient_ambulatoire_par_hopital(hopital_session),
                                                    cmt_supprimer_ : await utilisateurService.nb_comptes_supprimes_par_hopital(hopital_session),
                                                    cmt_attente_desactivation_ : await utilisateurService.nb_comptes_attente_desactivation_par_hopital(hopital_session),
                                                    cmt_attente_activation_ : await utilisateurService.nombre_comptes_actifs_par_hopital(hopital_session),
                                                    cmt_attente_suppression_ : await utilisateurService.nb_comptes_attente_suppression_par_hopital(hopital_session),
                                                    nb_naissance_ : await utilisateurService.nb_naissance_par_hopital(hopital_session),
                                                    nb_deces_ : await utilisateurService.nb_deces_par_hopital(hopital_session)
                                                });
                                            }else{
                                                message = "Vous n'avez aucun privilège"
                                                res.redirect('/administrateur/'+ message)
                                            }
                                        }
                                    }else{
                                        message = "Hôpital introuvable"
                                        res.redirect('/administrateur/'+ message)
                                    }
                                }else{
                                    message = "Coordonnées introuvables"
                                    res.redirect('/administrateur/'+ message)
                                }
                            }
                        }
                    }
                }
                
            }else{
                message = 'Pseudo ou Mot de passe manquant'
                res.redirect('/administrateur/'+ message)
            }
        } catch (error) {
            res.send('Erreur : '+ error)
        }
    },
    changer_mdp: async (req, res)=> {
         try {
            let erreur = req.params.erreur
            if(erreur){
                res.render('Authentification/changement_mot_de_passe',{
                    erreur
                })
            }else res.render('Authentification/changement_mot_de_passe')
        } catch (error) {
            res.send('Erreur '+ error)
        }
    },
    enregistrer_changement_mdp: async (req, res)=> {
        try {
           let mdp_ancien = req.body.ancien_mdp,
               mdp_nouveau = req.body.nouveau_mdp,
               mdp_repete = req.body.repete_mdp,
               pseudo = req.body.pseudo,
               erreur = [],
               utilisateur = await utilisateurService.check_pseudo_and_mdp(pseudo,mdp_ancien)

            if(utilisateur =='') erreur.push('Mot de passe introuvable')
            if (mdp_nouveau != mdp_repete) erreur.push('Deux mot de passe non correspondants')
            if (mdp_ancien == mdp_nouveau)  erreur.push('Vous n\'avais pas changé de mot de passe')
            if(erreur != '') res.redirect('/changer_mdp/'+ erreur)
            else{
                await utilisateurService.modification_mdp(mdp_ancien,mdp_nouveau,pseudo)
                if(req.session.hp == '1') res.redirect('/deconnexion_admin')
                else res.redirect('/deconnexion')
            }
          } catch (error) {
            res.send('Erreur '+ error);
          }
    },
    deconnexion : async (req, res)=> {
        try {
            let pseudo_session =  req.session.pseudo,
                hopital_session = req.session.hp,
                id_compte_session = req.session.id_compte,
                mdp_compte_session = req.session.mdp,
                date_heure_deconnexion = new Date().getFullYear()+ '-' + (new Date().getMonth()+1) + '-' + (new Date().getDate())+ ' '+ new Date().getHours()+':'+new Date().getMinutes()+':'+new Date().getSeconds()
            if(typeof pseudo_session !== 'undefined' && typeof hopital_session !== 'undefined' && typeof id_compte_session !== 'undefined' && typeof mdp_compte_session !== 'undefined')  {
                await utilisateurService.deconnexion_simple_user(id_compte_session,date_heure_deconnexion)
                delete req.session.pseudo
                delete req.session.hp
                delete req.session.mdp
                delete req.session.id_compte
                res.redirect('/administrateur')
            }
        } catch (error) {
            res.send('Erreur '+error)
        }
    },
    deconnexion_admin : async (req, res)=> {
        try { 
            let pseudo_session =  req.session.pseudo,
                hopital_session = req.session.hp,
                id_compte_session = req.session.id_compte,
                mdp_session = req.session.mdp
            if(typeof pseudo_session !== 'undefined' && typeof hopital_session !== 'undefined' && typeof id_compte_session !== 'undefined' && typeof mdp_session !== 'undefined')  {
                
                date_heure_deconnexion = new Date().getFullYear()+ '-' + (new Date().getMonth()+1) + '-' + (new Date().getDate())+ ' '+ new Date().getHours()+':'+new Date().getMinutes()+':'+new Date().getSeconds()
                await utilisateurService.deconnexion_simple_user(id_compte_session,date_heure_deconnexion)
                delete req.session.pseudo
                delete req.session.hp
                delete req.session.mdp
                delete req.session.id_compte
                res.redirect("/administrateur")
            }
        } catch (error) {
            res.send('Erreur '+error)
        }
    }
}
