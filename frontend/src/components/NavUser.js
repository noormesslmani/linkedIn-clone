import React, {useState, useEffect} from 'react';
import '../styles/UserHome.css';
import logo from '../assets/linkedin-logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSuitcase, faBell } from '@fortawesome/free-solid-svg-icons'
import me from '../assets/blank-profile.webp'
export default function NavUser(){
    return( 
        <nav className='nav-bar'>
            <div className='right-side'>
                <img src={logo} className='logo'/>
                <input placeholder='Search' className='search-input'></input>
            </div>
            <div className='left-side'>
                {/* <FontAwesomeIcon icon={faHome} className='icon' /> */}
                <FontAwesomeIcon icon={faSuitcase} className='icon' />
                <FontAwesomeIcon icon={faBell} className='icon' />
                <img src={me} className='me-img'></img>
            </div>
        </nav> 
    )
}