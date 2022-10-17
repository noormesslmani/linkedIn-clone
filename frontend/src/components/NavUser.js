import React, {useState, useEffect} from 'react';
import '../styles/UserHome.css';
import logo from '../assets/linkedin-logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSuitcase, faBell } from '@fortawesome/free-solid-svg-icons'
import me from '../assets/blank-profile.webp'
import { Link } from 'react-router-dom';
export default function NavUser(){
    return( 
        <nav className='nav-bar'>
            <div className='right-side'>
                <img src={logo} className='logo'/>
                <input placeholder='Search' className='search-input'></input>
            </div>
            <div className='left-side'>
                <Link to='/user-home' ><FontAwesomeIcon icon={faSuitcase} className='icon' /></Link>
                <FontAwesomeIcon icon={faBell} className='icon' />
                <Link to='/user-profile'><img src={me} className='me-img'></img></Link>
            </div>
        </nav> 
    )
}