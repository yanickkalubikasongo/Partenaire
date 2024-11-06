const jwt = require('jsonwebtoken');

module.exports = ((req,res,next)=>{
    const token = req.cookies.token;

    if(!token){
        return res.status(401).end();
    }

    let payload;

    try {
        payload = jwt.verify(token,'test');   
    }catch (error) {
        if(e instanceof jwt.JsonWebTokenError){
            // return res.status(401).end();
            return res.status(401).send("Invalide token");
        }

        return res.status(400).end();
    }

    return next();

    // res.send('Welcome'+payload.email);
});

            
            // if(!email || !password){
            //     return status(401).send();
            // }

            // const token = jwt.sign({email},JWT_KEY,{
            //     algorithm:"HS256",
            //     expiresIn:JWT_EXPIRY_SECONDS
            // });
            
            // console.log();

            // res.cookie('token',token,{maxAge:300 * 1000});

            // res.send('token :'+ token);
            // res.status()

            // res.end();