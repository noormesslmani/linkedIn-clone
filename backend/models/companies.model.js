const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'name is required'
    },
    email: {
        type: String,
        required: 'email is required',
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: 'password is required',
        select: false
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
        default: null
    },
    profile_picture: {
        type: String,
        default: null
    },
    cover_photo: {
        type: String,
        default: null
    },
    jobs: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Job"
        }
    ],
    users_follow: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User"
        }
    ]
})

const Company = mongoose.model('Company', companySchema);

module.exports = Company;