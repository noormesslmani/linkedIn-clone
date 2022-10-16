const User = require('../models/users.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (req, res)=>{
    const {email, password} = req.body;
    
    const user = await User.findOne({email}).select("+password");
    
    if(!user) return res.status(404).json({message: "Invalid Credentials"});

    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) return res.status(404).json({message: "Invalid Credentials"});

    const token = jwt.sign({email: user.email, id: user.id}, process.env.JWT_SECRET_KEY, {
        expiresIn: '2h'
    });
    res.status(200).json({token: token, user:user})
}


const signup = async (req, res)=>{
    const {first_name, last_name, email, password} = req.body;
    
    try{
        const user = new User();
        user.first_name = first_name;
        user.last_name = last_name;
        user.email = email;
        user.password = await bcrypt.hash(password, 10);
        await user.save();
        const token = jwt.sign({email: user.email, id: user.id}, process.env.JWT_SECRET_KEY, {
            expiresIn: '2h'
        });
        res.json({user:user, token:token})
    }catch(err){
        res.status(400).json({
            message: err.message
        })
    }
}

module.exports = {
    signup,
    login
}