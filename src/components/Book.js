
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormData } from './FormDataContext'



function Book() {
  const { formData, setFormData } = useFormData()

  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/Reservations', { state: formData });
  };


  return (
    <div>


<section>
  <article>
    <h1>Make a reservation</h1>

    {/* <!--Begin row--> */}
    <div className="row">
      {/* <!--Begin col--> */}
      <div className="column">

          <form id="form" form onSubmit={handleSubmit}>

            <p>
              <label htmlFor="name">Name:</label>
              <input type="text" placeholder="Your Name" maxlength="200" required="" id="name" name="name" onChange={handleChange} value={formData.name} />
            </p>
            <p>
              <label for="reservation_date">Choose a Date:</label>
              <input type="date" id="reservation_date" name="reservation_date" onChange={handleChange} value={formData.reservation_date} />
            </p>
            <p>
              <label for="no_of_guests">No of Guests:</label>
              <input type="number" min={1} max={10} placeholder="Enter the number of guests" id="no_of_guests" onChange={handleChange} name = "guests"  value={formData.guests} />
            </p>
      
            <p>
              <label htmlFor="reservation_slot">Reservation time:</label>
              <select id="reservation_slot" name ="reservation_slot" onChange={handleChange} value={formData.reservation_slot} >
                  <option value={17.00} >17:00</option>
                  <option value={18.00}>18:00</option>
                  <option value={19.00} >19:00</option>
                  <option value={20.00} > 20:00</option>
                  <option value={21.00}>21:00</option>
                  <option value={22.00}>22:00</option>
              </select>
            </p>
            <p>
              <label for="occation">Occasion:</label>
              <select id="occasion" name ="occasion" onChange={handleChange} value={formData.occasion} >
                <option value="Birthday" >Birthday</option>
                <option value= "Anniversary">Anniversary</option>
            </select>
            </p>

        <button type="submit" id="button">Reserve</button>
   
          

          </form>
      </div>
      {/* <!--End col--> */}

      {/* <!--Begin col--> */}
      <div class="column">




        <h2>Bookings  <span id="today"></span></h2>
        <div id="bookings">
        </div>
      </div>
      {/* <!--End col--> */}
    </div>
    {/* <!--End row--> */}




  </article>
</section>


      
    </div>
  )
}

export default Book
