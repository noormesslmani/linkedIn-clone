const User = require('../models/users.model');
const Company = require('../models/companies.model');
const Job = require('../models/jobs.model');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');


const createJob = async (req, res) => {
    const {title, employment_type, experience, details} = req.body;
    try{
        const job = new Job();
        job.title = title; 
        job.company_id = req.company._id;
        job.employment_type = employment_type;
        job.experience= experience,
        job.details= details,
        await job.save();
        await Job.findByIdAndUpdate(job._id,{$push:{company:req.company._id}} )
        await Company.findOneAndUpdate({ email: req.company.email },{$push:{jobs:job._id} });
        res.json(job);
    }catch(err){
        res.status(400).json({
            message: err.message
        })
    }
    
}

const getJobs= async (req, res) => {
    console.log(req.company.email)
    try{
        const company = await Company.findOne({ email: req.company.email }).populate("jobs")
        res.json(company);
    }catch(err){
        console.log(req);
        res.status(400).json({
            message: err.message
        })
    }
};
 
const getApplicants=async (req, res) => {
    try{
        const company = await Company.findOne({ email: req.company.email }).populate({
            path:'jobs',
            populate: { path: 'applicants' }
        })
        res.json(company);
    }catch(err){
        console.log(req);
        res.status(400).json({
            message: err.message
        })
    }
};
 

module.exports = {
    createJob,
    getJobs,
    getApplicants
}