import React, {useState, useEffect} from 'react';
import '../styles/UserHome.css';
import { useNavigate } from "react-router-dom";
import image from '../assets/original.png';
export default function CompanyCard({company}){
    
    console.log(company)    
    return( 
        <div className='company-card'>
            <div className='company-details'>
                <img src={image} className='job-img' ></img>
                <div className='company-info'>
                    <h5 className='info title'>{company.name}</h5>
                    <p className='info'>{company.city}, {company.country}</p>
                </div>
            </div>
        </div> 
    )
}