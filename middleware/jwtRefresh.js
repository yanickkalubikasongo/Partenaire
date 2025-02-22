const jwt = require('jsonwebtoken');

module.exports = ((req,res)=>{
    const token = req.cookies.token;

    if(!token){
        return res.status(401).end();
    }
    
    let payload;
    
    try {
        payload = jwt.verify(token,'test');   
    }catch (error) {
        if(e instanceof jwt.JsonWebTokenError){
            return res.status(401).end();
        }

        return res.status(400).end();
    }

    const currentSeconds = Math.round(Number(new Date) / 1000);

    if(payload.exp - currentSeconds > 30){
        return res.status(400).end();
    }

    const newToken = jwt.sign({email:payload.email},'test',{
        algorithm:"HS256",
        expiresIn:'300s'
    });

    res.cookie('token',token,{maxAge:300 * 1000});

    res.end();
});
