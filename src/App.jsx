import React from 'react';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/shared/Login';
import Home from './pages/shared/Home';
import Footer from './components/Footer';
import Resources from './pages/shared/Resources';

const App = () => {
  
  return (
    <div className="">    
      <Router>
        <Navigation />
        <div>
          
        <Routes className="flex">
            <Route path="/Login" element={<Login />} />
        
            <Route path="/" element={<Home />} />
             </Routes>
          </div>
       </Router>        
       { <Footer /> }
      </div> 
  );
};
export default App;