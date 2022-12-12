import React, {useState, useEffect} from 'react';
import '../styles/landing.css';
export default function InputSignup({page, placeholders, setEmail, setPassword, setFirstname, setLastname, setType, setName, setCity, setCountry, type}){
    useEffect(() => {
        document.getElementById('input1').value=''
        document.getElementById('input2').value=''
    }, [page]);
    const handlechangefirst=(e)=>{
        if(page=='one'){
            setEmail(e.target.value)
        }
        else if(page=='two'){
            if(type=='person'){
                setFirstname(e.target.value)
            }
            else if(type=='company'){
                setName(e.target.value)
            }
        }
    }
    const handlechangesecond=(e)=>{
        if(page=='one'){
            setPassword(e.target.value)
        }
        else if(page=='two'){
            if(type=='person'){
                setLastname(e.target.value)
            }
            else if(type=='company'){
                setCity(e.target.value)
            }
        }
    }
    const handlechangethird=(e)=>{
        if(type=='company' && page=='two'){
            setCountry(e.target.value)
        }
    }
    const user = document.getElementsByName('user-type');
    const handleUser=()=>{
        for(let i = 0; i < user.length; i++) {
            if(user[i].checked){
                setType(user[i].value)
            }
        }
    }
    return( 
        <>
            <input className='input-signup' id='input1' placeholder={placeholders[0]} onChange={handlechangefirst}></input>
            <input className='input-signup' id='input2' placeholder={placeholders[1]} onChange={handlechangesecond}></input>
            {type=='company'? page=='two'?<input className='input-signup' id='input3' placeholder={placeholders[2]} onChange={handlechangethird}></input>:<></>:<></>}
            {page=='one'? <div className='signin-usertype'>
                <div>Register as:</div>
                <input type='radio' value="person" name="user-type" defaultChecked onChange={handleUser} />
                <label>Person</label>
                <input type='radio' value="company" name="user-type" onChange={handleUser}/>
                <label>Company</label>
            </div>: <></> }
        </> 
    )
}