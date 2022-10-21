import React, {useState, useEffect} from 'react';
import '../../styles/UserHome.css';
import { useNavigate } from "react-router-dom";
import image from '../../assets/original.png';
export default function JobCard({job}){
    const navigate= useNavigate()
   
    const handleClick=()=>{
        navigate("/job-details",{state:{job}});
    }
    return( 
        <div className='job-card' onClick={handleClick}>
            <div className='description'>
                <img src={image} className='job-img' ></img>
                <div className='company-info'>
                    <h5 className='info title'>{job.title}</h5>
                    <p className='info'>{job.company[0].name}</p>
                    <p className='info'>{job.company[0].city}, {job.company[0].country}</p>
                </div>
            </div>
            <div><hr/></div>
        </div> 
    )
}