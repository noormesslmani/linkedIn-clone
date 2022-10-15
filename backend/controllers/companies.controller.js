const User = require('../models/users.model');
const Company = require('../models/companies.model');
const Job = require('../models/jobs.model');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');


const createJob = async (req, res) => {
    const {title, company_id , employment_type, experience, details} = req.body;
    try{
        const job = new Job();
        job.title = title; 
        job.company_id = company_id;
        job.employment_type = employment_type;
        job.experience= experience,
        job.details= details
        await job.save();
        await Company.findByIdAndUpdate(company_id,{$push:{jobs:job._id} });
        res.json(job);
    }catch(err){
        res.status(400).json({
            message: err.message
        })
    }
    
}

const getJobs= async (req, res) => {
    const {id} = req.query;
    try{
        const company = await Company.findById(id).populate("jobs")
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
    getJobs
}