import React, { useState } from "react";
import "./resources.css"; // Import the CSS file
import { Link } from "react-router-dom";

const Resources = () => {
    const [isNavigating, setIsNavigating] = useState(false);

    const handleClick = () => {
      // Set isNavigating to true to prevent multiple clicks during the delay
      setIsNavigating(true);
      
      // Add your desired delay in milliseconds
      const delay = 5000; // 3 second delay
      // After the delay, navigate to the desired route
      setTimeout(() => {
          setIsNavigating(false);
          // Navigate to the desired route here
        }, 
        delay,
          console.log('hi'));
        };
  return (
    <>
      <div className="container">
        <section className="hero-section">
          <div className="card-grid">
            <Link className="card" to="/resource_components/xray" onClick={handleClick}>
              <div
                className="card__background"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
                }}
              ></div>
              <div className="card__content">
                <p className="card__category">Category</p>
                <h3 className="card__heading">X-ray scans</h3>
              </div>
            </Link>
            <Link className="card" to="/resource_components/clinics">
              <div
                className="card__background"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1631248207065-771ae9ac32f0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
                }}
              ></div>
              <div className="card__content">
                <p className="card__category">Category</p>
                <h3 className="card__heading">Clinics / Wards</h3>
              </div>
            </Link>
            <Link className="card" to="/resource_components/hospitalMap">
              <div
                className="card__background"
                style={{
                  backgroundImage:
                    "url(https://www.uhsussex.nhs.uk/wp-content/uploads/2023/09/Worthing-Hospital-Map-2023-1024x724.jpg)"
                }}
              ></div>
              <div className="card__content">
                <p className="card__category">Category</p>
                <h3 className="card__heading">Hospital Map</h3>
              </div>
            </Link>
            <Link className="card" to="/resource_components/childrensWing">
              <div
                className="card__background"
                style={{
                  backgroundImage:
                    "url(https://grosvenorinteriors.co.uk/wp-content/uploads/2018/02/2017-08-25-11.36.14-scaled.jpg)"
                }}
              ></div>
              <div className="card__content">
                <p className="card__category">Category</p>
                <h3 className="card__heading">Clinics / Wards</h3>
              </div>
            </Link>
            {/* Add more links for other resources */}
          </div>
        </section>
      </div>
    </>
  );
};

export default Resources;
