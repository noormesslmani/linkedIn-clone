import React, {useState, useEffect} from 'react';
import '../../styles/UserHome.css';
import { useNavigate } from "react-router-dom";
import image from '../../assets/original.png';
import {followCompany, unfollowCompany} from '../../api';
export default function CompanyCard({company}){
   
    const me= JSON.parse(localStorage.me) 
    const companiesFollow =me.companies_follow
    const [follow, setFollow]=useState(false)
    useEffect(() => {
        if(companiesFollow.includes(company._id)){
            setFollow(true)
        }
    }, []);
    const handleClick=(e)=>{
        e.preventDefault()
        
        if(companiesFollow.includes(company._id)){
            unfollowCompany(company._id, setFollow)
        }
        else{
            followCompany(company._id, setFollow)
        }
    }
    return( 
        <div className='company-card'>
            <div className='company-details'>
                <img src={image} className='company-img' ></img>
                <div className='company-info'>
                    <h4 className='info'>{company.name}</h4>
                    <p className='info'>{company.city}, {company.country}</p>
                </div>
                <button className='follow-company' onClick={handleClick}>{follow?'Following':'Follow'}</button>
            </div>
        </div> 
    )
}