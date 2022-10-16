import React, {useState, useEffect} from 'react';
import '../styles/landing.css';
export default function InputSignup({page, placeholders, setEmail, setPassword, setFirstname, setLastname}){
    useEffect(() => {
        document.getElementById('input1').value=''
        document.getElementById('input2').value=''
    }, [page]);
    const handlechangefirst=(e)=>{
        page=='one'? (setEmail(e.target.value)):(setFirstname(e.target.value))
    }
    const handlechangesecond=(e)=>{
        page=='one'? (setPassword(e.target.value)):(setLastname(e.target.value))
    }
    return( 
        <>
            <input className='input-signup' id='input1' placeholder={placeholders[0]} onChange={handlechangefirst}></input>
            <input className='input-signup' id='input2' placeholder={placeholders[1]} onChange={handlechangesecond}></input>
        </> 
    )
}