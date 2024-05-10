import React, { useState, useEffect } from 'react';
import {Link, useLocation} from 'react-router-dom';
import UserInformation from "./UserInformation";


const Navigation = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isParent, setIsParent] = useState(false);
    

    const user = UserInformation();
  const location = useLocation();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleLogout = () => {

    setIsLoggedIn(false);
    window.location.href = '/';   };
  useEffect(() => {
    console.log("isLoggedIn:", isLoggedIn);
    // Check if the user is logged in by checking if the token exists in local storage
    const token = localStorage.getItem('token');
    const parent = localStorage.getItem('parent');
    if (token) {
      setIsLoggedIn(true);
      setIsParent(parent === 'true');
    } else {
      setIsLoggedIn(false);
      setIsParent(false);
    }
  }, [location]);

  
  return (
    
    
    <div> 
        <header className="w-full mt-5 text-gray-700 bg-white shadow-sm body-font">
        <div className="container flex flex-col items-end p-6 mx-auto md:flex-row">
            
        <nav className="z-0 relative" x-data={{open:false, menu:false}}>
        <nav>
        <section className="MOBILE-MENU flex lg:hidden justify-center">
          <div
            className="HAMBURGER-ICON space-y-2"
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
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/about">About</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/portfolio">Portfolio</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/About">About us</a>
          </li>
          <li>
            <a href="/Pictures">Picture gallery</a>
          </li>
          <li>
            <a href="/Badges">Badge gallery</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/CubDashboard">Cub Dashboard</a>
          </li>
          <li>
            <a href="/Login">Login</a>
          </li>
          <li>
            <a href="/Register">Register</a>
          </li>
          
        </ul>
      </nav>
        <button onClick={handleLogout}>Log out</button>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        position: absolute;

        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
</nav>

            {/* <div className="items-center h-full pl-6 ml-6 border-l border-gray-200">
            {isLoggedIn ? (
              <>
              <div className="flex">
              {user&&(
                
                <Link to ={isParent ? '/ParentDashboard' : '/UserDashboard'} className="mr-5 font-medium hover:text-gray-900">
           Dashboard
                 </Link>
                  
                )}
                <button onClick={handleLogout}>Log out</button>
                </div>
              </>
          ) : (
            <>
                     <Link to="/login" className="focus:text-blue-900 border-b-2 border-transparent focus:border-blue-900 flex px-5 items-center py-6 text-l font-medium leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out">
        <span className="mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-code" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            
            <path stroke="none" d="M0 0h24v24H0z"></path>
            <polyline points="7 8 3 12 7 16"></polyline>
            <polyline points="17 8 21 12 17 16"></polyline>
            <line x1="14" y1="4" x2="10" y2="20"></line>
          </svg>
        </span>
        Sign In
      </Link>         
     
              </>
          )}

            </div> */}
        </div>
        
    </header>
   


       
      </div>
    
    )
}


export default Navigation