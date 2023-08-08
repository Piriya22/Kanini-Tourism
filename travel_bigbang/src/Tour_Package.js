import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const Tour_Package = () => {
  const [tourPackages, setTourPackageData] = useState([]);
  const [selectedTour, setSelectedTour] = useState(null);
  const navigate = useNavigate();

  // const apiUrl = 'https://localhost:7276/api/TourPackages';

  // const handleView = (tourPackage) => {
  //   localStorage.setItem('packageid', tourPackage.package_id);
  //   console.log("View button clicked for:", tourPackage.package_name);
  // };

  useEffect(() => {
    fetchTourPackageData();
  }, []);
  const fetchTourPackageData = async () => {
    try {
      const tour_id = parseInt(localStorage.getItem('tour_id'))
      if (tour_id) {
        const response = await axios.get(`https://localhost:7276/api/Tourpackage/TourId/${tour_id}`);
        setSelectedTour(response.data);
        setTourPackageData(response.data);  
      }
    } catch (error) {
      console.error('Error fetching tour package data:', error);
    }
  };

  const handlePackageButtonClick = (package_id) => {
    console.log(package_id);
    localStorage.setItem('package_id', package_id); 
    navigate(`/spot`);
  };

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

    <div className="container mt-4">
      <h2 className="text-center mb-4">Tour Package Details</h2>
      <h2 className="text-center mb-4">Holidays offers comprehensive Universal Studio – Singapore tour packages to help you enjoy a memorable vacation.</h2>

      <div className="row">
        {tourPackages.map((tourPackage) => (
          <div className="col-md-4 mb-4" key={tourPackage.tour_id}>
            <div className="card">
              <img
                src={`https://localhost:7276/uploads/${tourPackage.tour_image}`}                
                className="card-img-top"
                alt="ath"
              />
              <div className="card-body">
                <h5 className="card-title">{tourPackage.package_name}</h5>
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
  <span style={{ fontStyle: 'italic' }}> {tourPackage.spot_nearby}</span>
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
  <button className="btn btn-primary" onClick={() => handlePackageButtonClick(tourPackage.package_id)}>
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

export default Tour_Package;