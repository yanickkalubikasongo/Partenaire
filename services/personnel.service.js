const {sequelize,Op,Personnel,Partenaire_membre,Membre,User,VenteIm} = require('../config/db');
const fs = require('fs')
const bcrypt = require("bcrypt");
const partenaireServices = require('../services/partenaire.service');
const agenceServices = require('../services/agence.service');
const membreService = require('../services/membre.service');
const axios = require('axios');

module.exports={
    update_profil_user: async (data,id_compte)=>{
        await User.update(
            { 
                email           :data.adresse_electronique,
                adresse_physique:data.adresse_physique,
                telephone       :data.telephone
            }, 
            {
            where: { 
                id : id_compte 
            }
        });
        return 'r'
    },
    check_email_profil: async (email,id_user)=>{
        const [check_email, metadata_] = await sequelize.query("SELECT users.email FROM users WHERE users.email=:email AND users.id <> :id_user",
        {
            replacements: { email:email,id_user:id_user }
        }); 
        const check_email_ = JSON.parse(JSON.stringify(check_email))
        return check_email_
    },
    check_telephone_profil: async (telephone,id_user)=>{
        const [check_telephone, metadata_] = await sequelize.query("SELECT users.telephone FROM users WHERE users.telephone=:tel AND users.id <> :id_user",
        {
            replacements: { tel:telephone,id_user:id_user }
        }); 
        const check_telephone_ = JSON.parse(JSON.stringify(check_telephone))
        return check_telephone_
    },
    enregistrer_personnel : async function (data,file,partenaire){
        try{
            let ps = '', 
                mdp_user =  data.numero_piece,
                salt     = await bcrypt.genSalt(10),
                mdp_hash = await bcrypt.hash(mdp_user,salt),
                response = 10
           
            const path    = "public/photo/"+await this.nb_user()+ file.name,
                namePhoto = "static/photo/"+await this.nb_user()+ file.name
            
            if(await partenaireServices.search_id_compte_partner(partenaire) !=""){
                let prix_im   = await agenceServices.select_price_im(),
                    solde_usd = ((parseFloat(await partenaireServices.solde_partenaire(partenaire,'USD')) - parseFloat(prix_im[0].prix_im_usd)) <= 0) ? true : false,
                    solde_cdf = ((parseFloat(await partenaireServices.solde_partenaire(partenaire,'CDF')) - parseFloat(prix_im[0].prix_im_cdf)) <= 0) ? true : false,
                    solde_eur = ((parseFloat(await partenaireServices.solde_partenaire(partenaire,'EUR')) - parseFloat(prix_im[0].prix_im_usd)) <= 0) ? true : false
            
                if(solde_usd == false || solde_cdf == false || solde_eur == false){  // Si l'un des soldes est insuffisant
                    file.mv(path, async(err) => {
                        if (err) {
                            res.send(err)
                        }else {
                            let id_compte = await partenaireServices.search_id_compte_partner(partenaire),
                                id_config_gen= await agenceServices.config_generales()

                            await sequelize.transaction(async (t) => {
                                if(await this.check_type_piece_and_num_piece(data) == '' && (solde_usd == false || solde_cdf == false || solde_eur == false) ){
                                    let user = await User.create({
                                        prenom             :data.prenom,
                                        nom                :data.nom,
                                        post_nom           :data.postnom,
                                        sexe               :data.sexe,
                                        date_naissance     :data.date_naissance,
                                        lieu_naissance     :data.lieu_naissance,
                                        id_etat_civil      :data.etat_civil,
                                        email              :data.email,
                                        telephone          :data.telephone,
                                        numero_piece       :data.numero_piece,
                                        id_type_piece_ident:data.piece,
                                        adresse_physique   :data.adresse,
                                        photo              :namePhoto,
                                        id_province        :data.province
                                    }, { transaction: t });
                                    let membre = await Membre.create({
                                        id_user        :user.dataValues.id,
                                        id_type_membre :7
                                    }, { transaction: t });
                                    await Partenaire_membre.create({
                                        id_partenaire :partenaire,
                                        id_membre     :membre.dataValues.id,
                                        etat_user     :1
                                    }, { transaction: t });
                                    if(solde_usd == false){
                                        await VenteIm.create({
                                            id_config_generale :prix_im[0].id,
                                            devise             :'USD',
                                            id_compte_money    :id_compte[0].id,
                                            id_config_generale :id_config_gen[0].id
                                        }, { transaction: t });
                                    }else{
                                        if(solde_cdf == false){
                                            await VenteIm.create({
                                                id_config_generale :prix_im[0].id,
                                                devise             :'CDF',
                                                id_compte_money    :id_compte[0].id,
                                                id_config_generale :id_config_gen[0].id
                                            }, { transaction: t });
                                        }else{
                                            if(solde_eur == false){
                                                await VenteIm.create({
                                                    id_config_generale :prix_im[0].id,
                                                    devise             :'EUR',
                                                    id_compte_money    :id_compte[0].id,
                                                    id_config_generale :id_config_gen[0].id
                                                }, { transaction: t });
                                            }
                                        }
                                    }

                                    let code_us=''
                                        code_us += user.dataValues.id
                                    while (code_us.length < 6)  code_us = '0'+code_us

                                    let code_partenaire='',
                                        get_label_patner = await membreService.all_part(partenaire)
                                        code_partenaire += partenaire
                                    while (code_partenaire.length < 4) code_partenaire = '0'+code_partenaire

                                    let numPhone=user.dataValues.telephone,
                                        message =`Votre compte vient d'être crée
                                        avec succès chez ${get_label_patner[0].denomination}
                                        IM : ${code_partenaire+'-'+ code_us}
                                        Merci.`,
                                        url = `https://api2.dream-digital.info/api/SendSMS?api_id=API42124386641&api_password=x3McB19tzd&sms_type=T&encoding=T&sender_id=LoanMe SFN&phonenumber=${numPhone}&textmessage=${message}`;
                                        await axios.get(url);
                                    response = 6
                                }
                            })
                        }
                    })
                }else{
                    if(solde_usd == true) response = 1
                    else{
                        if(solde_cdf == true) response = 2
                        else{
                            if(solde_eur == true) response = 3
                        }
                    }
                    if(solde_usd == true && solde_cdf == true && solde_eur == true) response = 4

                    return response
                }
            }else response = 5
            return response
        } catch (error) {
            res.send('Erreur '+ error)
        }
    },
    check_telephone: async (telephone)=>{
        const [check_telephone, metadata_] = await sequelize.query("SELECT users.telephone FROM users WHERE users.telephone=:tel",
        {
            replacements: { tel:telephone }
        }); 
        const check_telephone_ = JSON.parse(JSON.stringify(check_telephone))
        return check_telephone_
    },
    check_telephone_update: async (telephone,id_user)=>{
        const [check_telephone, metadata_] = await sequelize.query("SELECT users.telephone FROM users WHERE users.telephone=:tel AND users.id<>:id",
        {
            replacements: { tel:telephone,id:id_user }
        }); 
        const check_telephone_ = JSON.parse(JSON.stringify(check_telephone))
        return check_telephone_
    },
    check_email_update: async (email,id_user)=>{
        const [check_email, metadata_] = await sequelize.query("SELECT users.email FROM users WHERE users.email=:email AND users.id<>:id",
        {
            replacements: { email:email,id:id_user }
        }); 
        const check_email_ = JSON.parse(JSON.stringify(check_email))
        return check_email_
    },
    check_email: async (email)=>{
        const [check_email, metadata_] = await sequelize.query("SELECT users.email FROM users WHERE users.email=:email",
        {
            replacements: { email:email }
        }); 
        const check_email_ = JSON.parse(JSON.stringify(check_email))
        return check_email_
    },
    check_email_profil: async (email,id_part)=>{
        const [check_email, metadata_] = await sequelize.query("SELECT partenaires.email FROM partenaires WHERE partenaires.email=:email AND partenaires.id <> :id_part",
        {
            replacements: { email:email,id_part:id_part }
        }); 
        const check_email_ = JSON.parse(JSON.stringify(check_email))
        return check_email_
    },
    check_telephone_profil: async (telephone,id_part)=>{
        const [check_telephone, metadata_] = await sequelize.query("SELECT partenaires.telephone FROM partenaires WHERE partenaires.telephone=:telephone AND partenaires.id <> :id_part",
        {
            replacements: { telephone:telephone,id_part:id_part }
        }); 
        const check_telephone_ = JSON.parse(JSON.stringify(check_telephone))
        return check_telephone_
    },
    check_type_piece_and_num_piece : async (data)=>{ 
        const [on_personne, meta] = await sequelize.query("SELECT users.* FROM users WHERE users.numero_piece=:num_piece AND users.id_type_piece_ident=:id_type",
        {
            replacements: { num_piece:data.numero_piece,id_type:data.piece }
        });
        let on_personne_ = JSON.parse(JSON.stringify(on_personne))
        return on_personne_
    },
    nb_user : async ()=>{ 
        const [on_personne, meta] = await sequelize.query("SELECT COUNT(users.id) nb FROM users");
        let on_personne_ = JSON.parse(JSON.stringify(on_personne))
        return on_personne_[0].nb
    },
    check_pseudo : async (pseudo)=>{ 
        const [on_personne, meta] = await sequelize.query("SELECT users.pseudo FROM users WHERE users.pseudo=:ps",
        {
            replacements: { ps:pseudo }
        });
        let on_personne_ = JSON.parse(JSON.stringify(on_personne))
        return on_personne_
    },
    rep_personnel : async (dataMembre)=>{
        let pers = ''
        if(dataMembre.type == 1){
            const [pers_, meta] = await sequelize.query("SELECT membres.prenom,membres.id,membres.type_membre,membres.email,membres.telephone,membres.adresse,membres.postnom,membres.nom,membres.sexe,membres.data_naissance,membres.lieu_naissance,agences.denomination FROM membres INNER JOIN agences ON agences.id=membres.id_agence WHERE membres.type_membre=:type_membre",
            {
                replacements: { type_membre:dataMembre.id }
            })
            pers = JSON.parse(JSON.stringify(pers_))
        }else{
            const [pers_, meta] = await sequelize.query("SELECT membres.prenom,membres.id,membres.type_membre,membres.email,membres.telephone,membres.adresse,membres.postnom,membres.nom,membres.sexe,membres.data_naissance,membres.lieu_naissance,agences.denomination FROM membres INNER JOIN agences ON agences.id=membres.id_agence WHERE membres.id=:id",
            {
                replacements: { id:dataMembre.id }
            })
            pers = JSON.parse(JSON.stringify(pers_))
        }
        return pers
    },
    on_personnel : async (data)=>{ 
        const [on_personne, meta] = await sequelize.query("SELECT membres.type_membre,membres.prenom,membres.email,membres.telephone,membres.adresse,membres.postnom,membres.nom,membres.sexe,membres.data_naissance,membres.lieu_naissance,agences.id id_agence,agences.denomination FROM membres INNER JOIN agences ON agences.id=membres.id_agence WHERE membres.id=:id",
        {
            replacements: { id:data.id }
        });
        let on_personne_ = JSON.parse(JSON.stringify(on_personne))
        return on_personne_
    },
    update_personnel : async (data)=>{
        await Personnel.update(
            { 
                id_agence:data.agence,
                type_membre:data.type 
            }, 
            {
            where: { 
                id : data.id_personnel 
            }
        });
    }
};
