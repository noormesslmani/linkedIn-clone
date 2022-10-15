const User = require('../models/users.model');
const bcrypt = require('bcrypt');

const updateUser = async (req, res) => {
    const {id, ...data} = req.body
    User.findByIdAndUpdate(id,{
        first_name: data.first_name,
        last_name: data.last_name,
        headers: data.headers,
        country: data.country,
        city: data.city,
        profile_picture: data.profile_picture,
        cover_photo: data.cover_photo,
        password: await bcrypt.hash(data.password, 10),   
    })
    .then((user)=>res.send(user))
    .catch((err)=>res.status(400).send(err))
}


const getUsers = async (req, res) => {
    User.find()
    .then((user)=>res.status(200).json(user))
    .catch((err)=>res.status(400).json(err))
}
module.exports = {
    updateUser,
    getUsers
}
