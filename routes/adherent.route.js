const router = require('express').Router();
const {/*
    index,
    create,
    store,
    edit,
    update,
    destroy,
    get_credit,
    list_member*/
    get_adherent_by_im_id_piece,
    create_compte,
    rep_compte
} = require('../controllers/adherentController');

router.post('/get_adherent_by_im_id_piece',get_adherent_by_im_id_piece);
router.post('/create_compte',create_compte);
router.post('/rep_compte',rep_compte);
/*
router.get('/',index);
router.get('/create',create);
router.post('/get_credit',get_credit);
router.post('/store',store);
router.get('/edit/:id',edit);
router.post('/update/',update);
router.get('/destroy/:id',destroy);
router.post('/list_member',list_member);
*/
module.exports = router;
