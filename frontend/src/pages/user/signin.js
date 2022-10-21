import '../../styles/landing.css'
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import ButtonSignup from '../../components/ButtonSignup';
import logo from '../../assets/Linkedin-Logo.png'
import {userLogIn, companyLogIn} from '../../api';
function UserSignin(){
    const navigate = useNavigate();
    const [buttonLabel,setButtonLabel]=useState('Sign in');
    const [enterEmail,setEnterEmail]=useState(false);
    const [enterPassword,setEnterPassword]=useState(false);
    const [invalidAccount, setInvalidAccount]=useState(false)
    const user = document.getElementsByName('user-type');
    const [type, setType]=useState('person')
    const handleUser=()=>{
        for(let i = 0; i < user.length; i++) {
            if(user[i].checked){
                setType(user[i].value)
                console.log(type)
            }
        }
    }

    const handleClick=(e)=>{
        e.preventDefault()
        setInvalidAccount(false)
        setEnterEmail(false)
        setEnterPassword(false)
        if(document.getElementById('email').value){
            if(document.getElementById('pass').value){
                if(type=='person'){
                userLogIn(document.getElementById('email').value,document.getElementById('pass').value,setInvalidAccount, navigate)
                }
                else if(type =='company'){ companyLogIn(document.getElementById('email').value,document.getElementById('pass').value,setInvalidAccount, navigate)}
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
                <div className='signin-usertype'>
                    <div>Sign in as:</div>
                    <input type='radio' value="person" name="user-type" defaultChecked onChange={handleUser} />
                    <label>Person</label>
                    <input type='radio' value="company" name="user-type" onChange={handleUser}/>
                    <label>Company</label>
                </div>
            </form>
        </div>
      );
}
export default UserSignin;