import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';
import glass from './assets/glass.jpg'
const ImageGallery = () => {
  const [imagegallery, setImagegallery] = useState([]);
  const [cardStyle, setCardStyle] = useState({
    transition: "box-shadow 0.3s",
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetchImageGallery();
  }, []);

  const handleHover = () => {
    setCardStyle({
      ...cardStyle,
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      cursor: "pointer",
    });
  };

  const handleLeave = () => {
    setCardStyle({
      ...cardStyle,
      boxShadow: "none",
      cursor: "default",
    });
  };

  const handleView = (image) => {
    localStorage.setItem('tour_id', image.tour_id);
    console.log("View button clicked for:", image.tour_name);
    navigate('/Fetch');
  };

  const fetchImageGallery = () => {
    axios.get('https://localhost:7116/api/ImageGallery')
      .then((response) => {
        const data = response.data;
        setImagegallery(data);
        toast.success('Image Gallery Details', {
          style: {
            background: '#5792FC',
            color: 'white'
          }
        });
      })
      .catch((error) => {
        console.error('Error fetching Image Gallery:', error);
      });
  };

  return (
    <div>
    <style dangerouslySetInnerHTML={{__html: `
      body{
        background-color: black;
        backgroundSize: 'cover', 
        padding: '50px'
      }
    `}} />
   <div className="container" style={{ padding: '50px' }}>
  <div className="card text-center p-4" style={{ backgroundColor: 'transparent', color: '#FFFFFF', display: 'flex', justifyContent: 'center', alignItems: 'center', backdropFilter: 'blur(10px)' }}>
    <h2 style={{ padding: '20px' }}>IMAGE GALLERY</h2>
    <div className="row justify-content-center">
      {imagegallery.map((image, index) => (
        <div className="col-md-4 mb-4" key={index}>
          <div className="card" style={cardStyle} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
            <img src={`https://localhost:7116/uploads/${image.location_image}`} alt={image.tourName} className="card-img-top img-fluid" />
            <div className="card-body">
              <h5 className="card-title">{image.tour_name}</h5>
              <button className="btn btn-primary" onClick={() => handleView(image)}>View Packages</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
</div>

  );
};

export default ImageGallery;
