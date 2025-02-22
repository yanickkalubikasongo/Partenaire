const bcrypt                       = require('bcrypt');
const Validator                    = require('body-validator');
//const organisationService          = require('../services/organisation.service'); 
//const agentService                 = require("../services/agent.service");
const adherentService                = require("../services/adherent.service");
const {sequelize}                  = require('../config/db');
const helper                       = require('../helper/helper'); 

const {
    flashSuccessMessage,
    showFlashSuccessMessage
} = require('../helper/flash');
 /*
const {
    membreValidationSchema,
    membreUpdateValidationSchema
} = require('./Validator/membre.validator');
*/

module.exports={
    get_adherent_by_im_id_piece:async (req,res)=>{
        let bodyRequest  = req.body;
        res.json({ result : await adherentService.get_adherent_by_im_id_piece(bodyRequest) });
    },
    rep_compte:async (req,res)=>{
        let bodyRequest  = req.body;
        res.json({ result : await adherentService.rep_compte(bodyRequest) });
    },
    create_compte:async (req,res)=>{
        try {
            let pseudo_session_admin =  req.session.pseudo,
                hopital_session_admin =  req.session.hp,
                mdp_session_admin = req.session.mdp,
                id_compte_session = req.session.id_compte
            if(typeof pseudo_session_admin !== 'undefined' && typeof hopital_session_admin !== 'undefined' && typeof mdp_session_admin !== 'undefined' && typeof id_compte_session !== 'undefined')  {
                let bodyRequest  = req.body;
                res.json({ result : await adherentService.create_compte(bodyRequest,id_compte_session) });
            }else{
                res.redirect("/administrateur")
            }
        }catch (error) {
            res.send('Erreur '+ error)
        }
    }
    /*
    index:async (req,res)=>{
        const membres = await membreService.getAll();

        res.render('membres/liste_membre',{
            title:'Accueil',
            membre:'link',
            membres,
            utils:helper
        });
    },
    list_member:async (req,res)=>{
        let bodyRequest  = req.body;
        res.json({ items : await membreService.one_member(bodyRequest.id_membre) });
    },
    get_credit:async (req,res)=>{
        res.json({ result : await membreService.get_credit() });
    }, 
    create:async (req,res)=>{
        res.render('membres/create_membre',{
            title:'Accueil',
            membre:'link',
        });
    },
    store:async (req,res)=>{
        const transaction = await sequelize.transaction();

        try {

            let bodyRequest         = req.body;
            
            const validationSchema  = membreValidationSchema();
            const validation        = new Validator.DataValidator(validationSchema,bodyRequest);
            
            validation.Validate();
            
            const errors = validation.ValidationResult;
            
            if(Object.values(errors).length > 0){console.log('validation',errors);
                    return res.status(401)
                    .redirect('/membre/create');
            }else{
                if(req.files && Object.keys(req.files).length !== 0 ){
                    const uploadFile  = req.files.fiche_adhesion;
                    let uniqueId = ((new Date()).getTime()).toString();

                    const updloadPath = "public/fiches_membres/"+ uniqueId+'_'+uploadFile.name;
                    const name = uniqueId+'_'+uploadFile.name;

                    uploadFile.mv(updloadPath,async function(err){
                        if(err){console.log(err);
                            transaction.commit();
                            return res.status(401)
                                .redirect('/membre/create');
                        }else{
                            await membreService.create(bodyRequest,name);
                            
                            transaction.commit();
                            
                            return res.status(200)
                                .redirect('/membre/create');
                        }
                    });
                }else{
                    return res.status(401)
                    .redirect('/membre/create');
                }
            }
        }catch(error){console.log(error);
            await transaction.rollback();

            return res.status(500)
                      .redirect('/membre/create');
        }
    },
    edit:async (req,res)=>{
        try {

            if(!req.params.id){
                return res.status(401)
                .redirect('/membre/');
            }

            if(isNaN(req.params.id)){
                return res.status(401)
                .redirect('/membre/');
            }

            const id = req.params.id;
            
            const membre_data = await membreService.getById(id);

            res.render('membres/membre_update',{
                title:'Accueil',
                membre:'link',
                membre_data,
                utils:helper
            });
        }catch(err) {console.log(err);
            return res.status((500))
            .redirect('/agent/');
        }
    },
    update:async (req,res)=>{
        const transaction = await sequelize.transaction();
        
        if(!req.body.membre_id){console.log('aucun id')
            return res.status(401)
                .redirect('/membre/');
        }

        try {

            let bodyRequest         = req.body;
    
            const validationSchema  = membreUpdateValidationSchema();
            const validation        = new Validator.DataValidator(validationSchema,bodyRequest);
            
            validation.Validate();
            
            const errors = validation.ValidationResult;

            const membre_id = bodyRequest.membre_id;
            
            if(Object.values(errors).length > 0){console.log('validation',errors);
                    return res.status(401)
                    .redirect('/membre/edit/'+membre_id);
            }else{

                if(req.files && Object.keys(req.files).length !== 0 ){
                    const uploadFile  = req.files.fiche_adhesion;
                    
                    let uniqueId = ((new Date()).getTime()).toString();

                    const updloadPath = "public/documents/"+ uniqueId+'_'+uploadFile.name;
                    const name = uniqueId+'_'+uploadFile.name;

                    uploadFile.mv(updloadPath,async function(err){
                        if(err){
                            transaction.commit();

                            return res.status(401)
                                    .redirect('/membre/edit/'+membre_id);
                        }else{
                            await membreService.update(bodyRequest,name);
                            
                            transaction.commit();

                            return res.status(200)
                                    .redirect('/membre/edit/'+membre_id);
                        }
                    });
                }else{
                    await membreService.update(bodyRequest);
                            
                    transaction.commit();

                    return res.status(200)
                            .redirect('/membre/edit/'+membre_id);
                }
            }
        }catch(error){
            await transaction.rollback();
            console.log(error)
            return res.status(500)
                      .redirect('/membre/');
        }
    },
    destroy:async (req,res)=>{
        try {

            if(!req.params.id){
                return res.status(401)
                .redirect('/membre/');
            }

            if(isNaN(req.params.id)){
                return res.status(401)
                .redirect('/membre/');
            }

            const id = req.params.id;
            
            const membre = await membreService.getById(id);
           
            if(membre != null){
                await membreService.destroy(id);

                return res.status(200)
                .redirect('/membre/');
            }else{
                return res.status(401)
                .redirect('/membre/');
            }
        }catch(err){console.log(err);
            return res.status((500))
            .redirect('/membre/');
        }
    }*/
}