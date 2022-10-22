import React, {useState, useEffect} from 'react';
import '../../styles/UserHome.css';
import { useNavigate } from "react-router-dom";
import image from '../../assets/original.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import imageNotification from '../../assets/blank-profile.webp';
export default function Notifications(){
    return(
        <>
        <div className='notification-wrap'>
            <FontAwesomeIcon icon={faBell} className='icon icon-bell' />
            <div class="noti-count">4</div>
            <div class="noti-container">
                <div class="noti-title">
                    <span class="new-noti-title">Notifications </span>
                </div>
                <ul class="noti-body">
                    <li  class="noti-text">
                        <img src={imageNotification} className='noti-image' />
                        <p>SE Factory posted a new job opening</p>
                    </li>
                    
                    <li  class="noti-text">
                        <img src={imageNotification} className='noti-image' />
                        <p>SE Factory posted a new job opening</p>
                    </li><li  class="noti-text">
                        <img src={imageNotification} className='noti-image' />
                        <p>SE Factory posted a new job opening</p>
                    </li>
                </ul>
            </div>
        </div>
        </>
    )   
}