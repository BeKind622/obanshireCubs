import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    forename: '',
    surname: '',
    userType: '',
  });
  const [alreadyLoggedInMessage, setAlreadyLoggedInMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is already logged in
    const token = localStorage.getItem("token");
    if (token) {
      setAlreadyLoggedInMessage("User already logged in.");
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    try {
      const response = await axios.post('http://localhost:5000/api/register', formData);
      console.log(response.data);
      alert('Account created successfully! Please log in.');
      navigate('/login'); // Redirect to login page
    } catch (error) {
      console.error('Registration failed:', error);
      setErrorMessage("Registration failed. Please try again.");
    }
  };

  return (
    <>
      <div className="min-h-screen bg-purple-400 flex justify-center items-center">
        <div className="absolute w-48 h-48 rounded-xl bg-purple-300 -bottom-6 -right-10 transform rotate-12 hidden md:block"></div>
        <form className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20" onSubmit={handleSubmit}>
          {alreadyLoggedInMessage ? (
            <p className="text-green-500 mb-4">{alreadyLoggedInMessage}</p>
          ) : (
            <>
              <div>
                <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer text-gray-700 ">Create An Account</h1>
                <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">
                  Fill in the information below to create an account
                </p>
              </div>
              <div className="space-y-4">
                <input
                  type="text"
                  name="email"
                  placeholder="Email Address"
                  className="block text-sm py-3 px-4 rounded-lg w-full border outline-purple-500"
                  value={formData.email}
                  onChange={handleChange}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="block text-sm py-3 px-4 rounded-lg w-full border outline-purple-500"
                  value={formData.password}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="forename"
                  placeholder="First name"
                  className="block text-sm py-3 px-4 rounded-lg w-full border outline-purple-500"
                  value={formData.forename}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="surname"
                  placeholder="Last name"
                  className="block text-sm py-3 px-4 rounded-lg w-full border outline-purple-500"
                  value={formData.surname}
                  onChange={handleChange}
                />
                <select
                  name="userType"
                  className="block text-sm py-3 px-4 rounded-lg w-full border outline-purple-500"
                  value={formData.userType}
                  onChange={handleChange}
                >
                  <option value="">Select User Type</option>
                  <option value="leader">Leader</option>
                  <option value="parent">Parent</option>
                  <option value="scout">Cub Scout</option>
                </select>
              </div>
              <div className="text-center mt-6">
                <button className="w-full py-2 text-xl text-white bg-purple-400 rounded-lg hover:bg-purple-500 transition-all">
                  Create Account
                </button>
                <p className="mt-4 text-sm">Already Have An Account? <span className="underline cursor-pointer" onClick={() => navigate('/login')}>Sign In</span></p>
              </div>
              {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
            </>
          )}
        </form>
        <div className="w-20 h-40 absolute bg-purple-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block"></div>
      </div>
    </>
  );
};

export default Register;
