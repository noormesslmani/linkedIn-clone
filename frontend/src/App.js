import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Landing from './pages/Landing';
import UserSignin from './pages/user/signin';
import UserHome from './pages/user/UserHome';
import JobDetails from './pages/user/JobDetails';
import UserProfile from './pages/user/UserProfile';
import Companies from './pages/user/Companies';
import Register from './pages/Register';
import CompanyHome from './pages/company/companyHome';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact element={<Landing/>} />
          <Route path='/register' exact element={<Register/>} />
          <Route path='/user-signin' exact element={<UserSignin/>} />
          <Route path='/user-home' exact element={<UserHome/>} />
          <Route path='/job-details' exact element={<JobDetails/>} />
          <Route path='/user-profile' exact element={<UserProfile/>} />
          <Route path='/user-companies' exact element={<Companies/>} />
          <Route path='/company-home' exact element={<CompanyHome/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
