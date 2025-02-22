const router = require('express').Router();
const { enreg_personnel,rep_personnel,on_personnel,update_personnel,profil_user } = require('../controllers/personnel.controller');

router.post('/enreg_personnel',enreg_personnel);
router.post('/rep_personnel',rep_personnel);
router.post('/on_personnel',on_personnel);
router.post('/update_personnel',update_personnel);
router.post('/profil_user',profil_user);

module.exports = router;
