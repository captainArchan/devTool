const jwt = require('jsonwebtoken');

// Author = Wichai Kommongkhun

// verify token from request.header
// token have exp in 2 hour
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
        // error can be token expired and internal error
        console.log(error);
        res.json({ error: 'Invalid token' }).status(401);
    }
}

module.exports.varifyToken = varifyToken;