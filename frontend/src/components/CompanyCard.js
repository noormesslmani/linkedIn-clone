import React, {useState, useEffect} from 'react';
import '../styles/UserHome.css';
import { useNavigate } from "react-router-dom";
import image from '../assets/original.png';
import {followCompany, unfollowCompany} from '../api';
export default function CompanyCard({company}){
 
    const handleClick=(e)=>{
        e.preventDefault()
        if(companiesFollow.includes(company._id)){
            unfollowCompany(company._id)
        }
        else{
            followCompany(company._id)
        }
    }
    
    const me= JSON.parse(localStorage.me) 
    const companiesFollow =me.companies_follow
    console.log(companiesFollow)
    return( 
        <div className='company-card'>
            <div className='company-details'>
                <img src={image} className='company-img' ></img>
                <div className='company-info'>
                    <h5 className='info title'>{company.name}</h5>
                    <p className='info'>{company.city}, {company.country}</p>
                </div>
                <button className='follow-company' onClick={handleClick}>{companiesFollow.includes(company._id)?'Following':'Follow'}</button>
            </div>
        </div> 
    )
}