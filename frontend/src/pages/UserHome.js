import '../styles/UserHome.css'
import React, { useState, useEffect } from 'react';
import NavUser from '../components/NavUser';
import JobCard from '../components/JobCard';
import axios from 'axios';
const baseURL='http://localhost:3000'
function UserHome(){
    console.log(localStorage.getItem("token").split(" "))
    const [jobs,setJobs]=useState([]);
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