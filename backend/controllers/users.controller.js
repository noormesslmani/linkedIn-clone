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

const updateExperience = async (req, res) => {
    const {id, ...data} = req.body
    User.findByIdAndUpdate(id,{
        $push: {
            "experience": {
            title: data.title,
            employment_type: data.employment_type,
            company_name: data.company_name,
            location: data.location,
            start_date: data.start_date,
            end_date: data.end_date,
            industry: data.industry,
            description: data.description,
            }
        },
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
    getUsers,
    updateExperience
}


// $push:{
//     "education":{
//         school: data.school,
//         degree: data.degree,
//         field: data.field,
//         start_date: data.start_edu_date,
//         end_date: data.end_edu_date,
//         grade: data.grade,
//     }
// } 