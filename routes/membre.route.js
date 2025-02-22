const router = require('express').Router();
const {
    rep_membre,
    store,
    rep_nationalite,
    rep_etat,
    on_membre,
    update,
    find_membre,
    bannir,
    all_part
} = require('../controllers/MembreController');

router.post('/rep_membre',rep_membre);
router.post('/all_part',all_part);
router.post('/find_membre',find_membre);
router.post('/store',store);
router.post('/rep_nationalite/',rep_nationalite);
router.post('/rep_etat/',rep_etat);
router.post('/on_membre/',on_membre);
router.post('/update/',update);
router.post('/bannir/',bannir);

module.exports = router;
