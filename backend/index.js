const express = require('express');
require('dotenv').config();
require('./config/db.config')
const app = express();
app.use(express.json());

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