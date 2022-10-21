import '../../styles/Company.css'
import React, { useState, useEffect } from 'react';
import NavCompany from '../../components/company/NavCompany';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import AddJob from '../../components/company/JobModal';
function CompanyHome(){
    const me= JSON.parse(localStorage.me) 
    console.log(me.jobs)
    const [jobModal, setJobModal]= useState(false)
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
                    {me.jobs.length==0?<h3>No jobs availbale currently</h3>:<></>}
                </div>
                {jobModal? <AddJob handleClick={handleClick} handleSubmit={handleSubmit} />:<></> }
            </section>
        </>
        
    );
}
export default CompanyHome;