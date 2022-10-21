import '../../styles/UserHome.css'
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import NavUser from '../../components/NavUser';
import axios from 'axios';
import { useLocation} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSuitcase, faBell } from '@fortawesome/free-solid-svg-icons'
import {apply} from '../../api';
function JobDetails(){
    const me= JSON.parse(localStorage.me) 
    const applications =me.applications
    const [applied, setapplied]=useState(false)
    const { state } = useLocation();
    
    useEffect(() => {
        if(applications.includes(state.job._id)){
            setapplied(true)
        }
    }, []);
    const handleClick=(e)=>{
        e.preventDefault()
        if(! applications.includes(state.job._id)){
            apply(state.job._id)
            setapplied(true)
        }
    }
    return (
        <>
            <NavUser/>
            <section className='jobs'>
                <div className='job-description'>    
                    <h1>{state.job.title}</h1>
                    <p>{state.job.company[0].name}, {state.job.company[0].city}, {state.job.company[0].country}, {state.job.applicants.length} applicants  </p>
                    <div className='employment-type'>
                        <FontAwesomeIcon icon={faSuitcase} className='suitCase'/>
                        <p>{state.job.employment_type}</p>
                    </div>
                    <button className='easy-apply-btn' onClick={handleClick}>{applied? 'Applied':'Easy Apply'}</button>
                    <h3>Job Description</h3>
                    <p>{state.job.details}</p>
                </div>
            </section>
        </>
        
    );
}
export default JobDetails;