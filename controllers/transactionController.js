require('dotenv').config();
const bodyParser = require('body-parser')
const {sequelize} = require('../config/db');
const transactionServices = require('../services/transaction.services');

module.exports={
    rep_transaction:async (req,res)=>{
        res.json({ donnee: 'salut'//await transactionServices.transaction(req.body)
        });
    }
}
