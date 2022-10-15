const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'name is required'
    },
    headers: {
        type: String,
        default: null
    },
    country: {
        type: String,
        required: 'country is required'
    },
    city: {
        type: String,
        required: 'city is required'
    },
    about: {
        type: String,
        required: 'about is required'
    },
    profile_picture: {
        type: String,
        default: null
    },
    cover_photo: {
        type: String,
        default: null
    },
    jobs: [{
        title: {
            type: String,
        },
        employment_type: {
            type: String,
        },
        experience: {
            type: String,
        },
        details: {
            type: String,
        }
    }],
})

const Company = mongoose.model('Company', companySchema);

module.exports = Company;