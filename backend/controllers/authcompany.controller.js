const Company = require('../models/companies.model');
const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

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
        res.json(company)
    }catch(err){
        res.status(400).json({
            message: err.message
        })
    }
}

module.exports = {
    signupCompany
}