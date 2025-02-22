const router = require('express').Router();
const { accueil,specia,enregistrer_specialiste,enregistrer_retrait_specialiste,enreg_modifier,enregistrer_desaffectation,activation_adm,Suppression_adm,desactivation_adm,desactiver_compte,Rejetter_compte,Activer_compte,compte,affiliation,enregistrer_compte_admin,compte_administrateur,enregistrer_affection,nouvelle_affectation,Nouvelle_affiliation,formulaire_affiliation,repertoire_compte_adm,repertoire_compte,formulaire_compte, enregistrer,supprimer_compte } = require('../controllers/UtilisateurController');

router.get('/',accueil)
router.post('/enreg_modification',enreg_modifier)
router.post('/enregistrer_compte_admin',enregistrer_compte_admin);
router.get('/compte',compte);
router.get('/compte_administrateur',compte_administrateur);
router.get('/compte_administrateur/:message_compte_adm',compte_administrateur);
router.post('/formulaire_compte',formulaire_compte);
router.get('/formulaire_compte',formulaire_compte);
router.get('/formulaire_compte/:message/:id_hopital_',formulaire_compte);
router.post('/enregistrer_compte',enregistrer);
router.post('/repertoire_compte',repertoire_compte);
router.get('/repertoire_compte',repertoire_compte);
router.post('/activer',Activer_compte);
router.post('/rejetter',Rejetter_compte);
router.post('/desactiver',desactiver_compte);
router.post('/supprimer',supprimer_compte);

//adm plateforme

router.post('/Suppression_adm',Suppression_adm);
router.post('/desactivation_adm',desactivation_adm);
router.post('/activation_adm',activation_adm);

router.get('/affiliation/:msg_alerte_affiliation',affiliation);

router.get('/repertoire_compte_adm',repertoire_compte_adm);
router.post('/formulaire_affiliation',formulaire_affiliation);
router.post('/Nouvelle_affiliation',Nouvelle_affiliation);
router.post('/enregistrer_affection',enregistrer_affection);
router.post('/enregistrer_desaffectation',enregistrer_desaffectation);
router.get('/nouvelle_affectation',nouvelle_affectation);
router.get('/nouvelle_affectation/:message_affecation',nouvelle_affectation);
router.get('/affiliation',affiliation);
router.get('/specia',specia)
router.post('/enregistrer_specialiste',enregistrer_specialiste);
router.get('/specia/:message_specialiste',specia);
router.post('/enregistrer_retrait_specialiste',enregistrer_retrait_specialiste);
module.exports = router;
