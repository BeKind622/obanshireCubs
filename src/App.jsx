import React from 'react';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/shared/Login';
import Games from './pages/users/Games';
import UserDashboard from './pages/users/User';
import ParentDashboard from './pages/users/Parent'; 
import Home from './pages/shared/Home';
import Footer from './components/Footer';
import Resources from './pages/shared/Resources';
// import Xray from './components/resource_components/xray';

const App = () => {
  
  return (
    <div className="max-w-5xl mx-auto">    
      <Router>
        <Navigation />
        <div>
          
        <Routes className="flex">
            <Route path="/Games" element={<Games />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/UserDashboard" element={<UserDashboard />} />
            <Route path="/ParentDashboard" element={<ParentDashboard />} />
            <Route path="/Resources" element={<Resources />} />
            <Route path="/" element={<Home />} />
             </Routes>
          </div>
       </Router>        
       { <Footer /> }
      </div> 
  );
};
export default App;