import React, { useState } from 'react';
import '../../styles/UserHome.css'
import {addExperience} from '../../api';
export default function AddExp({setShowExpModal}) {
    const [title, setTitle]=useState('')
    const [type, setType]=useState('')
    const [company, setCompany]=useState('')
    const [startMonth, setStartMonth]=useState('')
    const [startYear, setStartYear]=useState('')
    const [endMonth, setEndMonth]=useState('')
    const [endYear, setEndYear]=useState('')
    const [industry, setIndustry]=useState('')
    const [location, setLocation]=useState('')
    const handleCompany=(e)=>{
        setCompany(e.target.value)
    }
    const handleType=(e)=>{
        setType(e.target.value)
    }
    const handleTitle=(e)=>{
        setTitle(e.target.value)
    }
    const handleStartMonth=(e)=>{
        setStartMonth(e.target.value)
    }
    const handleStartYear=(e)=>{
        setStartYear(e.target.value)
    }
    const handleEndMonth=(e)=>{
        setEndMonth(e.target.value)
    }
    const handleEndYear=(e)=>{
        setEndYear(e.target.value)
    }
    const handleIndustry=(e)=>{
        setIndustry(e.target.value)
    }
    const handleLocation=(e)=>{
        setLocation(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(title!=''){
            addExperience(title, type,company,startMonth,startYear,endMonth,endYear,location,industry);
        }
    }
    const handleCancel=(e)=>{
        e.preventDefault()
        setShowExpModal(false)
    }
    return(
        <div className='add-modal'>
            <form className='content'>
                <h2 className='submit-text'>Add experience</h2>
                <div className='exp-details-row'>
                    <label className="label">Title</label>
                    <input className="input" type="text" placeholder='Title' id='title' onChange={handleTitle} />
                </div>
                <div className='exp-details-row'>
                    <label className="label">Employment type</label>
                    <input className="input" type="text" placeholder='Employment type' id='type' onChange={handleType}  />
                </div>
                <div className='exp-details-row'>
                    <label className="label">Company Name</label>
                    <input className="input" type="text" placeholder='Company Name' id='company' onChange={handleCompany}  />
                </div>
                <div className='exp-details-row'>
                    <label className="label">Location</label>
                    <input className="input" type="text" placeholder='Location' id='location' onChange={handleLocation}  />
                </div>
                <div className='exp-details-row'>
                    <label className="label">Start date</label>    
                    <div className='date-details-row'>
                        <input className="input" type="text" placeholder='Month'  onChange={handleStartMonth}  />
                        <input className="input" type="number" placeholder='Year'  onChange={handleStartYear}  />
                    </div>   
                </div>
                <div className='exp-details-row'>
                    <label className="label">End date</label>    
                    <div className='date-details-row'>
                        <input className="input" type="text" placeholder='Month'  onChange={handleEndMonth}  />
                        <input className="input" type="number" placeholder='Year'  onChange={handleEndYear}  />
                    </div>   
                </div>
                <div className='exp-details-row'>
                    <label className="label">Industry</label>
                    <input className="input" type="text" placeholder='Industry' id='industry' onChange={handleIndustry}  />
                </div>
                <div className="modal-btns">
                    <button className='modal-submit-btn' onClick={handleSubmit}>Submit</button>
                    <button className='modal-submit-btn' onClick={handleCancel}>Cancel</button>
                </div>
            </form>
        </div> 
    )
}