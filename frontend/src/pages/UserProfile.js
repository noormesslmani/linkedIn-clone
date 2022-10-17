import '../styles/UserHome.css'
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import NavUser from '../components/NavUser';
import axios from 'axios';
import { useLocation} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import cover from '../assets/bg.webp'
import profile from '../assets/blank-profile.webp'
function UserProfile(){
    const info = JSON.parse(localStorage.me)
    const experience= info.experience
    const education = info.education
    return (
        <>
            <NavUser/>
            <section className='jobs'>
             <div className='profile-info'>
                <div className='header'>
                    <img className='cover-photo' src={cover}/>
                    <img className='profile-photo'src={profile} />
                    <div className='full_name'>
                        <h2>{info.first_name} {info.last_name}</h2>
                        {info.headers? <p>{info.headers}</p>:<></>}
                        {info.country?<p>{info.country}</p>:<></>}
                    </div>
                </div>
                <div className='experience'>
                    <div className='experience-row'>
                        <h3>Experience</h3> 
                        <FontAwesomeIcon icon={faCirclePlus} className='add-experience' />
                    </div>
                </div>
                <div className='education'>
                    <div className='experience-row'>
                        <h3>Education</h3> 
                        <FontAwesomeIcon icon={faCirclePlus} className='add-experience' />
                    </div>
                </div>
                <div className='skills'>
                    <div className='experience-row'>
                        <h3>Skills</h3> 
                        <FontAwesomeIcon icon={faCirclePlus} className='add-experience' />
                    </div>
                </div>
             </div>
            </section>
        </>
        
    );
}
export default UserProfile;