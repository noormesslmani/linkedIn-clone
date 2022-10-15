const mongoose = require('mongoose');




const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: 'first_name is required'
    },
    last_name: {
        type: String,
        required: 'last_name is required'
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
    profile_picture: {
        type: String,
        default: null
    },
    cover_photo: {
        type: String,
        default: null
    },
    country: {
        type: String,
        default: null
    },
    city: {
        type: String,
        default: null
    },
    experience: [{
        title: {
            type: String,
        },
        employment_type: {
            type: String,
        },
        company_name: {
            type: String,
        },
        location: {
            type: String,
        },
        start_date: {
            type: Date,
        },
        end_date: {
            type: Date,
        },
        industry: {
            type: String,
        },
        description: {
            type: String,
        },
    }],
    eduction: [{
        school: {
            type: String,
        },
        degree: {
            type: String,
        },
        field: {
            type: String,
        },
        start_date: {
            type: Date,
        },
        end_date: {
            type: Date,
        },
        grade: {
            type: String,
        },
        description: {
            type: String,
        },
    }]
})

const User = mongoose.model('User', userSchema);

module.exports = User;