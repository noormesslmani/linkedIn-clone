import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Landing from './pages/Landing';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact element={<Landing/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
