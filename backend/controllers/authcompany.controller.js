const Company = require('../models/companies.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signupCompany = async (req, res)=>{
    const { email, password} = req.body;
    try{
        const company = new Company();
        company.email = email;
        company.password = await bcrypt.hash(password, 10);

        await user.save();
        res.json(user)
    }catch(err){
        res.status(400).json({
            message: err.message
        })
    }
}

module.exports = {
    signupCompany
}