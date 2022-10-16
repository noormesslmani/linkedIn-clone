const User = require('../models/users.model');
const Job = require('../models/jobs.model');
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
    .then((user)=>res.json(user))
    .catch((err)=>res.status(400).json(err))
}
const me= async(req, res)=>{
    const user = req.user;
    res.json({user: user})
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
    .then((user)=>res.json(user))
    .catch((err)=>res.status(400).json(err))
}


const updateEducation = async (req, res) => {
    const {id, ...data} = req.body
    User.findByIdAndUpdate(id,{
        $push:{
            "education":{
            school: data.school,
            degree: data.degree,
            field: data.field,
            start_date: data.start_edu_date,
            end_date: data.end_edu_date,
            grade: data.grade,}
        } 
    })
    .then((user)=>res.json(user))
    .catch((err)=>res.status(400).json(err))
}

const updateSkills = async (req, res) => {
    const {id, ...data} = req.body
    User.findByIdAndUpdate(id,{
        $push:{"skills":data.skill} 
    })
    .then((user)=>res.json(user))
    .catch((err)=>res.status(400).json(err))
}

const followUser= async(req,res)=>{
    const {id, ...data} = req.body 
    User.findByIdAndUpdate(id,{
        $push:{ users_follow: data.user_id} 
    })
    .then((user)=>res.json(user))
    .catch((err)=>res.status(400).json(err))
}
const followCompany= async(req,res)=>{
    const {id, ...data} = req.body 
    User.findByIdAndUpdate(id,{
        $push:{ companies_follow: data.company_id} 
    })
    .then((user)=>res.json(user))
    .catch((err)=>res.status(400).json(err))
}
const getUsers = async (req, res) => {
    User.find()
    .then((user)=>res.status(200).json(user))
    .catch((err)=>res.status(400).json(err))
}

const getUser= async (req, res) => {
    const {id} = req.query;
    try{
        const user = await User.findById(id)
        res.json(user);
    }catch(err){
        console.log(req);
        res.status(400).json({
            message: err.message
        })
    }
};

const apply= async (req, res) => {
    const {id, ...data} = req.body 
    await Job.findByIdAndUpdate(data.job_id,{
        $push:{ applicants: id} 
    })
    User.findByIdAndUpdate(id,{
        $push:{ applications: data.job_id
        } 
    })
    .then((user)=>res.send(user))
    .catch((err)=>res.status(400).json(err))
    
}

const getApplications = async (req, res) => {
    const {id} = req.params 
    try{
        const user = await User.findById(id).populate("applications")
        res.json(user);
    }catch(err){
        res.status(400).json({
            message: err.message
        })
    }
};

const getFollowingJobs = async (req, res) => {
    const {id} = req.query 
    try{
        const user = await User.findById(id).populate({
            path: 'companies_follow',
            populate: { path: 'jobs' }
        }).select('companies_follow');
        res.json(user);
    }catch(err){
        res.status(400).json({
            message: err.message
        })
    }
};

module.exports = {
    updateUser,
    getUsers,
    getUser,
    updateExperience,
    updateEducation,
    followUser,
    updateSkills,
    apply,
    getApplications,
    followCompany,
    getFollowingJobs,
    me
}



