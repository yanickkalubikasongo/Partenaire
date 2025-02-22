const router = require('express').Router();
const { journal_connexion,journal_connexion_adm,voir_profil_simple_utilisateur,enreg_modif_user_hop,modifier_user_hopital,voir_profil_user_hopital,modification_profile_adm,voir_profil_adm_hopital,modifier,voir_profil_adm_platforme,enreg_modifier } = require('../controllers/AdministrationController');
 
router.get('/journal_connexion',journal_connexion)
router.get('/journal_connexion_adm',journal_connexion_adm)
router.post('/modifier',modifier)
router.get('/modifier',modifier)

router.get('/modifier_user_hopital/:message',modifier_user_hopital)
router.get('/modifier_user_hopital',modifier_user_hopital)

router.post('/modification_profile_adm',modification_profile_adm)
router.get('/modifier/:message',modifier)
router.post('/enreg_modification',enreg_modifier)
router.post('/enreg_modif_user_hop',enreg_modif_user_hop)

router.get('/voir_profil_simple_user',voir_profil_simple_utilisateur)
router.get('/voir_profil_adm_platforme',voir_profil_adm_platforme)
router.post('/voir_profil_adm_platforme',voir_profil_adm_platforme)
router.post('/voir_profil_user_hopital',voir_profil_user_hopital)
router.get('/voir_profil_adm_hopital',voir_profil_adm_hopital)

module.exports = router;
