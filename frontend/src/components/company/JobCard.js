import React, {useState, useEffect} from 'react';
import '../../styles/Company.css';
import { useNavigate } from "react-router-dom";
import image from '../../assets/original.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSuitcase } from '@fortawesome/free-solid-svg-icons'
export default function JobCard({job}){
   
    console.log(job)
    return( 
        <div className='job'>
            <h1 className='title'>{job.title}</h1>
            <div className='description'>
                <img src={image} className='job-img' ></img>
                <div className='info'>
                    <FontAwesomeIcon icon={faSuitcase} className='icon' />
                    <p>{job.employment_type} . {job.experience}</p>
                </div>
            </div>
            <div className='applicants-row'>
                <h3>Job description</h3>
                <button className='applicants-btn'>View Applicants</button>
            </div>
            <p className='job-details'>{job.details}</p>
            <div><hr/></div>
        </div> 
    )
}