import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Landing from './pages/Landing';
import UserSignin from './pages/signin';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact element={<Landing/>} />
          <Route path='/user-signin' exact element={<UserSignin/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
