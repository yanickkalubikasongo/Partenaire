const router = require('express').Router();
const { index,mdp_oublie,actualisation,traitement_deconnexion,enregister_modif_mdp,create_new_mdp,deconnexion,changer_mdp,authentification_admin } = require('../controllers/HomeController');

router.get('/',index);
//router.get('/tableau_bord',tableau_bord);
router.get('/mdp_oublie',mdp_oublie);
router.get('/mdp_oublie/:msg_echec_recup_mdp',mdp_oublie);

router.get('/administrateur',index);
router.post('/administrateur',index);
router.get('/administrateur/:message',index);
router.post('/authentification_admin',authentification_admin);
router.get('/actualisation/:connexion1',actualisation);
router.get('/actualisation',actualisation);
router.get('/changer_mdp',changer_mdp);
router.get('/changer_mdp/:erreur',changer_mdp);
router.post('/enregister_modif_mdp',enregister_modif_mdp);
router.get('/enregister_modif_mdp/:msg_err_new_mdp',enregister_modif_mdp);
router.post('/create_new_mdp',create_new_mdp);
router.get('/deconnexion',deconnexion);
// router.get('/deconnexion_admin',deconnexion_admin);
// router.post('/deconnexion_admin',deconnexion_admin);

router.get('/traitement_deconnexion',traitement_deconnexion);

module.exports = router;
