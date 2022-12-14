import '../styles/landing.css'
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import InputSignup from '../components/InputSignup';
import ButtonSignup from '../components/ButtonSignup';
import {registerUser, registerCompany} from '../api';
import image from '../assets/landing-img.svg'
import logo from '../assets/Linkedin-Logo.png'
function Register() {
  const [page,setPage]=useState('one');
  const [buttonLabel,setButtonLabel]=useState('Agree & Join');
  const [placeholders,setPlaceholders]=useState(['Email','Password(8+ characters)']);
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [firstname,setFirstname]=useState('');
  const [lastname,setLastname]=useState('');
  const [name,setName]=useState('');
  const [city,setCity]=useState('');
  const [country,setCountry]=useState('');
  const [enterEmail,setEnteremail]=useState(false);
  const [takenEmail,setTakenEmail]=useState(false);
  const [enterPassword,setEnterPassword]=useState(false);
  const [passwordLength,setPasswordLength]=useState(false);
  const [enterFirstName,setEnterFirstName]=useState(false);
  const [enterLastName,setEnterLastName]=useState(false);
  const [type, setType]=useState('person')
  const handleClick=(e)=>{
    e.preventDefault()

    if( page=='one'){
      if(email==''){
        setEnteremail(true)
      }
      else if(password==''){
        setEnterPassword(true)
      }
      else if(password.length<8){
        setPasswordLength(true)
      }
      else
      {
        setPage('two')
        if(type=='person' ){
          setPlaceholders(['firstName','LastName'])}
        else{
          setPlaceholders(['Name','City', 'Country'])
        }
      }
    }
    else if(type=='person' && page=='two'){
      if(firstname==''){
        setEnterFirstName(true)
      }
      else if(lastname==''){
        setEnterLastName(true)
      }
      else{
        registerUser(email, password, firstname, lastname, setTakenEmail)
      }
    }
    else if(type=='company' && page=='two'){
      registerCompany(email, password, name, city,country, setTakenEmail)
    }
    
  }
  
  return (
    <div className='landing-page'>
        <nav className='landing-nav' >
          <img src={logo} className='logo' />
        </nav>
        <section>
            <div className='form'>
                <p className='registration-title'>Join the biggest professional community</p>
                <form className='register-form'>
                  {takenEmail?<p className='error-msg'>Someone's already using that email</p>:<></>}
                  {enterEmail?<p className='error-msg'>Please enter your email</p>:<></>}
                  {enterPassword?<p className='error-msg'>Please enter your password</p>:<></>}
                  {enterFirstName?<p className='error-msg'>Please enter your firstname</p>:<></>}
                  {enterLastName?<p className='error-msg'>Please enter your lastname</p>:<></>}
                  {passwordLength?<p className='error-msg'>Password must be 8 characters or more</p>:<></>}
                    <InputSignup placeholders={placeholders} page={page} setEmail={setEmail} setPassword={setPassword} setFirstname={setFirstname} setLastname={setLastname} setType={setType}
                    setName={setName} setCity={setCity} setCountry={setCountry} type={type} />
                    <ButtonSignup handleClick={handleClick} buttonLabel={buttonLabel} />
                    <div className='switch-to-signin'>Already on LinkedIn? <Link className='signin-link' to={'/user-signin'}>Sign in</Link></div>
                </form>
            </div>
            <img src={image} alt='image' className='landing-image' />
        </section>
    </div>
  );
}

export default Register;