const router = require('express').Router();
const { enreg_partenaire,find_gerant,tableau_bord,update_partner } = require('../controllers/partenaire.controller');

router.post('/enreg_partenaire',enreg_partenaire);
router.post('/update_partner',update_partner);
router.post('/tableau_bord',tableau_bord);
router.post('/find_gerant',find_gerant);

module.exports = router;
