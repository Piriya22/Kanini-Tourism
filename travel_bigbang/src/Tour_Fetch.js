import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Navbar, Nav, NavDropdown, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook


const TourPackageDetails = () => {
  const [tourPackages, setTourPackages] = useState([]);
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const apiUrl = 'https://localhost:7276/api/TourPackages';

  const handleView = (tourPackage) => {
    localStorage.setItem('package_id', tourPackage.package_id);
    navigate('/NewBook'); // Use navigate to navigate to the desired route
  };

  useEffect(() => {
    const fetchTourPackageData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setTourPackages(response.data);
      } catch (error) {
        console.error('Error fetching tour package data:', error);
      }
    };

    fetchTourPackageData();
  }, []);

  // if (tourPackages.length === 0) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div> 
     <style dangerouslySetInnerHTML={{__html: `
       .price-box {
       
        text-align: center;
      }
      
      .starting-from {
        margin: 0;
        font-size: 12px;
        color: #999;
      }
      
      .price {
        font-weight: bold;
        margin: 5px 0;
      }
      
      .per-person {
        margin: 0;
        font-size: 12px;
        color: #999;
      }
      
`}} />

  
        <div className="ml-auto"></div>
        
    <div className="container mt-4">
      <h2 className="text-center mb-4">Tour Package Details</h2>

      <div className="row">
        {tourPackages.map((tourPackage) => (
          <div className="col-md-4 mb-4" key={tourPackage.package_id}>
            <div className="card">
              <img
                src={`https://localhost:7276/uploads/${tourPackage.image}`}
                className="card-img-top"
                alt={tourPackage.packagename}
              />
              <div className="card-body">
                
                <p className="card-text">
                <i class="bi bi-check-all"></i><strong>Hotel Name:</strong>{' '}
  <span style={{ fontStyle: 'italic' }}>{tourPackage.hotel_nearby}</span>
</p>
<p className="card-text">
<i class="bi bi-check-all"></i> <strong>Food Details:</strong>{' '}
  <span style={{ fontStyle: 'italic' }}> {tourPackage.food_plan}</span>
</p>
<p className="card-text">
<i class="bi bi-check-all"></i> <strong>Speciality of the Place:</strong>{' '}
  <span style={{ fontStyle: 'italic' }}> {tourPackage.spots_nearby}</span>
</p>
<p className="card-text">
<i class="bi bi-check-all"></i> <strong>Itinerary Details:</strong>{' '}
  <span style={{ fontStyle: 'italic' }}> {tourPackage.itinerary}</span>
</p>

<p className="card-text">
<i class="bi bi-check-all"></i><strong>Vacation Type:</strong>{' '}
  <span style={{ fontStyle: 'italic' }}> {tourPackage.vacation_type}</span>
</p>
<p className="card-text">
<i class="bi bi-check-all"></i><strong>Duration:</strong>{' '}
  <span style={{ fontStyle: 'italic' }}> {tourPackage.duration}</span>
</p>  
<div className="d-flex justify-content-between align-items-center">
  <div className="price-box">
    <p className="starting-from">Starting from</p>
    <p className="price">
    <i class="bi bi-currency-rupee"></i> {tourPackage.price}
    </p>
    <p className="per-person">per person</p>
  </div>
  <button className="btn btn-primary" onClick={() => handleView(tourPackage)}>
    View Packages
  </button>
</div>


              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default TourPackageDetails;