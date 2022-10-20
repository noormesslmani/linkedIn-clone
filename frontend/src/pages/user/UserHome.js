import '../../styles/UserHome.css'
import React, { useState, useEffect, useCallback } from 'react';
import NavUser from '../../components/NavUser';
import JobCard from '../../components/user/JobCard';
import axios from 'axios';
const baseURL='http://localhost:3000'
function UserHome(){
    const [jobs,setJobs]=useState([]);
    console.log(localStorage)
    useEffect(() => {
        let config = {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}`},
        };
        axios.get(`${baseURL}/jobs`, config)
        .then(function (response) {
            setJobs(response.data)
            return (response.data)
        })
        .catch(function (error) {
            console.log(error);
        });
    }, []);
    console.log(1234)
    return (
        <>
        <NavUser/>
        <section className='jobs'>
            <div className='job-list'>
                <h2>Recommended for you</h2>
                {jobs.map((job)=><JobCard job={job} />)} 
            </div>  
        </section>
        </>
        
    );
}
export default UserHome;