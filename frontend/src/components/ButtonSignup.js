import React, {useState} from 'react';
import '../styles/landing.css';
export default function ButtonSignup({handleClick,buttonLabel}){
    return( 
        <>
            <button className='btn-signup' type='submit' onClick={handleClick} >{buttonLabel}</button>
        </> 
    )
}