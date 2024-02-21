import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/shared/Login';
import Register from './pages/shared/Register';
import Home from './pages/shared/Home';
import './App.css';


const App = () => {
  return (
    
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home </Link>
            </li>
            <li>
              <Link to="/login">Login </Link>
            </li>
            <li>
              <Link to="/register">Register </Link>
            </li>
          </ul>
        </nav> */}
 <div class="px-7 bg-white shadow-lg rounded-2xl mb-5">
            <div class="flex">
                <div class="flex-auto hover:w-full group">
                <Link to="/" class="flex items-center justify-center text-center mx-auto px-4 py-2 group-hover:w-full text-indigo-500"> 
                    
                        <span class="block px-1 py-1 group-hover:bg-indigo-100 rounded-full group-hover:flex-grow">
                            <i class="far fa-home text-2xl pt-1"></i><span class="hidden group-hover:inline-block ml-3 align-bottom pb-1">Home</span>
                        </span>
                        </Link>
                </div>
                <div class="flex-auto hover:w-full group">
                <Link to="/login" class="flex items-center justify-center text-center mx-auto px-4 py-2 group-hover:w-full text-indigo-500"> 
                        <span class="block px-1 py-1 group-hover:bg-indigo-100 rounded-full group-hover:flex-grow">
                            <i class="far fa-compass text-2xl pt-1"></i><span class="hidden group-hover:inline-block ml-3 align-bottom pb-1">Login</span>
                        </span>
                    </Link>
                </div>
                <div class="flex-auto hover:w-full group">
                <Link to="/register" class="flex items-center justify-center text-center mx-auto px-4 py-2 group-hover:w-full text-indigo-500"> 
                        <span class="block px-1 py-1 group-hover:bg-indigo-100 rounded-full group-hover:flex-grow">
                            <i class="far fa-search text-2xl pt-1"></i><span class="hidden group-hover:inline-block ml-3 align-bottom pb-1">Search</span>
                        </span>
                    </Link>
                </div>
                <div class="flex-auto hover:w-full group">
                    <a href="#" class="flex items-center justify-center text-center mx-auto px-4 py-2 group-hover:w-full text-indigo-500">
                        <span class="block px-1 py-1 group-hover:bg-indigo-100 rounded-full group-hover:flex-grow">
                            <i class="far fa-cog text-2xl pt-1"></i><span class="hidden group-hover:inline-block ml-3 align-bottom pb-1">Settings</span>
                        </span>
                    </a>
                </div>
            </div>
        </div>
        <hr />
        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
