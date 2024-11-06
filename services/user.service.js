const config  =  require('../config/db');
const {
    User
} = config;

module.exports={
    create:async function(credentials){
        const user =  await  User.create({
            nom             :credentials.nom,
            email           :credentials.email,
            etablissement_id:credentials.etablissement_id,
            mot_de_passe    :credentials.mot_de_passe,
            groupe_id       :credentials.groupe_id
        });
        
        return  user;
    },
    update:async function(user){
        const id = user.id;
        delete user.id;

        await  User.update(user,{
            where:{
                id:id 
            }
        });
        
        return  await User.findOne({
            where:{
                id:id
            }
        });
    },
    getUser:async function(){

        const users = await User.findAll();
        
        return users;
    },
    accountExist:async function(email){
        const userExist = await User.findOne({
            where:{
                email:email
            }
        });

        return userExist;
    
    }
};
