import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Tourpost = () => {
  const navigate = useNavigate();
  const [newPackage, setNewPackage] = useState({
   

    
    food_plan: '',
    tour_name:'',
    package_name:'',
    hotel_nearby: '',
    spots_nearby:'', 
    itinerary: '',
    image: null, 
    price: 0,
    vacation_type: '',
    duration: '',
  });
  const apiUrl = 'https://localhost:7276/api/TourPackages'; 

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('food_plan', newPackage.food_plan);
      formData.append('tour_name', newPackage.tour_name); 
      formData.append('package_name', newPackage.package_name);
      formData.append('hotel_nearby', newPackage.hotel_nearby);
      formData.append('spots_nearby', newPackage.spots_nearby);
      formData.append('itinerary', newPackage.itinerary); 
      formData.append('imageFile', newPackage.image);
      formData.append('price', newPackage.price);
      formData.append('vacation_type', newPackage.vacation_type);
      formData.append('duration', newPackage.duration);
       

      
      const response = await axios.post(apiUrl, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('New tour package added successfully:', response.data);
      navigate('/Fetch');
      setNewPackage({
     
        food_plan: '',
        tour_name:'',
        package_name:'',
        hotel_nearby: '',
        spots_nearby: '',
        itinerary: '',
        image: null,
        price: 0,
        vacation_type: '',
        duration: '',
      });
    } catch (error) {
      console.error('Error adding new tour package:', error);
    }
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0]; 
    setNewPackage({ ...newPackage, image: file }); 
  };



  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', overflow: 'hidden',backgroundColor:'black',padding:'40px' }}>
    <div className="card" style={{ minWidth: '800px' }}>
      <div className="card-body">
        <h2 className="card-title">Add New Tour Package</h2>
        <form onSubmit={handleFormSubmit}>

      <div className="mb-3">
          <label htmlFor="food_plan" className="form-label">Food Plan</label>
          <input
            type="text"
            id="food_plan"
            value={newPackage.food_plan}
            onChange={(e) => setNewPackage({ ...newPackage, food_plan: e.target.value })}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tour_name" className="form-label">Tour Name</label>
          <input
            type="text"
            id="tour_name"
            value={newPackage.tour_name}
            onChange={(e) => setNewPackage({ ...newPackage, tour_name: e.target.value })}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="package_name" className="form-label">Package Name</label>
          <input
            type="text"
            id="package_name"
            value={newPackage.package_name}
            onChange={(e) => setNewPackage({ ...newPackage, package_name: e.target.value })}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="hotel_nearby" className="form-label">Hotel </label>
          <input
            type="text"
            id="hotel_nearby"
            value={newPackage.hotel_nearby}
            onChange={(e) => setNewPackage({ ...newPackage, hotel_nearby: e.target.value })}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="spots_nearby" className="form-label">Spot Nearby</label>
          <input
            type="text"
            id="spots_nearby"
            value={newPackage.spots_nearby}
            onChange={(e) => setNewPackage({ ...newPackage, spots_nearby: e.target.value })}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="itinerary" className="form-label">Itinerary Details</label>
          <input
            type="text"
            id="itinerary"
            value={newPackage.itinerary}
            onChange={(e) => setNewPackage({ ...newPackage, itinerary: e.target.value })}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Image</label>
          <input
            type="file"
            id="image"
            onChange={handleImageChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price</label>
          <input
            type="number"
            id="price"
            value={newPackage.price}
            onChange={(e) => setNewPackage({ ...newPackage, price: e.target.value })}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="vacation_type" className="form-label">Vacation Type</label>
          <input
            type="text"
            id="vacation_type"
            value={newPackage.vacation_type}
            onChange={(e) => setNewPackage({ ...newPackage, vacation_type: e.target.value })}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="duration" className="form-label">Duration</label>
          <input
            type="text"
            id="duration"
            value={newPackage.duration}
            onChange={(e) => setNewPackage({ ...newPackage, duration: e.target.value })}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Add New Tour Package</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Tourpost;