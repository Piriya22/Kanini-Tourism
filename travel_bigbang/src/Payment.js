import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
export default function Payment() {
  const navigate = useNavigate();
  const [paymentData, setPaymentData] = useState({
    booking_id: localStorage.getItem('booking_id'),
    card_number: 0,
    month: 0,
    year: 0,
    traveller_name: '',
    cvv_number: 0,
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPaymentData((prevPaymentData) => ({ ...prevPaymentData, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  
   
    const bookingId = localStorage.getItem('booking_id');
  
   
    const paymentDataWithBookingId = {
      ...paymentData,
      booking_id: bookingId
    };
  
    axios.post('https://localhost:7152/api/payments', paymentDataWithBookingId)
      .then((response) => {
        console.log('Payment created successfully:', response.data);
        navigate('/Status', { state: { payment_id: response.data.payment_id } });
      })
      .catch((error) => {
        console.error('Error creating payment:', error);
      });
  };
  

  return (
    <div>
      <br/><br/><br/>
      <h2>Payment Form</h2>
      <div className="container mt-5">
        <form onSubmit={handleSubmit} className="shadow p-4 rounded">
          <div className="mb-3">
            <label htmlFor="card_number" className="form-label">Card Number:</label>
            <input
              type="number"
              name="card_number"
              value={paymentData.card_number}
              onChange={handleInputChange}
              required
              className="form-control"
              placeholder="Enter Card Number"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="month" className="form-label">Expiry Month:</label>
            <input
              type="number"
              name="month"
              value={paymentData.month}
              onChange={handleInputChange}
              required
              className="form-control"
              placeholder="Enter Expiry Month"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="year" className="form-label">Expiry Year:</label>
            <input
              type="number"
              name="year"
              value={paymentData.year}
              onChange={handleInputChange}
              required
              className="form-control"
              placeholder="Enter Expiry Year"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="traveller_name" className="form-label">Traveller Name:</label>
            <input
              type="text"
              name="traveller_name"
              value={paymentData.traveller_name}
              onChange={handleInputChange}
              required
              className="form-control"
              placeholder="Enter Name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="cvv_number" className="form-label">CVV Number:</label>
            <input
              type="number"
              name="cvv_number"
              value={paymentData.cvv_number}
              onChange={handleInputChange}
              required
              className="form-control"
              placeholder="Enter CVV Number"
            />
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary btn-block">Make Payment</button>
          </div>
        </form>
      </div>
    </div>
  );
}