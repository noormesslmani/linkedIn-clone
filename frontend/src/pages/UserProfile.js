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
import image from '../assets/original.png';
function UserProfile(){
    const info = JSON.parse(localStorage.me)
    const experience= info.experience
    const education = info.education
    const skills= info.skills

    const handleEdu=()=>{

    }
    const handleExp=()=>{}
    const handleSkills=()=>{}
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
                        <FontAwesomeIcon icon={faCirclePlus} className='add-experience' onClick={handleExp}/>
                    </div>
                    {experience.map((exp)=>
                        <div className='exp-details'>
                            <img src={image} className='job-img' ></img>
                            <div className='written-details'>
                                <h4>{exp.title}</h4>
                                <p className='detail'>{exp.company_name}</p>
                                <p className='detail'>{exp.start_date}</p>
                                <p className='detail'>{exp.end_date}</p>
                                <p className='detail'>{exp.location}</p>
                            </div>
                        </div>
                    )}
                
                </div>
                <div className='education'>
                    <div className='experience-row'>
                        <h3>Education</h3> 
                        <FontAwesomeIcon icon={faCirclePlus} className='add-experience' onClick={handleEdu}/>
                    </div>
                    {education.map((edu)=>
                        <div className='exp-details'>
                            <img src={image} className='job-img' ></img>
                            <div className='written-details'>
                                <h4>{edu.school}</h4>
                                <p className='detail'>{edu.degree}</p>
                                <p className='detail'>{edu.field}</p>
                            </div>
                        </div>
                    )}
                </div>
                <div className='skills'>
                    <div className='experience-row'>
                        <h3>Skills</h3> 
                        <FontAwesomeIcon icon={faCirclePlus} className='add-experience' onClick={handleSkills}/>
                    </div>
                    {skills.map((skill)=>
                        <div className='written-details'>
                            <h4>{skill}</h4>
                        </div>
                    )}
                </div>
             </div>
            </section>
        </>
        
    );
}
export default UserProfile;