const Company = require('../models/companies.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signupCompany = async (req, res)=>{
    const {name, country, city, email, password, about} = req.body;
    try{
        const company = new Company();
        company.name = name;
        company.country = country;
        company.city = city;
        company.about = about;
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