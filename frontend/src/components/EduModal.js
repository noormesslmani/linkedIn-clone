import React, { useState } from 'react';
import '../styles/UserHome.css'
import {addEducation} from '../api';
export default function AddEdu({setShowEduModal}) {
    const [school, setSchool]=useState('')
    const [degree, setDegree]=useState('')
    const [field, setField]=useState('')
    const [startMonth, setStartMonth]=useState('')
    const [startYear, setStartYear]=useState('')
    const [endMonth, setEndMonth]=useState('')
    const [endYear, setEndYear]=useState('')
    const [grade, setGrade]=useState('')
    const handleSchool=(e)=>{
        setSchool(e.target.value)
    }
    const handleDegree=(e)=>{
        setDegree(e.target.value)
    }
    const handleField=(e)=>{
        setField(e.target.value)
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
    const handleGrade=(e)=>{
        setGrade(e.target.value)
    }
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(school!=''){
            addEducation(school, degree, field,startMonth,startYear,endMonth,endYear, grade);
        }
    }
    const handleCancel=(e)=>{
        e.preventDefault()
        setShowEduModal(false)
    }
    return(
        <div className='add-modal'>
            <form className='content'>
                <h2 className='submit-text'>Add Education</h2>
                <div className='exp-details-row'>
                    <label className="label">School*</label>
                    <input className="input" type="text" placeholder='School'  onChange={handleSchool} />
                </div>
                <div className='exp-details-row'>
                    <label className="label">Degree</label>
                    <input className="input" type="text" placeholder='Degree' onChange={handleDegree}  />
                </div>
                <div className='exp-details-row'>
                    <label className="label">Field of Study</label>
                    <input className="input" type="text" placeholder='Field of Study' onChange={handleField}  />
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
                    <label className="label">Grade</label>
                    <input className="input" type="text" placeholder='Grade'  onChange={handleGrade}  />
                </div>
                <div className="modal-btns">
                    <button className='modal-submit-btn' onClick={handleSubmit}>Submit</button>
                    <button className='modal-submit-btn' onClick={handleCancel}>Cancel</button>
                </div>
            </form>
        </div> 
    )
}