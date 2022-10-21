import React, { useState } from 'react';
import '../../styles/Company.css'
export default function AddJob({handleClick, handleSubmit}) {
    
    return(
        <div className='add-modal'>
            <form className='content'>
                <h2 className='submit-text'>Create a New Job</h2>
                <div className='job-details-row'>
                    <label className="label">Job Title*</label>
                    <input className="input" type="text" placeholder='Job Title' />
                </div>
                <div className='job-details-row'>
                    <label className="label">Employment Type</label>
                    <input className="input" type="text" placeholder='Employment Type'  />
                </div>
                <div className='job-details-row'>
                    <label className="label">Experience</label>
                    <input className="input" type="text" placeholder='Experience' />
                </div>
                <div className='job-details-row'>
                    <label className="label">Job Description</label>    
                    <textarea className="text-input" placeholder='Experience'></textarea> 
                </div>
                <div className="modal-btns">
                    <button className='modal-submit-btn' onClick={handleSubmit} >Submit</button>
                    <button className='modal-submit-btn' onClick={handleClick}>Cancel</button>
                </div>
            </form>
        </div> 
    )
}