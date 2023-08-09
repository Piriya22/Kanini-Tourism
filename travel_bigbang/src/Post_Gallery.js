import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from 'react-router-dom';

const Imagegallery = () => {
  const [imagegallery, setImagegallery] = useState([]);
  const [tour_name, setTourName] = useState("");
  const [location_image, setLocationImage] = useState(null); 
  const [description, setDescription] = useState("");
  const [cardStyle, setCardStyle] = useState({
    transition: "box-shadow 0.3s",
  });

  const navigate = useNavigate();

  useEffect(() => {
    fetchImagegallery();
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
    localStorage.setItem('selectedTourId', image.tour_id);
    console.log("View button clicked for:", image.tour_name);
    navigate(`/package/${image.tour_id}`);

  }

  const fetchImagegallery = () => {
    axios.get('https://localhost:7116/api/ImageGallery')
      .then((response) => {
        const data = response.data;
        setImagegallery(data);
        toast.success('Imagegallery Details', {
          style: {
            background: '#5792FC',
            color: 'white'
          }
        });
      })
      .catch((error) => {
        console.error('Error fetching Imagegallery:', error);
      });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("tour_name", tour_name);

    if (location_image) {
        formData.append("imageFile", location_image);
    }

    formData.append("description", description);

    axios.post('https://localhost:7116/api/ImageGallery', formData, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
      enctype: 'multipart/form-data',
    })
      .then((response) => {
        console.log('Image added successfully:', response.data);
        toast.success('Image added successfully');
        fetchImagegallery(); 
        setTourName("");
        setLocationImage(null);
        setDescription("");
      })
      .catch((error) => {
        console.error('Error adding image:', error);
        toast.error('Error adding image');
      });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0]; 
    setLocationImage(file);
 
  };

  return (
    <div>
       <style dangerouslySetInnerHTML={{__html: `       
            body{
                background-color:'black';
            }
       `}} />

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Image Gallery</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/Approve">Approval</Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                More
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/services">Services</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/contact">Contact</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>

 <div className="container" style={{padding:'20px'}}>
      <div className="card p-4 mb-4" style={cardStyle}>
        <h2 className="mb-4" style={{ color: 'grey', textAlign: 'center' }}>Image Gallery</h2>
        <form onSubmit={handleFormSubmit} encType="multipart/form-data">
        <form onSubmit={handleFormSubmit} encType="multipart/form-data">
      <div className="mb-3">
        <label htmlFor="tour_name" className="form-label">Tour Name</label>
        <input
          type="text"
          id="tour_name"
          value={tour_name}
          onChange={(e) => setTourName(e.target.value)}
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="location_image" className="form-label">Image</label>
        <input
          type="file"
          id="location_image"
          onChange={handleImageChange} 
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-control"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Add Image</button>
      
      
    </form>         
        </form>
      </div>

      <div className="row">
        {imagegallery.map((image, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card card-small" style={cardStyle} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
              <img src={`https://localhost:7116/uploads/${image.location_image}`} alt={image.tour_name} className="card-img-top img-fluid" />
              <div className="card-body">
                <h5 className="card-title">{image.tour_name}</h5>
                <p className="card-text">{image.description}</p>
                <button className="btn btn-primary" onClick={() => handleView(image.tour_id)}>View Packages</button>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Imagegallery;