import React from 'react';
import Navigation from './pages/shared/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/shared/Login';
import Games from './pages/users/Games';
import UserDashboard from './pages/users/User';
import Home from './pages/shared/Home';
const App = () => {
  
  return (
    
    <div className="flex bg-white">       
      <Router>
        <Navigation />
        <div>
        <Routes className="flex">
            <Route path="/Games" element={<Games />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/UserDashboard" element={<UserDashboard />} />
            <Route path="/" element={<Home />} />
             </Routes>
          </div>
       </Router>        
      </div> 
  );
};
export default App;