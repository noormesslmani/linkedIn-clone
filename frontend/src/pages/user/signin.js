import '../../styles/landing.css'
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import ButtonSignup from '../../components/ButtonSignup';
import logo from '../../assets/Linkedin-Logo.png'
import {userLogIn} from '../../api';
function UserSignin(){
    const navigate = useNavigate();
    const [buttonLabel,setButtonLabel]=useState('Sign in');
    const [enterEmail,setEnterEmail]=useState(false);
    const [enterPassword,setEnterPassword]=useState(false);
    const [invalidAccount, setInvalidAccount]=useState(false)
    const handleClick=(e)=>{
        e.preventDefault()
        setInvalidAccount(false)
        setEnterEmail(false)
        setEnterPassword(false)
        if(document.getElementById('email').value){
            if(document.getElementById('pass').value){
                userLogIn(document.getElementById('email').value,document.getElementById('pass').value,setInvalidAccount, navigate)
                // if(invalidAccount==false){
                //     navigate('/user-home')
                // }
            }
            else{
                setEnterPassword(true)
            }
        }
        else{
            setEnterEmail(true)
        }
    }
    return (
        <div className='Signin-page'>
            <img src={logo} className='logo' />
            <form className='signin-form'>
                <h1>Sign in</h1>
                <p>Stay updated on your professional world</p>
                <input id='email' className='input-signin' placeholder='Email'></input>
                {enterEmail?<p className='error-msg' >Please enter an email address </p>: <></>}
                {invalidAccount?<p className='error-msg'>Invalid Credentials. Please try again.</p>:<></>}
                <input id='pass' className='input-signin' placeholder='Password'></input>
                {enterPassword?<p className='error-msg'>Please enter a password </p>: <></>}
                <ButtonSignup buttonLabel={buttonLabel} handleClick={handleClick}/>
            </form>
        </div>
      );
}
export default UserSignin;