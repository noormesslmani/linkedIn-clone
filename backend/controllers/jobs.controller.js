const Job = require('../models/jobs.model');



const getAllJobs= async (req, res) => {
    Job.find().populate('company')
    .then((job)=>res.status(200).json(job))
    .catch((err)=>res.status(400).json(err))
};

module.exports = {
    getAllJobs
}