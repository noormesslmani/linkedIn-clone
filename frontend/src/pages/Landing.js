import '../styles/landing.css'
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import InputSignup from '../components/InputSignup';
import ButtonSignup from '../components/ButtonSignup';
import registerUser from '../api';
function Landing() {
  const navigate = useNavigate();
  const [page,setPage]=useState('one');
  const [buttonLabel,setButtonLabel]=useState('Agree & Join');
  const [placeholders,setPlaceholders]=useState(['Email','Password(8+ characters)']);
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [firstname,setFirstname]=useState('');
  const [lastname,setLastname]=useState('');
  const [enterEmail,setEnteremail]=useState(false);
  const [enterPassword,setEnterPassword]=useState(false);
  const [passwordLength,setPasswordLength]=useState(false);
  const [enterFirstName,setEnterFirstName]=useState(false);
  const [enterLastName,setEnterLastName]=useState(false);
  if(page==2){
    setPlaceholders(['First Name','Last Name'])
  }
  const handleClick=(e)=>{
    e.preventDefault()
    setEnterPassword(false)
    setEnteremail(false)
    setPasswordLength(false)
    setEnterFirstName(false)
    setEnterLastName(false)
    if (page=='one')
    { 
      if(email==''){
        setEnteremail(true)}
      else if(password==''){
        setEnterPassword(true)
      }
      else if(password.length<8){
        setPasswordLength(true)
      }
      else{
        setPage('two')
        setPlaceholders(['First Name', 'Last Name'])
        setButtonLabel('Continue')
      }
    }
    else{
      if(firstname==''){
        setEnterFirstName(true)
      }
      else if(lastname==''){
        setEnterLastName(true)
      }
      else{
        registerUser(email, password, firstname, lastname)
      }
    }
  }

  return (
    <div className='landing-page'>
        <nav></nav>
        <section>
            <div className='form'>
                <p className='registration-title'>Join the biggest professional community</p>
                <form className='register-form'>
                  {enterEmail?<p className='error-msg'>Please enter your email</p>:<></>}
                  {enterPassword?<p className='error-msg'>Please enter your password</p>:<></>}
                  {enterFirstName?<p className='error-msg'>Please enter your firstname</p>:<></>}
                  {enterLastName?<p className='error-msg'>Please enter your lastname</p>:<></>}
                  {passwordLength?<p className='error-msg'>Password must be 8 characters or more</p>:<></>}
                    <InputSignup placeholders={placeholders} page={page} setEmail={setEmail} setPassword={setPassword} setFirstname={setFirstname} setLastname={setLastname}/>
                    <ButtonSignup handleClick={handleClick} buttonLabel={buttonLabel} />
                    <div className='switch-to-signin'>Already on LinkedIn? Sign in</div>
                </form>
                
            </div>
            <img></img>
        </section>
    </div>
  );
}

export default Landing;