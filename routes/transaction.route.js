const router = require('express').Router();
const { rep_transaction } = require('../controllers/transactionController');

router.post('/transaction',rep_transaction);

module.exports = router;
