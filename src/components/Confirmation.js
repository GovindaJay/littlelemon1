
import React, { useState, useEffect } from 'react';


function Confirmation() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('"https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js"')
            .then(response => response.json())
            .then(data => {
                // Assuming data is an array of objects with a date property
                const sortedData = data.sort((a, b) => new Date(a.date) - new Date(b.date));
                setData(sortedData);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Data</h1>
            {data.map((item, index) => (
                <div key={index}>
                    <p>Date: {item.date}</p>
                    {/* Display other data properties here */}
                </div>
            ))}
        </div>
    );
}

export default Confirmation;



// import React, { useEffect, useState } from 'react';
// import { useLocation, Link } from 'react-router-dom';
// import { useFormData } from './FormDataContext';

// function Confirmation() {
//   const [reservations, setReservations] = useState([]);
//   const { formData } = useFormData();
//   const location = useLocation();

//   useEffect(() => {
//     const newReservation = location.state || formData;
  
//     if (newReservation) {
//       const existingReservations = JSON.parse(localStorage.getItem('reservations')) || [];
//       console.log("New reservation:", newReservation);
//       existingReservations.push(newReservation);
//       localStorage.setItem('reservations', JSON.stringify(existingReservations));
//       setReservations(existingReservations);
//     } else {
//       const loadedReservations = JSON.parse(localStorage.getItem('reservations')) || [];
//       console.log("Loaded reservations:", loadedReservations);
//       setReservations(loadedReservations);
//     }
//   }, [location, formData]);

//   // const sortedReservations = reservations.sort((a, b) => a.time.localeCompare(b.time));

  
//   const sortedReservations = reservations.sort((a, b) => {
//     // Check if 'time' exists and is not undefined for both a and b
//     const timeA = a.time || '';
//     const timeB = b.time || '';
//     return timeA.localeCompare(timeB);
//   });
  

//   return (
//     <div>
//       <p>Please retain this confirmation for your reservation</p>
//       {formData && (
//         <div>
//           <h3>Latest Reservation</h3>
//           <p>name: {formData.name}</p>
//           <p>reservation_date: {formData.reservation_date}</p>
//           <p>reservation_slot: {formData.reservation_slot}</p>
//           <p>guests: {formData.guests}</p>
//           <p>occasion: {formData.occasion}</p>
//         </div>
//       )}
//       <h3>All Reservations</h3>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Date</th>
//             <th>Time</th>
//             <th>Guests</th>
//             <th>occasion</th>
//           </tr>
//         </thead>
//         <tbody>
//           {sortedReservations.map((reservation, index) => (
//             <tr key={index}>
//               <td>{reservation.name}</td>
//               <td>{reservation.reservation_date}</td>
//               <td>{reservation.reservation_slot}</td>
//               <td>{reservation.guests}</td>
//               <td>{reservation.occasion}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
      
//       <Link to="/">Back to Form</Link>
//     </div>
//   );
// }

// export default Confirmation;

