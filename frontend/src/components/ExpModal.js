import React from 'react';
import '../styles/UserHome.css'

export default function AddExp() {

    return(
        <div className='add-modal'>
            <form className='content'>
                <h2 className='submit-text'>Add experience</h2>
                <div className='exp-details-row'>
                    <label className="label">Title</label>
                    <input className="input" type="text" placeholder='Title' onChange={handleTitle} />
                </div>
                <div className='exp-details-row'>
                    <label className="label">Employment type</label>
                    <input className="input" type="text" placeholder='Employment type' onChange={handleType} />
                </div>
                <div className='exp-details-row'>
                    <label className="label">Company Name</label>
                    <input className="input" type="number" placeholder='Company Name' onChange={handleName}/>
                </div>
                <div className='exp-details-row'>
                    <label className="label">Location</label>
                    <input className="input" type="text" placeholder='Instructor Username' onChange={handleLocation} />
                </div>
                <div className='date-details'>
                    <div className='exp-details-row'>
                        <label className="label">Start date</label>
                        <input className="input" type="text" placeholder='Month' onChange={handleStartMonth}/>
                    </div> 
                    <div className='exp-details-row'>
                        <label className="label"></label>
                        <input className="input" type="text" placeholder='Year' onChange={handleStartYear} />
                    </div>   
                </div>
                <div className='date-details'>
                    <div className='exp-details-row'>
                        <label className="label">End date</label>
                        <input className="input" type="text" placeholder='Month' onChange={handleEndMonth} />
                    </div> 
                    <div className='exp-details-row'>
                        <label className="label"></label>
                        <input className="input" type="text" placeholder='Year' onChange={handleEndYear} />
                    </div>   
                </div>
                <div class="btns">
                    <button className='submit-btn' onClick={handleSubmit}>Submit</button>
                </div>
            </form>
        </div> 
    )
}