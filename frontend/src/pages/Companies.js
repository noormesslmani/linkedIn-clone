import '../styles/UserHome.css'
import React, { useState, useEffect} from 'react';
import NavUser from '../components/NavUser';
import { displayCompanies } from '../api';
import CompanyCard from '../components/CompanyCard';
function Companies(){
    const [companies,setCompanies]=useState([]);
    useEffect(() => {
        displayCompanies(setCompanies);
    }, []);
    
    return (
        <>
            <NavUser/>
            <section className='companies'>
                <div className='companies-container'>
                    {companies.map((company)=><CompanyCard company={company} />)} 
                </div>
            </section>
        </>
        
    );
}
export default Companies;