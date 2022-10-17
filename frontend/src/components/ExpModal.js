import React from 'react';
import '../styles/UserHome.css'
import {addExperience} from '../api';
export default function AddExp() {
    const title=document.getElementById('title').value
    const type=document.getElementById('type').value
    const company=document.getElementById('company').value
    const startMonth=document.getElementById('startMonth').value
    const startYear=document.getElementById('startYear').value
    const endMonth=document.getElementById('endMonth').value
    const endYear=document.getElementById('endYear').value
    const location=document.getElementById('location').value
    const industry=document.getElementById('industry').value
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(document.getElementById('title').value!=''){
            addExperience(title, type,company,startMonth,startYear,endMonth,endYear,location,industry);
        }
    }
    return(
        <div className='add-modal'>
            <form className='content'>
                <h2 className='submit-text'>Add experience</h2>
                <div className='exp-details-row'>
                    <label className="label">Title</label>
                    <input className="input" type="text" placeholder='Title' id='title' />
                </div>
                <div className='exp-details-row'>
                    <label className="label">Employment type</label>
                    <input className="input" type="text" placeholder='Employment type' id='type' />
                </div>
                <div className='exp-details-row'>
                    <label className="label">Company Name</label>
                    <input className="input" type="number" placeholder='Company Name' id='company' />
                </div>
                <div className='exp-details-row'>
                    <label className="label">Location</label>
                    <input className="input" type="text" placeholder='Location' id='location' />
                </div>
                <div className='date-details'>
                    <div className='exp-details-row'>
                        <label className="label">Start date</label>
                        <input className="input" type="text" placeholder='Month' id='startMonth' />
                    </div> 
                    <div className='exp-details-row'>
                        <label className="label"></label>
                        <input className="input" type="text" placeholder='Year' id='startYear' />
                    </div>   
                </div>
                <div className='date-details'>
                    <div className='exp-details-row'>
                        <label className="label">End date</label>
                        <input className="input" type="text" placeholder='Month' id='endMonth' />
                    </div> 
                    <div className='exp-details-row'>
                        <label className="label"></label>
                        <input className="input" type="text" placeholder='Year' id='endYear' />
                    </div>   
                </div>
                <div className='exp-details-row'>
                    <label className="label">Industry</label>
                    <input className="input" type="text" placeholder='Industry' id='industry'  />
                </div>
                <div class="btns">
                    <button className='submit-btn' onClick={handleSubmit}>Submit</button>
                </div>
            </form>
        </div> 
    )
}