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
    users_follow:[{
        user_id:{
            type: String,
            default: null
        }
    }],
    companies_follow:[{
        company_id:{
            type: String,
            default: null
        }
    }],
    skills:[],
    experience: [{
        title: {
            type: String,
            default: null
        },
        employment_type: {
            type: String,
            default: null
        },
        company_name: {
            type: String,
            default: null
        },
        location: {
            type: String,
            default: null
        },
        start_date: {
            type: Date,
            default: null
        },
        end_date: {
            type: Date,
            default: null
        },
        industry: {
            type: String,
            default: null
        },
        description: {
            type: String,
            default: null
        },
    }],
    education: [{
        school: {
            type: String,
            default: null
        },
        degree: {
            type: String,
            default: null
        },
        field: {
            type: String,
            default: null
        },
        start_date: {
            type: Date,
            default: null
        },
        end_date: {
            type: Date,
            default: null
        },
        grade: {
            type: String,
            default: null
        }
    }]
})

const User = mongoose.model('User', userSchema);

module.exports = User;