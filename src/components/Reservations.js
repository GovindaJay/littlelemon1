import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom'; // Updated to useLocation for React Router v6

function Reservations() {
  const [queryParams, setQueryParams] = useState([]);
  const location = useLocation(); // Use useLocation to access the passed state

  useEffect(() => {
    // Check if state is passed, otherwise fall back to URL search params
    const formData = location.state || new URLSearchParams(window.location.search);
    let paramsArray = [];

    if (formData instanceof URLSearchParams) {
      formData.forEach((value, name) => {
        paramsArray.push(`${name}: ${value}`);
      });
    } else {
      // If formData is an object (from state), convert it to the desired array format
      paramsArray = Object.entries(formData).map(([name, value]) => `${name}: ${value}`);
    }

    // Sort the array based on the 'name' part of each string
    paramsArray.sort((a, b) => {
      const nameA = a.split(':')[0].trim().toLowerCase();
      const nameB = b.split(':')[0].trim().toLowerCase();
      return nameA.localeCompare(nameB);
    });

    setQueryParams(paramsArray);
  }, [location]);

  return (
    <div>
      <p>Please retain this confirmatoin for your Reservation</p>
      <div id="reservations">


        
        {queryParams.map((param, index) => (
          <div key={index}>{param}<br /></div>
        ))}
      </div>

      
      <Link to="/">Back to Form</Link>
    </div>
  );
}

export default Reservations;
