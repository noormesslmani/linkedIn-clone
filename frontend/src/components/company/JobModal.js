import React, { useState } from 'react';
import '../../styles/Company.css'
export default function AddJob({handleClick, handleSubmit, setTitle, setType, setExperience, setDescription, missingFields}) {
    const handleTitle=(e)=>{
        setTitle(e.target.value)
    }
    const handleType=(e)=>{
        setType(e.target.value)
    }
    const handleExperience=(e)=>{
        setExperience(e.target.value)
    }
    const handleDescription=(e)=>{
        setDescription(e.target.value)
    }
    return(
        <div className='add-modal'>
            <form className='content'>
                <h2 className='submit-text'>Create a New Job</h2>
                <div className='job-details-row'>
                    <label className="label">Job Title*</label>
                    <input className="input" type="text" placeholder='Job Title' onChange={handleTitle} />
                </div>
                <div className='job-details-row'>
                    <label className="label">Employment Type</label>
                    <input className="input" type="text" placeholder='Employment Type' onChange={handleType}  />
                </div>
                <div className='job-details-row'>
                    <label className="label">Experience</label>
                    <input className="input" type="text" placeholder='Experience' onChange={handleExperience} />
                </div>
                <div className='job-details-row'>
                    <label className="label">Job Description</label>    
                    <textarea className="text-input" placeholder='Experience' onChange={handleDescription}></textarea> 
                </div>
                <div className="modal-btns">
                    <button className='modal-submit-btn' onClick={handleSubmit} >Submit</button>
                    <button className='modal-submit-btn' onClick={handleClick}>Cancel</button>
                </div>
                {missingFields?<p className='error-msg'>Please enter all fields</p>:<></>}
            </form>
        </div> 
    )
}