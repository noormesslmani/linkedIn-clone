const express = require('express');
require('dotenv').config();
require('./config/db.config')
const app = express();
const cors = require('cors');
app.use(express.json());

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(cors());


const authRoutes = require('./routes/auth.routes');
app.use('/auth', authRoutes) //path extension for auth

const usersRoutes = require('./routes/users.routes');
app.use('/users', usersRoutes) //path extension for users

const companiesRoutes = require('./routes/companies.routes');
app.use('/companies', companiesRoutes) //path extension for companies


const jobsRoutes = require('./routes/jobs.routes');
app.use('/jobs', jobsRoutes) //path extension for jobs


//prot is in env
app.listen(process.env.PORT, (err)=>{
    if(err) throw err;
    console.log(`server running on port ${process.env.PORT}`);
})