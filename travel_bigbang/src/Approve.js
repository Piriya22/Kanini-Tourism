import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';


function AdminPage() {

  const [activeSection, setActiveSection] = useState('content');
  const [agency, setagency] = useState([]);
  const [notApprovedagency, setNotApprovedagency] = useState([]);

  useEffect(() => {
    fetchApprovedagency();
    fetchNotApprovedagency();

  }, []);


  const fetchApprovedagency=()=>{
    fetch('https://localhost:7116/api/Agents/AcceptedAgents', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      })
      .then(response => response.json())
      .then(
        data => setagency(data),
        console.log(agency))
      .catch(error => console.log(error));
  }


const fetchNotApprovedagency=()=>{
    fetch('https://localhost:7116/api/Agents/RequestedAgents', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })
        .then(response => response.json())
        .then(data => setNotApprovedagency(data))
        .catch(error => console.log(error));
    }
  

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

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
    <>
  
    <header className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "grey", color: "#fff" }}>
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-1 mb-lg-0 justify-content-center">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="agencyDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: "#fff", fontSize: "16px" }}>
                  agency
                </a>
                <ul className="dropdown-menu" aria-labelledby="agencyDropdown">
                  <li><a className="dropdown-item" onClick={() => handleSectionClick('agency')}>Requested agency</a></li>
                  <li><a className="dropdown-item" onClick={() => handleSectionClick('getagency')}>Activated agency</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/admincrud" style={{ color: "#fff", fontSize: "16px" }}>Edit agency</a>
              </li>
            </ul>
            <span className="navbar-text" style={{ marginLeft: '10px', fontSize: '20px' }}>
        <a class="nav-link" onClick={() => { localStorage.removeItem("token") }}  href="/Home">Logout</a>
      </span>          </div>
        </div>
      </header>

  
  
  
  
  {activeSection === 'content' && (
        <div className="content">
          <div className="context">
          <div className="container" style={{padding:'50px'}}>
      <div className="card text-center p-4">
        <h2>Image Gallery</h2>
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
        </div>
      )}
  
      {activeSection === 'agency' && (
        <div style={{ backgroundImage: 'url("https://t4.ftcdn.net/jpg/05/59/79/11/240_F_559791137_JecfqH0O4QfrCqLoboVGMGxS5vHayQ58.jpg")', backgroundPosition: 'center', backgroundSize: 'cover' , backdropFilter: 'blur(15px)', minHeight: '100vh', minWidth: '100%' }}>
        <div className="agency" >
          <section className="my-background-radial-gradient overflow-hidden">
            <div className="my-agency-container container">
              <div className="my-page-heading">
                <h2>Requested agency</h2>
                <hr />
              </div>
              <div className="container">
                <div className="row row-cols-1 row-cols-md-4 g-4">
                  {notApprovedagency.map(agency => (
                    <div key={agency.agent_id} className="col">
                      <div className="card my-bg-glass">
                        <div className="card-body">
                        <img
                          src={`https://localhost:7116/uploads/${agency.agent_image}`}
                          className="card-img-top"
                          alt=""
                          style={{ width: '200px', height: '200px' }}/>

                        <div className="flex flex-wrap">
                          <br/>
                        <span className="inline-block w-1/2">
                        <p className="text-sm text-gray-600">Name: {agency.agent_name}</p>
                          <p className="text-sm text-gray-600">Phone: {agency.agent_phonenumber}</p>
                          <p className="text-sm text-gray-600">Email: {agency.agent_email}</p>
                        </span>
                      
                      </div><hr/>
                          
                          <div className="d-flex justify-content-center">
                          
                            <button type="button" className="btn btn-success me-2" onClick={() =>{
                              const requestBody = {
                              "id": agency.agent_id
                              };
                              console.log(requestBody);

                              fetch("https://localhost:7116/api/Agents/UpdateStatus", {
                              method: "PUT",
                              headers: {
                                  "Accept": "application/json",
                                  "Content-Type": "application/json"
                              },
                              body: JSON.stringify(requestBody)
                              })
                              .then(response => response.json())
                              .then(data => {
                              console.log(data); 
                              fetchNotApprovedagency();
                              fetchApprovedagency();
                              })
                              .catch(error => console.log(error));
                          }}>Accept</button>


                            <button type="button" className="btn btn-danger" onClick={() =>{
                              const requestBody = {
                                "id": agency.agent_id
                              };
                              console.log(requestBody);

                              fetch("https://localhost:7116/api/Agents/DeclineAgents ", {
                              method: "PUT",
                              headers: {
                                  "Accept": "application/json",
                                  "Content-Type": "application/json"
                              },
                              body: JSON.stringify(requestBody)
                              })
                              .then(response => response.json())
                              .then(data => {
                              console.log(data); 
                              fetchNotApprovedagency();
                              fetchApprovedagency();
                              })
                              .catch(error => console.log(error));
                          }}>Decline</button>


                          </div>

                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </section>
        </div>
        </div>
      )}
  
      {activeSection === 'getagency' && (
        <div style={{ backgroundImage: 'url("https://t4.ftcdn.net/jpg/05/98/60/81/240_F_598608101_mPdGSxcFrdy44xgPiuZFXY1kvDVrZVRc.jpg")', backgroundPosition: 'center', backgroundSize: 'cover' , backdropFilter: 'blur(15px)', minHeight: '100vh', minWidth: '100%' }}> 
        <div className="getagency">
          <section className="my-background-radial-gradient overflow-hidden">
            <div className="my-agency-container container">
              <div className="my-page-heading">
                <h2>Activated agency</h2>
                
                <hr />
              </div>
              <div className="row row-cols-1 row-cols-md-3 g-4">
                  {agency.map(agency => (
                    <div key={agency.agent_id} className="col">
                    
                      <div className="card my-bg-glass">
                      <br/>
                      <img
                  src={`https://localhost:7116/uploads/${agency.agency_image}`}
                  className="card-img-top "
                  alt=""
                  style={{
                    width: '200px',
                    height: '200px',
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  }}
                />

                <div className="card-body">
            <h5 className="card-title">{agency.agent_name}</h5>
            <div className="flex flex-wrap">
              <span className="inline-block w-1/2">
              <p className="text-sm text-gray-600">Name: {agency.agent_name}</p>
                          <p className="text-sm text-gray-600">Phone: {agency.agent_phonenumber}</p>
                          <p className="text-sm text-gray-600">Email: {agency.agent_email}</p>
              </span>
             
            </div>
          </div>
        </div>
      </div>   
      
  ))}
</div>
            </div>
            
          </section>
        </div>
        </div>
      )}
    </>
  );  
}
}
export default AdminPage;