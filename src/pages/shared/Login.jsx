import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [alreadyLoggedInMessage, setAlreadyLoggedInMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is already logged in
    const token = localStorage.getItem("token");
    if (token) {
      setAlreadyLoggedInMessage("User already logged in.");
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password
      });

      console.log('Login successful');
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("email", email);
     
      // setErrorMessage(""); // Clear any previous error message
      navigate('/Dashboard');
    } catch (error) {
      console.error (error);
      setErrorMessage("Invalid email or password. Please try again.");
      // navigate('/Dashboard');

    }
  };

  return (
    <>
      <div className="bg-gray-100 flex justify-center items-center overflow-hidden relative">
        <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
          {alreadyLoggedInMessage ? (
            <p className="text-green-500 mb-4">{alreadyLoggedInMessage}</p>
          ) : (
            <>
              <h1 className="text-2xl font-semibold mb-4 text-gray-600">Login</h1>
              <form action="#" method="POST">
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-600">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="block text-gray-600">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <input type="checkbox" id="remember" name="remember" className="text-blue-500" />
                <label htmlFor="remember" className="text-gray-600 ml-2">Remember Me</label>
                <button
                  type="submit"
                  onClick={handleLogin}
                  className="w-full bg-blue-900 text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
                >
                  Login
                </button>
              </form>
              {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
