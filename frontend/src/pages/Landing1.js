import '../styles/landing.css'
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import image from '../assets/landing-img.svg'
import logo from '../assets/Linkedin-Logo.png'
function Landing1() {
const navigate= useNavigate()
const user = document.getElementsByName('user-type');
    const [type, setType]=useState('person')
    const handleUser=()=>{
        for(let i = 0; i < user.length; i++) {
            if(user[i].checked){
                setType(user[i].value)
            }
        }
    }
    const handleClick=(e)=>{
        e.preventDefault()
        navigate("/register",{state:{type}});
    }
    // const handleCompany=(e)=>{
    //     for(let i = 0; i < user.length; i++) {
    //         if(user[i].checked){
    //             console.log(user[i].value)
    //         }
    //     }
    // }
  return (
    <div className='landing-page'>
        <nav className='landing-nav' >
          <img src={logo} className='logo' />
        </nav>
        <section>
            <div className='form'>
                <p className='registration-title'>Join the biggest professional community</p>
                <form className='register-form'>
                  <div className='you-are'>You are?</div>
                  <div className='user-type'>
                    <input type='radio' value="person" name="user-type" defaultChecked onChange={handleUser} />
                    <label for='person'>Person</label>
                  </div>
                  <div className='user-type'>
                    <input type='radio' value="company" name="user-type" onChange={handleUser}/>
                    <label for='company'>Company</label>
                  </div>
                  <button className='landing-next-btn' onClick={handleClick} >Next</button>
                
                </form>
            </div>
            <img src={image} alt='image' className='landing-image' />
        </section>
    </div>
  );
}

export default Landing1;