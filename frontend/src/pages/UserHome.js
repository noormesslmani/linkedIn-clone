import '../styles/UserHome.css'
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import NavUser from '../components/NavUser';
import JobCard from '../components/JobCard';
import {getJobs} from '../api';
function UserHome(){
    const [jobs,setJobs]=useState('');
    getJobs();
    return (
        <>
        <NavUser/>
        <section className='jobs'>
            <div className='job-list'>
                <JobCard/>
            </div>  
        </section>
        </>
        
    );
}
export default UserHome;