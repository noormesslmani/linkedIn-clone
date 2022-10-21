import '../../styles/Company.css'
import React, { useState, useEffect } from 'react';
import NavCompany from '../../components/company/NavCompany';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { displayJobs, createJob } from '../../api';
import AddJob from '../../components/company/JobModal';
import JobCard from '../../components/company/JobCard';
function CompanyHome(){
    const [jobModal, setJobModal]= useState(false)
    const [title, setTitle]=useState('')
    const [type, setType]=useState('')
    const [experience, setExperience]=useState('')
    const [description, setDescription]=useState('')
    const [missingFields, setMissingFields]=useState(false)
    const [jobs, setJobs]= useState([])
    const [newJob, setnewJob]=useState(false)
    useEffect(() => {
        displayJobs(setJobs);
    });
    console.log(jobs)
    const addJob=()=>{
        setJobModal(true)
        setMissingFields(false)
    }
    const handleClick=(e)=>{
        e.preventDefault()
        setJobModal(false)
    }
    const handleSubmit=(e)=>{
        setMissingFields(false)
        e.preventDefault()
        if(title!='' && type!='' && experience!='' && description!=''){
            console.log(title)
            console.log(type)
            console.log(experience)
            console.log(description)
            createJob(title, type, experience, description) 
            setJobModal(false)
        }
        else{
            setMissingFields(true)
        }
    }
    return (
        <>
            <NavCompany/>
            <section className='main-section'>
                <h1 className='title'>Jobs list</h1>
                
                <div className='jobs-container'>
                    <FontAwesomeIcon icon={faCirclePlus} className='add-job' onClick={addJob} />
                    {jobs==[]?<h3>No jobs availbale currently</h3>:<></>}
                    {jobs.map((job)=><JobCard job={job}/>)}
                </div>
                {jobModal? <AddJob handleClick={handleClick} handleSubmit={handleSubmit} setTitle={setTitle}
                setExperience={setExperience} setDescription={setDescription} setType={setType} missingFields={missingFields}/>:<></> }
            </section>
        </>
        
    );
}
export default CompanyHome;