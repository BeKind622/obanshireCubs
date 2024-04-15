import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
const Login = () => {
  const [email, setEmail] = useState(""); // Changed to email
  const [password, setPassword] = useState("");
  const [parent, setParent] = useState(false);
  const navigate = useNavigate();
  
  const [errorMessage, setErrorMessage] = useState("");
  
  
  const handleLogin = async (e) => {
      e.preventDefault();
      try {   
          const response = await axios.post("http://localhost:5000/api/login", {
              email, // Use email instead of patient_number
              password
          });
  
          console.log('Login successful');
          console.log('Token:', response.data.token);
  
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("email", email); // Store email instead of patient_number
  
  
  
          if (parent) {
              localStorage.setItem("parent", 'true');
              navigate("/ParentDashboard");
          } else {
              localStorage.removeItem("parent");
              navigate("/UserDashboard");
          }
      } catch (error) {
          console.error('Login failed', error.response.data.error);
          setErrorMessage("Invalid email or password. Please try again."); // Set error message
  
      }
  };
  
  useEffect(() => {
      const storedParent = localStorage.getItem("parent");
      if (storedParent) {
          setParent(true);
      }
  }, []);
  
  
  
  return (
    <>
     <div className="bg-gray-100 flex justify-center items-center w-screen h-screen overflow-hidden relative">
   
<div className="w-1/2 h-screen hidden lg:block">
  <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Reception" className="object-cover w-full h-full blur-sm"/>
</div>

<div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
  <h1 className="text-2xl font-semibold mb-4 text-gray-600">Patient Login</h1>
  <form action="#" method="POST">
   
    <div className="mb-4">
      <label for="email" className="block text-gray-600">Email</label>
      <input 
                        type="email" 
                        id="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none "
                    />
    </div>
   
    <div className="mb-4">
      <label for="password" className="block text-gray-600">Password</label>
      <input  type="password"
              id="password" 
              name="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off"/>
    </div>
  
    <div className="mb-4 flex items-center">
      <input type="checkbox" id="remember" name="remember" className="text-blue-500"/>
      <label for="remember" className="text-gray-600 ml-2">Remember Me</label>
    </div>
    <div>
                <label  className="inline-flex items-center mt-3" htmlFor="checkbox_id">
                  <input  className="form-checkbox h-5 w-5 text-gray-600 mr-2 text-blue-900" type="checkbox" id="checkbox_id" checked={parent} onChange={() => setParent(!parent)} />
                  <span className="text-sm font-medium text-gray-700">Parent/Guardian please select</span>  
                  </label>
                </div>
  
    <div className="mb-6 text-blue-500">
      <a href="#" className="hover:underline">Forgot Password?</a>
    </div>
  
    <button type="submit" onClick={handleLogin} className="w-full bg-blue-900 text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300">Login</button>
  </form>
 
  
 
</div>
</div>
      
    </>
  );
};

export default Login;
