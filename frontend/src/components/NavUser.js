import React, {useState, useEffect} from 'react';
import '../styles/UserHome.css';
import logo from '../assets/linkedin-logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSuitcase, faBell, faSignOut, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import me from '../assets/blank-profile.webp'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Notifications from './user/Notifications';
import {getNotifications} from '../api';
export default function NavUser(){
    const navigate= useNavigate()
    const [notifications,setNotifications]=useState([]);
    const handleExit=()=>{
        localStorage.clear()
        navigate('/')
    }
    useEffect(()=>{
        getNotifications(setNotifications)
    },[])
    return( 
        <nav className='nav-bar'>
            <div className='right-side'>
                <img src={logo} className='logonav'/>
                <input placeholder='Search' className='search-input'></input>
            </div>
            <div className='left-side'>
                <Link to='/user-companies'><FontAwesomeIcon icon={faUserGroup} className='icon' /></Link>
                <Link to='/user-home'><FontAwesomeIcon icon={faSuitcase} className='icon' /></Link>
                <Link to='/user-profile'><img src={me} className='me-img'></img></Link>
                <Notifications notifications={notifications}/>
                <FontAwesomeIcon icon={faSignOut} className='icon' onClick={handleExit} />
            </div>
        </nav> 
    )
}