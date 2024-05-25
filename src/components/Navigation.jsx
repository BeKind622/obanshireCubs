import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import { navigate } from 'history';
import { Navigate } from 'react-router-dom';
import UserInformation from './UserInformation';

const Navigation = ({ setIsLoggedIn }) => {
  const [isLoggedIn, setIsLoggedInState] = useState(false);
  const location = useLocation();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const user = UserInformation();
  const closeNav = () => {
    setIsNavOpen(false);
  };

  const handleLogout = () => {
    setIsLoggedInState(false);
    setIsLoggedIn(false);
    localStorage.removeItem('token');
    Navigate('/');
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedInState(true);
      setIsLoggedIn(true);
    }
  }, [setIsLoggedIn]);

  return (
    <div className="flex items-center justify-evenly border-gray-400 py-8 bg-logoYellow">
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2 absolute top-0 right-0 px-8 py-8"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center   justify-between min-h-[250px] ">
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to="/" onClick={closeNav}>Home</Link>
              </li>
              {isLoggedIn ? (
                <>
                  <li className="border-b border-gray-400 my-8 uppercase items-center ">
                    <Link to="/Dashboard" onClick={closeNav}>Dashboard</Link>
                  </li>
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <Link to="/Pictures" onClick={closeNav}>Pictures</Link>
                  </li>
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <Link to="/Badges" onClick={closeNav}>Badges</Link>
                  </li>
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <Link to="/About" onClick={closeNav}>About</Link>
                  </li>
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <Link to="/Games" onClick={closeNav}>Games</Link>
                  </li>
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <button onClick={handleLogout}>Log out</button>
                  </li>
                </>
              ) : (
                <>
                 <li className="border-b border-gray-400 my-8 uppercase">
                    <Link to="/Pictures" onClick={closeNav}>Pictures</Link>
                  </li>
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <Link to="/Badges" onClick={closeNav}>Badges</Link>
                  </li>
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <Link to="/About" onClick={closeNav}>About</Link>
                  </li>
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <Link to="/Games" onClick={closeNav}>Games</Link>
                  </li>
                  <li className="border-b border-gray-400 my-8 uppercase ">
                    <Link to="/Login" onClick={closeNav}>Login</Link>
                  </li>
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <Link to="/Register" onClick={closeNav}>Register</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex justify-center  items-center align-center">
          <img src="src\assets\Obanshire_logo.png" alt="" className='max-h-16'/>
          <li>
            <Link to="/" >Home</Link>
          </li>
          
          {isLoggedIn ? (
            <>
              <li>
                <Link to="/Dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/Pictures">Pictures</Link>
              </li>
              <li>
                <Link to="/Badges">Badges</Link>
              </li>
              <li>
                <Link to="/About">About</Link>
              </li>
              <li>
                <Link to="/Games">Games</Link>
              </li>
              <li className="border-b border-gray-400 uppercase">
                <button onClick={handleLogout}>Log out</button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/Pictures">Pictures</Link>
              </li>
              <li>
                <Link to="/Badges">Badges</Link>
              </li>
              <li>
                <Link to="/About">About</Link>
              </li>
              <li>
                <Link to="/Games">Games</Link>
              </li>
              <li>
                <Link to="/Login">Login</Link>
              </li>
              <li>
                <Link to="/Register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
      <style>{`
        .hideMenuNav {
          display: none;
        }
        .showMenuNav {
          display: block;
          position: absolute;
          width: 100%;
          height: 100vh;
          top: 0;
          left: 0;
          background: white;
          z-index: 30;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
        }
      `}</style>
    </div>
  );
};

export default Navigation;
