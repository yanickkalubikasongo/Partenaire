require('dotenv').config();
const bodyParser = require('body-parser')
const {sequelize,Op,User} = require('../config/db');
const fs = require('fs/promises')
const utilisateurService = require('../services/utilisateur.service');
module.exports={
    accueil: async (req,res)=>{
       res.render('accueil');
    },
    enregistrer_compte_admin : async (req,res)=>{
        try {
            let pseudo_session_admin =  req.session.pseudo,
                hopital_session_admin =  req.session.hp,
                mdp_session_admin = req.session.mdp,
                id_session = req.session.id_compte
            if(typeof pseudo_session_admin !== 'undefined' && typeof id_session !== 'undefined' && typeof hopital_session_admin !== 'undefined' && typeof mdp_session_admin !== 'undefined')  {
                
                let bodyRequest = req.body,
                    message_compte_adm = '',
                    erreurs = []

                if(await utilisateurService.check_pseudo(bodyRequest.pseudo) != '') erreurs.push('Ce pseudo existe déjà')
                if(bodyRequest.mdp != bodyRequest.mdp_repete) erreurs.push('Les deux mot de passe ne correspondent pas')
                if(erreurs =='') {  
                    await utilisateurService.create_compte_adm(bodyRequest,req.session.id_compte)
                    message_compte_adm = 'Compte enregistré avec succès'
                }else{
                    message_compte_adm = erreurs
                }
                res.redirect('/utilisateur/compte_administrateur/'+ message_compte_adm)
            }else{
                res.redirect("/administrateur")
            }
        } catch (error) {
            res.send('Erreur '+ error)
        }
    },
    compte_administrateur : async (req,res)=>{
        let pseudo_session_admin =  req.session.pseudo,
            hopital_session_admin =  req.session.hp,
            mdp_session_admin = req.session.mdp,
            id_session = req.session.id_compte
        if(typeof pseudo_session_admin !== 'undefined' && typeof id_session !== 'undefined' && typeof hopital_session_admin !== 'undefined' && typeof mdp_session_admin !== 'undefined')  {
            
            message_compt_ad = req.params.message_compte_adm
            res.render('Utilisateur/nouvel_compte_admin',{
                droits : await droitService.get_liste_droit("'"+hopital_session_admin+"'","'"+req.session.id_compte+"'"),
                hop : await hopitalService.get_liste_hopital(),
                role : await roleService.get_liste_role(),
                message_compt_ad,
                compte : await utilisateurService.liste_compte(),
                pseudo : pseudo_session_admin,
                id : id_session
            });
        }else{
            res.json({result : 'deconnexion'});
        }
    },
    compte : async (req,res)=>{
        let pseudo_session_admin =  req.session.pseudo,
            hopital_session_admin =  req.session.hp,
            mdp_session_admin = req.session.mdp,
            id_session = req.session.id_compte
        if(typeof pseudo_session_admin !== 'undefined' && typeof id_session !== 'undefined' && typeof hopital_session_admin !== 'undefined' && typeof mdp_session_admin !== 'undefined')  {
            
            res.render('Utilisateur/compte',{
                droits : await droitService.get_liste_droit("'"+hopital_session_admin+"'","'"+req.session.id_compte+"'"),
                hop : await hopitalService.get_liste_hopital(),
                role : await roleService.get_liste_role(),
                compte : await utilisateurService.liste_compte(),
                pseudo : pseudo_session_admin,
                id : id_session
            });
        }else{
            res.json({result : 'deconnexion'});
        }
    },
    affiliation : async (req,res)=>{
        let pseudo_session_admin =  req.session.pseudo,
            hopital_session_admin =  req.session.hp,
            mdp_session_admin = req.session.mdp,
            id_session = req.session.id_compte
        if(typeof pseudo_session_admin !== 'undefined' && typeof id_session !== 'undefined' && typeof hopital_session_admin !== 'undefined' && typeof mdp_session_admin !== 'undefined')  {
            
                res.json({
                    droits : await droitService.get_liste_droit("'"+req.session.hp+"'","'"+req.session.id_compte+"'"),
                    hop : await hopitalService.get_liste_hopital(),
                    role : await roleService.get_liste_role(),
                    compte : await utilisateurService.liste_compte(),
                   // compte : await utilisateurService.liste_compte_affiliation(),
                    pseudo : pseudo_session_admin,
                    id : id_session,
                    msg_alerte_affiliation : req.params.msg_alerte_affiliation
                });
        }else{
            res.json({result : 'deconnexion'});
        }
    },
    nouvelle_affectation : async (req,res)=>{
        try {
            let pseudo_session_admin =  req.session.pseudo,
                hopital_session_admin =  req.session.hp,
                mdp_session_admin = req.session.mdp,
                id_session = req.session.id_compte
            if(typeof pseudo_session_admin !== 'undefined' && typeof id_session !== 'undefined' && typeof hopital_session_admin !== 'undefined' && typeof mdp_session_admin !== 'undefined')  {
                
                res.render('Utilisateur/Nouvelle_affectation',{
                    nv : await serviceServices.get_liste_service(hopital_session_admin),
                    c : await utilisateurService.get_comptes_actives(hopital_session_admin),
                    affectation : req.params.message_affecation,
                    comptes : await utilisateurService.get_comptes_actives(hopital_session_admin),
                    services : await serviceServices.get_liste_service(hopital_session_admin),
                    service_ : await serviceServices.liste_affectation(hopital_session_admin),
                    droits : await droitService.get_liste_droit("'"+hopital_session_admin+"'","'"+req.session.id_compte +"'"),
                    etat_hopital : await hopitalService.check_etat_hopital(pseudo_session_admin)
                });          
            }else{
                res.json({result : 'deconnexion'});
            }
        } catch (error) {
            res.send('Erreur '+ error)
        }
    },
    specia : async (req,res)=>{
        try {
            let pseudo_session_admin =  req.session.pseudo,
                hopital_session_admin =  req.session.hp,
                mdp_session_admin = req.session.mdp,
                id_session = req.session.id_compte
            if(typeof pseudo_session_admin !== 'undefined' && typeof id_session !== 'undefined' && typeof hopital_session_admin !== 'undefined' && typeof mdp_session_admin !== 'undefined')  {
                
                res.render('Parametres_generaux/Specialisation/attribution_specialisation',{
                    nv : await serviceServices.get_liste_service(hopital_session_admin),
                    c : await utilisateurService.get_comptes_actives(hopital_session_admin),
                    affectation : req.params.message_specialiste,
                    comptes : await utilisateurService.liste_medecin(hopital_session_admin),
                    specialisation : await specialisationServie.get_liste_specialisation(hopital_session_admin),
                    spec : await specialisationServie.specialisations_comptes_hop(hopital_session_admin),
                    droits : await droitService.get_liste_droit("'"+hopital_session_admin+"'","'"+req.session.id_compte +"'"),
                    etat_hopital : await hopitalService.check_etat_hopital(pseudo_session_admin)
                });          
            }else{
                res.json({result : 'deconnexion'});
            }
        } catch (error) {
            res.send('Erreur '+ error)
        }
    },
    enregistrer_specialiste : async (req,res)=>{
        try {
            let pseudo_session_admin =  req.session.pseudo,
                hopital_session_admin =  req.session.hp,
                mdp_session_admin = req.session.mdp,
                id_session = req.session.id_compte
            if(typeof pseudo_session_admin !== 'undefined' && typeof id_session !== 'undefined' && typeof hopital_session_admin !== 'undefined' && typeof mdp_session_admin !== 'undefined')  {
                
                let bodyRequest = req.body,
                    message_specialiste = await specialisationServie.create_specialiste(bodyRequest,hopital_session_admin)
                res.redirect('/utilisateur/specia/'+ message_specialiste)    
            }else{
                res.redirect("/administrateur")
            }
        } catch (error) {
            res.send('Erreur '+ error)
        }
    },
    enregistrer_retrait_specialiste : async (req,res)=>{
        try {
            let pseudo_session_admin =  req.session.pseudo,
                hopital_session_admin =  req.session.hp,
                mdp_session_admin = req.session.mdp,
                id_session = req.session.id_compte
            if(typeof pseudo_session_admin !== 'undefined' && typeof id_session !== 'undefined' && typeof hopital_session_admin !== 'undefined' && typeof mdp_session_admin !== 'undefined')  {
                
                let bodyRequest = req.body,
                    message_specialiste = await specialisationServie.create_despecialisation(bodyRequest,hopital_session_admin)
                res.redirect('/utilisateur/specia/'+ message_specialiste)    
            }else{
                res.redirect("/administrateur")
            }
        } catch (error) {
            res.send('Erreur '+ error)
        }
    },
    Nouvelle_affiliation : async (req,res)=>{
        try {
            let pseudo_session_admin =  req.session.pseudo,
                hopital_session_admin =  req.session.hp,
                mdp_session_admin = req.session.mdp,
                id_session = req.session.id_compte
            if(typeof pseudo_session_admin !== 'undefined' && typeof id_session !== 'undefined' && typeof hopital_session_admin !== 'undefined' && typeof mdp_session_admin !== 'undefined')  {
                  
                let bodyRequest = req.body
                    
                await utilisateurService.create_affiliation(bodyRequest,req.session.id_compte) // Enregistrement Affiliation
                let msg_alerte_affiliation = 'Affiliation Reussie'
                res.redirect('/utilisateur/affiliation/'+ msg_alerte_affiliation)          
                }else{
                    res.redirect("/administrateur")
                }
        } catch (error) {
            res.send('Erreur '+ error)
        }
    },
    enregistrer_affection : async (req,res)=>{
        try {
            let pseudo_session_admin =  req.session.pseudo,
                hopital_session_admin =  req.session.hp,
                mdp_session_admin = req.session.mdp,
                id_session = req.session.id_compte
            if(typeof pseudo_session_admin !== 'undefined' && typeof id_session !== 'undefined' && typeof hopital_session_admin !== 'undefined' && typeof mdp_session_admin !== 'undefined')  {
                
                let bodyRequest = req.body,
                    message_affecation = await serviceServices.create_affectation(bodyRequest,hopital_session_admin)
                res.redirect('/utilisateur/nouvelle_affectation/'+ message_affecation)    
            }else{
                res.redirect("/administrateur")
            }
        } catch (error) {
            res.send('Erreur '+ error)
        }
    },
    enregistrer_desaffectation : async (req,res)=>{
        try {
            let pseudo_session_admin =  req.session.pseudo,
                hopital_session_admin =  req.session.hp,
                mdp_session_admin = req.session.mdp,
                id_session = req.session.id_compte
            if(typeof pseudo_session_admin !== 'undefined' && typeof id_session !== 'undefined' && typeof hopital_session_admin !== 'undefined' && typeof mdp_session_admin !== 'undefined')  {
                
                let bodyRequest = req.body,
                    message_affecation = await serviceServices.create_desaffectation(bodyRequest,hopital_session_admin)
                res.redirect('/utilisateur/nouvelle_affectation/'+ message_affecation)    
            }else{
                res.redirect("/administrateur")
            }
        } catch (error) {
            res.send('Erreur '+ error)
        }
    },
    formulaire_compte : async (req, res)=> {
        try {
            let pseudo_session_admin =  req.session.pseudo,
                hopital_session_admin =  req.session.hp,
                mdp_session_admin = req.session.mdp,
                id_session = req.session.id_compte
            if(typeof pseudo_session_admin !== 'undefined' && typeof id_session !== 'undefined' && typeof hopital_session_admin !== 'undefined' && typeof mdp_session_admin !== 'undefined')  {
                let id_hopital_ = req.body.hopital,
                    message = req.params.message

                if(req.params.id_hopital_  && req.params.id_hopital_ != '') id_hopital_ = req.params.id_hopital_
                else id_hopital_ = req.body.hopital
                
                res.render('Utilisateur/compte',{
                    serv : await serviceServices.get_liste_service(id_hopital_),
                    spe : await specialisationServie.get_liste_specialisation(id_hopital_),
                    hop : await hopitalService.get_liste_hopital(),
                    type : await utilisateurService.get_liste_type_compte(),
                    id_hopital_,
                    message_compte_hopital : message,
                    pseudo : pseudo_session_admin,
                    id : req.session.id_compte,
                    droits : await droitService.get_liste_droit("'"+hopital_session_admin+"'","'"+req.session.id_compte+"'"),
                    compte : await utilisateurService.liste_compte(),
                    role : await roleService.get_liste_role_sauf_medecin_and_infirmier()
                })          
            }else{
                res.redirect("/administrateur")
            }
        } catch (error) {
            res.send('Erreur '+ error)
        }
    },
    enregistrer: async (req, res)=> {
         try {
            let pseudo_session_admin =  req.session.pseudo,
                hopital_session_admin =  req.session.hp,
                mdp_session_admin = req.session.mdp,
                id_session = req.session.id_compte
            if(typeof pseudo_session_admin !== 'undefined' && typeof id_session !== 'undefined' && typeof hopital_session_admin !== 'undefined' && typeof mdp_session_admin !== 'undefined')  {
                var bodyRequest = req.body,
                    erreurs = [],
                    type_ = '',
                    hopital = req.body.hopital,
                    ro_ = await roleService.get_one_role(bodyRequest.role)

                if (ro_[0].libelle == 'Administrateur') type_ = 3
                if (bodyRequest.mdp != bodyRequest.mdp_repete) erreurs.push('Les deux mot de passe ne correspondent pas')
                if (ro_[0].libelle != 'Administrateur') {
                    type_ = 4 
                } 
                let message = ''
                if(erreurs =='') {  
                    message =  await utilisateurService.create_compte_simple(bodyRequest,req.session.id_compte,type_,'')
                }else{
                    message = erreurs
                }
               // res.redirect('/utilisateur/formulaire_compte/'+ message +'/'+ hopital)
               res.json({msg : message})
            }else res.redirect("/administrateur")
        } catch (error) {
            res.send('Erreur '+ error)
        }
    },
    repertoire_compte: async (req, res)=> {
        try {
            let pseudo_session_admin =  req.session.pseudo,
                hopital_session_admin =  req.session.hp,
                mdp_session_admin = req.session.mdp,
                id_session = req.session.id_compte
            if(typeof pseudo_session_admin !== 'undefined' && typeof id_session !== 'undefined' && typeof hopital_session_admin !== 'undefined' && typeof mdp_session_admin !== 'undefined')  {
               
                res.render('Utilisateur/repertoire_compte',{
                    comptes : await utilisateurService.repertoire_comptes_espace_hopital(req.session.hp),
                    droits : await droitService.get_liste_droit("'"+hopital_session_admin+"'","'"+req.session.id_compte+"'"), 
                    id : req.session.id_compte,
                    etat_hopital : await hopitalService.check_etat_hopital(pseudo_session_admin)
                });
            }else{
                res.redirect("/administrateur")
            }
        } catch (error) {
            res.send('Erreur '+ error)
        }
    },
    Activer_compte : async (req, res)=> {
        try {
            let pseudo_session_admin =  req.session.pseudo,
                hopital_session_admin =  req.session.hp,
                mdp_session_admin = req.session.mdp,
                id_session = req.session.id_compte
            if(typeof pseudo_session_admin !== 'undefined' && typeof id_session !== 'undefined' && typeof hopital_session_admin !== 'undefined' && typeof mdp_session_admin !== 'undefined')  {
              let num_compte_ = req.body.num_compte,
                    etat_compte = req.body.etat
                if(etat_compte == 'Activer'){
                    await utilisateurService.activer_compte(etat_compte,num_compte_,hopital_session_admin) // Activation de compte
                }
                res.redirect('/utilisateur/repertoire_compte');
            }else{
                res.redirect("/administrateur")
            }
        } catch (error) {
            res.send('Erreur '+ error)
        }
    }, 
    Rejetter_compte : async (req, res)=> {
        try {
            let pseudo_session_admin =  req.session.pseudo,
                hopital_session_admin =  req.session.hp,
                mdp_session_admin = req.session.mdp,
                id_session = req.session.id_compte
            if(typeof pseudo_session_admin !== 'undefined' && typeof id_session !== 'undefined' && typeof hopital_session_admin !== 'undefined' && typeof mdp_session_admin !== 'undefined')  {
                let num_compte_ = req.body.num_compte    
                await utilisateurService.rejetter_operation(num_compte_,hopital_session_admin) // Rejetter Demande Suppression ou Demande Desactivation
                res.redirect('/utilisateur/repertoire_compte');
            }else{
                res.redirect("/administrateur")
            }
        } catch (error) {
            res.send('Erreur '+ error)
        }
    },
    desactiver_compte : async (req, res)=> {
        try {
            let pseudo_session_admin =  req.session.pseudo,
                hopital_session_admin =  req.session.hp,
                mdp_session_admin = req.session.mdp,
                id_session = req.session.id_compte
            if(typeof pseudo_session_admin !== 'undefined' && typeof id_session !== 'undefined' && typeof hopital_session_admin !== 'undefined' && typeof mdp_session_admin !== 'undefined')  {
               let num_compte_ = req.body.num_compte,
                   etat_compte = req.body.etat
                if(etat_compte == 'Desactiver'){   
                    await utilisateurService.demande_desactivation_compte(num_compte_,hopital_session_admin)
                }
                res.redirect('/utilisateur/repertoire_compte');
            }else{
                res.redirect("/administrateur")
            }
        } catch (error) {
            res.send('Erreur '+ error)
        }
    }, 
    supprimer_compte : async (req, res)=> {
        try {
            let pseudo_session_admin =  req.session.pseudo,
                hopital_session_admin =  req.session.hp,
                mdp_session_admin = req.session.mdp,
                id_session = req.session.id_compte
            if(typeof pseudo_session_admin !== 'undefined' && typeof id_session !== 'undefined' && typeof hopital_session_admin !== 'undefined' && typeof mdp_session_admin !== 'undefined')  {
                let num_compte_ = req.body.num_compte,
                    etat_compte = req.body.etat
                if(etat_compte == 'Supprimer'){  
                    await utilisateurService.demande_suppression_compte(num_compte_,hopital_session_admin)
                }
                res.redirect('/utilisateur/repertoire_compte');
            }else{
                res.redirect("/administrateur")
            }
        } catch (error) {
            res.send('Erreur '+ error)
        }
    }, 
    repertoire_compte_adm : async (req, res)=> {
        try {
            let pseudo_session_admin =  req.session.pseudo,
                hopital_session_admin =  req.session.hp,
                mdp_session_admin = req.session.mdp,
                id_session = req.session.id_compte
            if(typeof pseudo_session_admin !== 'undefined' && typeof id_session !== 'undefined' && typeof hopital_session_admin !== 'undefined' && typeof mdp_session_admin !== 'undefined')  {
               
                res.render('Utilisateur/repertoire_compte_adm_plat',{
                    hop : await hopitalService.get_liste_hopital(),
                    pseudo : pseudo_session_admin,droits : await droitService.get_liste_droit("'"+hopital_session_admin+"'","'"+req.session.id_compte+"'"),
                    id : id_session,
                    compte : await utilisateurService.repertoire_comptes_espace_platforme(),
                    role : await roleService.get_liste_role()
                });
            }else{
                res.redirect("/administrateur")
            }
        } catch (error) {
            res.send('Erreur '+ error)
        }
    },
    desactivation_adm : async (req, res)=> {
        try {
            let pseudo_session_admin =  req.session.pseudo,
                hopital_session_admin =  req.session.hp,
                mdp_session_admin = req.session.mdp,
                id_session = req.session.id_compte
            if(typeof pseudo_session_admin !== 'undefined' && typeof id_session !== 'undefined' && typeof hopital_session_admin !== 'undefined' && typeof mdp_session_admin !== 'undefined')  {
               
                let num_compte_ = req.body.num_compte
                
                await utilisateurService.desactivation_compte(num_compte_,req.body.num_hopital)
               res.redirect('/utilisateur/repertoire_compte_adm')
            }else{
                res.redirect("/administrateur")
            }
        } catch (error) {
            res.send('Erreur '+ error)
        }
    },
    Suppression_adm : async (req, res)=> {
        try {
            let pseudo_session_admin =  req.session.pseudo,
                hopital_session_admin =  req.session.hp,
                mdp_session_admin = req.session.mdp,
                id_session = req.session.id_compte
            if(typeof pseudo_session_admin !== 'undefined' && typeof id_session !== 'undefined' && typeof hopital_session_admin !== 'undefined' && typeof mdp_session_admin !== 'undefined')  {
                let num_compte_ = req.body.num_compte
                await utilisateurService.suppression_compte(num_compte_,req.body.num_hopital)
                res.redirect('/utilisateur/repertoire_compte_adm')
            }else{
                res.redirect("/administrateur")
            }
        } catch (error) {
            res.send('Erreur '+ error)
        }
    },
    activation_adm : async (req, res)=> {
        try {
            let pseudo_session_admin =  req.session.pseudo,
                hopital_session_admin =  req.session.hp,
                mdp_session_admin = req.session.mdp,
                id_session = req.session.id_compte
            if(typeof pseudo_session_admin !== 'undefined' && typeof id_session !== 'undefined' && typeof hopital_session_admin !== 'undefined' && typeof mdp_session_admin !== 'undefined')  {
                let num_compte_ = req.body.num_compte,
                    etat_compte = req.body.etat,
                    id_hopital_ = req.body.num_hopital
                if(etat_compte == 'Activer'){
                    await utilisateurService.demande_activation_compte(num_compte_,id_hopital_)
                }
                if(etat_compte == 'Rejetter'){
                    await utilisateurService.rejetter_operation(num_compte_,id_hopital_)
                }
                res.redirect('/utilisateur/repertoire_compte_adm')
            }else{
                res.redirect("/administrateur")
            }
        } catch (error) {
            res.send('Erreur '+ error)
        }
    },
    formulaire_affiliation : async (req,res)=>{
        try {
            let pseudo_session_admin =  req.session.pseudo,
                hopital_session_admin =  req.session.hp,
                mdp_session_admin = req.session.mdp,
                id_session = req.session.id_compte
            if(typeof pseudo_session_admin !== 'undefined' && typeof id_session !== 'undefined' && typeof hopital_session_admin !== 'undefined' && typeof mdp_session_admin !== 'undefined')  {
                let id_hopital_ = req.body.hopital,
                    numero_ord = req.body.numero_ord,
                    identite = await utilisateurService.get_identite_user(numero_ord), // Identité de l'utilisateur
                    msg_alerte_affiliation = '',
                    etat_user = '',
                    id_user = await utilisateurService.check_numero_ordre_in_table_compte(numero_ord)

                if(await utilisateurService.check_numero_ordre(numero_ord) != ''){
                    if(await utilisateurService.check_numero_ordre_in_table_compte(numero_ord) != ''){
                        if(await utilisateurService.get_liste_affiliation(id_hopital_,id_user[0].id) != ''){
                            msg_alerte_affiliation = 'etre'
                        }else{
                            etat_user = 'ancien_appartenant'
                        }
                    }else{
                        etat_user = 'nouveau'
                    }
                    res.json({
                        serv : await serviceServices.get_liste_service(req.body.hopital),
                        spe : await specialisationServie.get_liste_specialisation(req.body.hopital),
                        compte_hop : identite,
                        etat_user,
                        msg_alerte_affiliation,
                        role : await roleService.role_compte(numero_ord),
                        id_compte_concerne : numero_ord,
                        id_actionnaire : req.session.id_compte,
                        comptes : await utilisateurService.check_pseudo_mdp_admin_plat(pseudo_session_admin,mdp_session_admin),
                        hop : await hopitalService.get_liste_hopital(),
                        pseudo : pseudo_session_admin,
                        droits : await droitService.get_liste_droit("'"+hopital_session_admin+"'","'"+req.session.id_compte+"'"),
                        id :  id_session,
                        compte : await utilisateurService.check_numero_ordre(numero_ord),
                        compte2 : await utilisateurService.check_numero_ordre_in_table_compte(numero_ord),
                        id_hopital_
                    })
                }else{
                    msg_alerte_affiliation = 'absence'
                    res.json( {message : msg_alerte_affiliation})
                }            
            }else{
                res.json("/administrateur")
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
                id_compte_session_admin = req.session.id_compte
            if(typeof pseudo_session_admin !== 'undefined' && typeof hopital_session_admin !== 'undefined' && typeof id_compte_session_admin !== 'undefined' && typeof mdp_session_admin !== 'undefined')  {
                
                let message = ''
                const [comp, meta] = await sequelize.query("SELECT comptes.* FROM comptes WHERE comptes.id <> :id_cmt AND comptes.pseudo = :ps",
                {
                    replacements: { id_cmt : id_compte_session_admin , ps : req.body.pseudo }
                });
                let compte_ = JSON.parse(JSON.stringify(comp))

                const [com, met] = await sequelize.query("SELECT comptes.*,users.* FROM comptes INNER JOIN users ON users.id = comptes.id WHERE comptes.pseudo = :ps AND users.email = :em AND users.telephone = :tel AND comptes.id = :id_cmt AND users.adresse_physique = :ad",
                {
                    replacements: { id_cmt : id_compte_session_admin , ps : req.body.pseudo, em : req.body.email, tel : req.body.telephone, ad : req.body.adresse_physique }
                });
                let compt_ = JSON.parse(JSON.stringify(com))
                if(compt_ == ''){
                    if(compte_ == ''){
                        await sequelize.transaction(async (t) => {      
                            await compte.update({
                                pseudo : req.body.pseudo
                            }, {where : { id : id_compte_session_admin}}, { transaction: t });
                            await User.update({
                                adresse_physique : req.body.adresse_physique,
                                email : req.body.email,
                                telephone : req.body.telephone
                            }, {where : { id : id_compte_session_admin}}, { transaction: t });
                            let date_heure = new Date().getFullYear()+ '-' + (new Date().getMonth()+1) + '-' + (new Date().getDate())+ ' '+ (new Date().getHours()-1)+':'+new Date().getMinutes()+':'+new Date().getSeconds(),                
                            donnees = {
                                'id_hopital' : hopital_session_admin,
                                'ancien_pseudo' : compt_[0].pseudo,
                                'nouveau_pseudo': req.body.pseudo,
                                'ancienne_adresse':compt_[0].adresse_physique,
                                'nouvelle_adresse': req.body.adresse_physique,
                                'ancien_email':compt_[0].email,
                                'nouveau_email':req.body.email,
                                'ancien_telephone':compt_[0].telephone,
                                'nouveau_telephone':req.body.telephone,
                                'id_compte': id_compte_session_admin,
                                'action': 'Modification Profile utilisateur',
                                'date_': date_heure
                            },
                            data = await fs.readFile('Logs/compte.json'),
                            donnees_conversees = JSON.parse(data)
                            donnees_conversees.push(donnees)
                            let nouveau =  JSON.stringify(donnees_conversees) 
                            await fs.writeFile('Logs/compte.json', nouveau , err=>{
                                if(err) throw err
                            })
                        });
                        message = 'reussite'
                    }else{
                        message = 'Ce Pseudo existe déjà'
                    }
                }else{
                    message = 'Zéro changement effectué'
                }
                res.redirect('/administration/modifier/'+ message)
            }else{
                res.json({result : 'deconnexion'});
            }
        } catch (error) {
            res.send('Erreur '+ error)
        }
    }
}
