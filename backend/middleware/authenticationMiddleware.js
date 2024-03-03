const jwt = require('jsonwebtoken');

// Author = Wichai Kommongkhun

const varifyToken = async (req, res, next) => {
    const token = req.header('Authorization');

    if (!token){
        return res.json({error: "Access denied"}).status(401);
    }

    try{
        const decode = jwt.verify(token, process.env.SECRETKEY);
        req.user_id = decode.user_id;
        next();
    }catch(error){
        console.log(error);
        res.json({ error: 'Invalid token' }).status(401);
    }
}

module.exports.varifyToken = varifyToken;