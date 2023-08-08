import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Bookings() {
  const isLoggedIn = localStorage.getItem('traveller_id') && localStorage.getItem('token');

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    traveller_id: isLoggedIn ? localStorage.getItem('traveller_id') : '',
    package_id: isLoggedIn ? localStorage.getItem('package_id') : '',
    email:'',
    residence: '',
    vacation_type:'',
    traveller_count: 1, 
    phone_number:'',
    price:'',
    bookingDate: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleNumberOfPeopleChange = (event) => {
    const { value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, no_of_people: parseInt(value, 10) }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    if (isLoggedIn) {
      const bookingData = {
        traveller_id: localStorage.getItem('traveller_id'),
        package_id: localStorage.getItem('package_id'),
        email: document.querySelector('[name="email"]').value,
        residence: document.querySelector('[name="residence"]').value,
        vacation_type: document.querySelector('[name="vacation_type"]').value,
        traveller_count: parseInt(document.querySelector('[name="traveller_count"]').value, 10),
        phone_number: document.querySelector('[name="phone_number"]').value,
        price: parseInt(document.querySelector('[name="price"]').value, 10),
        bookingDate: document.querySelector('[name="bookingDate"]').value,
      };
  
      axios
        .post('https://localhost:7152/api/Booking', bookingData)
        .then((response) => {
          const booking_id = response.data.booking_id;
          localStorage.setItem('booking_id', booking_id);
          console.log(localStorage.getItem('package_id'));
          console.log('Booking created successfully:', response.data);
          navigate('/Status', { state: { traveller_count: bookingData.traveller_count } });
        })
        .catch((error) => {
          console.error('Error creating booking:', error);
        });
    } else {
      alert('Login first to book the details.');
    }
  };
  const handleLoginButtonClick = () => {
    console.log('Login button clicked'); // Add this line
    navigate('/TravelLogin'); 
  };

  
  
  return (
    <><div>
          <style dangerouslySetInnerHTML={{
              __html: `  
              body {
                background-color: black;
              }
              
              
              .custom-card-width {
                width: 1000px; 
              }
              
              

                     ` }} />
      </div>    
      <div className="d-flex justify-content-center" style={{ padding: '100px' }}>
      <Card className="p-4" style={{ width: '1000px' }}>
                  <h2>Booking Form</h2>
                  {isLoggedIn ? (
                      <div className="container mt-5">
                          <form onSubmit={handleSubmit} className="shadow p-4 rounded">
                              <div className="mb-3">
                                  <label htmlFor="residence" className="form-label">Residence:</label>
                                  <input
                                      type="text"
                                      name="residence"
                                      value={formData.residence}
                                      onChange={handleInputChange}
                                      required
                                      className="form-control"
                                      placeholder="Enter Residence" />
                                  <label htmlFor="vacation_type" className="form-label">vacation_type:</label>
                                  <input
                                      type="text"
                                      name="vacation_type"
                                      value={formData.vacation_type}
                                      onChange={handleInputChange}
                                      required
                                      className="form-control"
                                      placeholder="Enter vacation_type" />
                                  <label htmlFor="email" className="form-label">Email:</label>
                                  <input
                                      type="text"
                                      name="email"
                                      value={formData.email}
                                      onChange={handleInputChange}
                                      required
                                      className="form-control"
                                      placeholder="Enter Residence" />
                                  <label htmlFor="phone_number" className="form-label">phone_number:</label>
                                  <input
                                      type="number"
                                      name="phone_number"
                                      value={formData.phone_number}
                                      onChange={handleInputChange}
                                      required
                                      className="form-control"
                                      placeholder="Enter Residence" />
                                  <label htmlFor="price" className="form-label">price:</label>
                                  <input
                                      type="number"
                                      name="price"
                                      value={formData.price}
                                      onChange={handleInputChange}
                                      required
                                      className="form-control"
                                      placeholder="Enter Residence" />
                              </div>
                              <div className="mb-3">
                                  <label htmlFor="traveller_count" className="form-label">Number of People:</label>
                                  <select
                                      name="traveller_count"
                                      value={formData.traveller_count}
                                      onChange={handleNumberOfPeopleChange}
                                      required
                                      className="form-select"
                                  >

                                      {Array.from({ length: 10 }, (_, index) => index + 1).map((count) => (
                                          <option key={count} value={count}>
                                              {count}
                                          </option>
                                      ))}
                                  </select>
                              </div>
                              <div className="mb-3">
                                  <label htmlFor="bookingDate" className="form-label">Booking Date:</label>
                                  <input
                                      type="date"
                                      name="bookingDate"
                                      value={formData.bookingDate}
                                      onChange={handleInputChange}
                                      required
                                      className="form-control" />
                              </div>
                              <div className="d-grid gap-2">
                                  <button type="submit" className="btn btn-primary btn-block">Book Now</button>
                              </div>
                          </form>

                      </div>

                  ) : (
                      <div>
                          <p>Login first to book the details.</p>
                          <button className="btn btn-primary" onClick={handleLoginButtonClick}>
                              Login
                          </button>
                      </div>


                  )}
              </Card>
          </div></>
   
  );
}