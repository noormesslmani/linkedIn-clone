const jwt = require('jsonwebtoken');
const Company = require('../models/companies.model');

const authMiddleware = async (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];

    if(!token) return res.status(401).json({message: "Unauthorized"}) //no token was sent in the headers
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY); //returns name, email, ...
        const company = await Company.findOne({email: decoded.email}).lean()
        req.company = company; //...gets all the properties of the user 
        next()

    }catch(err){
        return res.status(401).json({message: "Unauthorized"})
    }

}

module.exports = authMiddleware;