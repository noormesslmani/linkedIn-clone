const User = require('../models/users.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signup = async (req, res)=>{
    const {first_name, last_name, email, password} = req.body;
    try{
        const user = new User();
        user.first_name = first_name;
        user.last_name = last_name;
        user.email = email;
        user.password = await bcrypt.hash(password, 10);

        await user.save();
        res.json(user)
    }catch(err){
        res.status(400).json({
            message: err.message
        })
    }
}

module.exports = {
    signup
}