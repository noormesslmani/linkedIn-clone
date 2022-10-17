const User = require('../models/users.model');
const Job = require('../models/jobs.model');
const Company = require('../models/companies.model');
const bcrypt = require('bcrypt');

const updateUser = async (req, res) => {
    const {data} = req.body
    console.log(req.user.email)
    User.findOneAndUpdate({ email: req.user.email },{
        first_name: data.first_name,
        last_name: data.last_name,
        headers: data.headers,
        country: data.country,
        city: data.city,
        profile_picture: data.profile_picture,
        cover_photo: data.cover_photo,
        password: await bcrypt.hash(data.password, 10),   
    }, { new: true })
    .then((user)=>res.json(user))
    .catch((err)=>res.status(400).json(err))
}
const me= async(req, res)=>{
    const user = req.user;
    res.json({user: user})
}
const updateExperience = async (req, res) => {
    const data = req.body
    console.log(req.user.email)
    User.findOneAndUpdate({ email: req.user.email },{
        $push: {
            "experience": {
            title: data.title,
            employment_type: data.employment_type,
            company_name: data.company_name,
            location: data.location,
            start_month: data.start_month,
            start_year: data.start_year,
            end_month: data.end_month,
            end_year: data.end_year,
            industry: data.industry,
            description: data.description,
            }
        },
    },  { new: true })
    .then((user)=>res.json(user))
    .catch((err)=>res.status(400).json(err))
}


const updateEducation = async (req, res) => {
    const data = req.body
    User.findOneAndUpdate({email: req.user.email },{
        $push:{
            "education":{
            school: data.school,
            degree: data.degree,
            field: data.field,
            start_month: data.start_month,
            start_year: data.start_year,
            end_month: data.end_month,
            end_year: data.end_year,
            grade: data.grade,}
        } 
    }, { new: true })
    .then((user)=>res.json(user))
    .catch((err)=>res.status(400).json(err))
}

const updateSkills = async (req, res) => {
    const data = req.body
    User.findOneAndUpdate({ email: req.user.email },{
        $push:{"skills":data.skill} 
    }, { new: true })
    .then((user)=>res.json(user))
    .catch((err)=>res.status(400).json(err))
}

const followUser= async(req,res)=>{
    const data = req.body 
    User.findOneAndUpdate({ email: req.user.email },{
        $push:{ users_follow: data.user_id} 
    })
    .then((user)=>res.json(user))
    .catch((err)=>res.status(400).json(err))
}
const followCompany= async(req,res)=>{
    const data = req.body 
    User.findOneAndUpdate({ email: req.user.email },{
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
const getCompanies=async (req, res) => {
    Company.find()
    .then((company)=>res.status(200).json(company))
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
    const data = req.body 
    await Job.findByIdAndUpdate(data.job_id,{
        $push:{ applicants: req.user._id} 
    })
    User.findOneAndUpdate({ email: req.user.email },{
        $push:{ applications: data.job_id
        } 
    })
    .then((user)=>res.send(user))
    .catch((err)=>res.status(400).json(err))  
}

const getApplications = async (req, res) => {
    try{
        const user = await User.findOne({ email: req.user.email }).populate("applications")
        res.json(user);
    }catch(err){
        res.status(400).json({
            message: err.message
        })
    }
};

const getFollowingJobs = async (req, res) => {
    try{
        const user = await User.findOne({ email: req.user.email }).populate({
            path:'companies_follow',
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
    me,
    getCompanies
}



