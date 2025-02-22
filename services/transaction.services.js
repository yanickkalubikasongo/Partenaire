const {sequelize,Op,Transaction} = require('../config/db');
const fs = require('fs')

module.exports={
    transaction : async (dataTransaction)=>{
        let trans = await Transaction.findAll({
                where: { 
                    type:dataTransaction.type,
                    devise:dataTransaction.devise
                }
            })
        return trans
    }
};