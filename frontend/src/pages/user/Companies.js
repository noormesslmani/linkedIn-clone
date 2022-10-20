import '../../styles/UserHome.css'
import React, { useState, useEffect} from 'react';
import NavUser from '../../components/NavUser';
import { displayCompanies } from '../../api';
import CompanyCard from '../../components/user/CompanyCard';

function Companies(){
    const [companies,setCompanies]=useState([]);
    useEffect(() => {
        displayCompanies(setCompanies);
    }, []);
    
    return (
        <>
            <NavUser/>
            <section className='companies'>
                <h2>Suggested Companies</h2>
                <div className='companies-container'>
                    {companies.map((company)=><CompanyCard company={company} />)} 
                </div>
            </section>
        </>
        
    );
}
export default Companies;