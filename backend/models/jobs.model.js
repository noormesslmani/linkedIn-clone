const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: 'name is required'
    },
    company_id:{
        type: String,
        required: 'company is required'
    },
    employment_type: {
        type: String,
        required: 'job_type is required',
    },
    experience: {
        type: String,
        required: 'experience is required',
    },
    details: {
        type: String,
        required: 'details is required',
    },
    applicants: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User"
        }
    ]
})

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;