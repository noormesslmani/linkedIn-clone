const Company = require('../models/companies.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signupCompany = async (req, res)=>{
    const { email, password, name, city, country} = req.body;
    try{
        const company = new Company();
        company.name = name;
        company.city = city;
        company.country = country;
        company.email = email;
        company.password = await bcrypt.hash(password, 10);
        await company.save();
        const token = jwt.sign({email: company.email, id: company.id}, process.env.JWT_SECRET_KEY, {
            expiresIn: '2h'
        });
        res.json({company:company, token:token})
    }catch(err){
        res.status(400).json({
            message: err.message
        })
    }
}

const loginCompany = async (req, res)=>{
    const {email, password} = req.body;
    
    const company = await Company.findOne({email}).select("+password");

    if(!company) return res.status(404).json({message: "Invalid Credentials"});

    const isMatch = bcrypt.compare(password, company.password);
    if(!isMatch) return res.status(404).json({message: "Invalid Credentials"});

    const token = jwt.sign({email: company.email, name: company.name}, process.env.JWT_SECRET_KEY, {
        expiresIn: '1h'
    });
    res.status(200).json(token)
}

module.exports = {
    signupCompany,
    loginCompany
}