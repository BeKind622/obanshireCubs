import React from 'react';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/shared/Login';
import Register from './pages/shared/Register';
import About from './pages/shared/About';
import Badges from './pages/shared/Badges';
import Pictures from './pages/shared/Pictures';
import ParentDashboard from './pages/users/Parent'; 
import Home from './pages/shared/Home';
import Footer from './components/Footer';
import Dashboard from './pages/users/Dashboard';
import HelperDashboard from './pages/users/helper/HelperDashboard';
import ImageUpload from './pages/users/helper/ImageUpload';
const App = () => {
  
  return (
    <div className="mx-auto">    
      <Router>
        <Navigation />
        <div>
          
        <Routes className="flex">
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            {/* <Route path="/ParentDashboard" element={<ParentDashboard />} /> */}
            {/* <Route path="/HelperDashboard" element={<HelperDashboard />} /> */}
            <Route path="/Pictures" element={<Pictures />} />
            <Route path="/Badges" element={<Badges />} />
            <Route path="/About" element={<About />} />
            <Route path="/ImageUpload" element={<ImageUpload />} />
       
            <Route path="/" element={<Home />} />
             </Routes>
          </div>
       </Router>        
       { <Footer /> }
      </div> 
  );
};
export default App;