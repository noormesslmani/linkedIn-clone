// import '../../styles/CompanyHome.css'
import React, { useState, useEffect } from 'react';
import NavCompany from '../../components/company/NavCompany';

function CompanyHome(){
    const me= JSON.parse(localStorage.me) 
    console.log(me.jobs)
    return (
        <>
            <NavCompany/>
            <section className='main-section'>

            </section>
        </>
        
    );
}
export default CompanyHome;