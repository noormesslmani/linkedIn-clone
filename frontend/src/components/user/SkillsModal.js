import React, { useState } from 'react';
import '../../styles/UserHome.css'
import {addSkill} from '../../api';
export default function AddSkill({setShowSkillModal}) {
    const [skill, setSkill]=useState('')
    const [missingFields, setMissingFields]=useState(false)
    const handleSkill=(e)=>{
        setSkill(e.target.value)
    } 
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(skill!=''){
            addSkill(skill);
            setMissingFields(false)
            setShowSkillModal(false)
        }
        else{
            setMissingFields(true)
        }
    }
    const handleCancel=(e)=>{
        e.preventDefault()
        setMissingFields(false)
        setShowSkillModal(false)
    }
    return(
        <div className='add-modal'>
            <form className='content'>
                <h2 className='submit-text'>Add New Skill</h2>
                <div className='exp-details-row'>
                    <label className="label">Skill*</label>
                    <input className="input" type="text" placeholder='Add Skill'  onChange={handleSkill} />
                </div>
                <div className="modal-btns">
                    <button className='modal-submit-btn' onClick={handleSubmit}>Submit</button>
                    <button className='modal-submit-btn' onClick={handleCancel}>Cancel</button>
                </div>
                {missingFields?<p className='error-msg'>Please enter skill</p>:<></>}
            </form>
        </div> 
    )
}