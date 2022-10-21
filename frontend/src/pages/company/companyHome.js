import '../../styles/Company.css'
import React, { useState, useEffect } from 'react';
import NavCompany from '../../components/company/NavCompany';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { displayJobs } from '../../api';
import AddJob from '../../components/company/JobModal';
import JobCard from '../../components/company/JobCard';
function CompanyHome(){
    const me= JSON.parse(localStorage.me) 
    const [jobModal, setJobModal]= useState(false)
    // const [jobs, setJobs]= useState([])
    useEffect(() => {
        displayJobs();
    }, []);
    console.log(localStorage)
    const jobs=JSON.parse(localStorage.jobs)
    console.log(jobs)
    const addJob=()=>{
        setJobModal(true)
    }
    const handleClick=(e)=>{
        e.preventDefault()
        setJobModal(false)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
    }
    return (
        <>
            <NavCompany/>
            <section className='main-section'>
                <h1>Jobs list</h1>
                
                <div className='jobs-container'>
                    <FontAwesomeIcon icon={faCirclePlus} className='add-job' onClick={addJob} />
                    {jobs==[]?<h3>No jobs availbale currently</h3>:<></>}
                    {jobs.map((job)=><JobCard job={job}/>)}
                </div>
                {jobModal? <AddJob handleClick={handleClick} handleSubmit={handleSubmit} />:<></> }
            </section>
        </>
        
    );
}
export default CompanyHome;