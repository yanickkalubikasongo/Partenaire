const router = require('express').Router();
const {
   // index,
    create,
    repertoire,
    rep_transaction,
    create_poucentage_depot,
    select_poucentage_depot,
    send_pourcentage,
    on_agence,
    update,
    on_transaction,
    update_transaction,
    rep_province,
    rep_type_piece,
    rep_type_membre,
    create_monnaie,
    rep_etat_civil/*,
    destroy,*/
} = require('../controllers/AgenceController');

router.post('/create_monnaie',create_monnaie);
router.post('/create',create);
router.post('/update',update);
router.post('/repertoire',repertoire);
router.post('/rep_transaction',rep_transaction);
router.post('/on_transaction',on_transaction);
router.post('/create_poucentage_depot',create_poucentage_depot);
router.post('/select_poucentage_depot',select_poucentage_depot);
router.post('/send_pourcentage',send_pourcentage);
router.post('/on_agence',on_agence);
router.post('/update_transaction',update_transaction);
router.post('/rep_province',rep_province);
router.post('/rep_type_piece',rep_type_piece);
router.post('/rep_type_membre',rep_type_membre);
router.post('/rep_etat_civil',rep_etat_civil);

module.exports = router;
