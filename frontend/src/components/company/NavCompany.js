import React, {useState, useEffect} from 'react';
import '../../styles/UserHome.css';
import logo from '../../assets/linkedin-logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSuitcase, faSignOut } from '@fortawesome/free-solid-svg-icons'
import me from '../../assets/blank-profile.webp'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
export default function NavCompany(){
    const navigate= useNavigate()
    const handleExit=()=>{
        localStorage.clear()
        navigate('/')
    }
    return( 
        <nav className='nav-bar'>
            <div className='right-side'>
                <img src={logo} className='logonav'/>
                <input placeholder='Search' className='search-input'></input>
            </div>
            <div className='left-side'>
                <Link ><FontAwesomeIcon icon={faSuitcase} className='icon' /></Link>
                <Link ><img src={me} className='me-img'></img></Link>
                <FontAwesomeIcon icon={faSignOut} className='icon' onClick={handleExit} />
            </div>
        </nav> 
    )
}