import React, {useState, useEffect} from 'react';
import '../../styles/UserHome.css';
import { useNavigate } from "react-router-dom";
import image from '../../assets/original.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import imageNotification from '../../assets/blank-profile.webp';
export default function Notifications({notifications}){
    console.log(notifications)
    const navigate= useNavigate()
    const handleClick=()=>{
        const container= document.getElementById('noti-container')
        container.classList.toggle("show");
    }
    return(
        <>
        <div className='notification-wrap'>
            <FontAwesomeIcon icon={faBell} className='icon icon-bell' onClick={handleClick} />
            <div class="noti-count">{notifications.length}</div>
            <div class="noti-container" id='noti-container'>
                <div class="noti-title">
                    <span class="new-noti-title">Notifications </span>
                </div>
                <ul class="noti-body">
                    {notifications.map((job)=>
                        <li class="noti-text" onClick={()=>{ navigate("/job-details",{state:{job}})}}>
                            <img src={imageNotification} className='noti-image' />
                            <p><span className='noti-company'>{job.company[0].name}</span> posted a new job opening <span className='noti-company'>{job.title}</span> </p>
                        </li>)
                    }
                </ul>
            </div>
        </div>
        </>
    )   
}