import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Landing from './pages/Landing';
import UserSignin from './pages/signin';
import UserHome from './pages/UserHome';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact element={<Landing/>} />
          <Route path='/user-signin' exact element={<UserSignin/>} />
          <Route path='/user-home' exact element={<UserHome/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
