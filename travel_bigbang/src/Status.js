import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom'; 
import Pdf from './Pdf';
import { Modal, Button, Popover, OverlayTrigger } from 'react-bootstrap'; 
import { PDFDownloadLink, PDFViewer, Page, Text, Document, View, StyleSheet } from '@react-pdf/renderer';

export default function BookingStatus() {
  const [bookingData, setBookingData] = useState(null);
  const [tourPackage, setTourPackage] = useState(null);
  const [travellerData, setTravellerData] = useState(null); 
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const navigate = useNavigate();
  const [showPdfDownloadPopover, setShowPdfDownloadPopover] = useState(false); 
  const [pdfDownloadUrl, setPdfDownloadUrl] = useState(''); 

  const getConfirmationStatus = (isConfirmed) => {
    return isConfirmed ? 'Successful' : 'Pending'; 
  };


  const formatDate = (dateTimeString) => {
    const dateObj = new Date(dateTimeString);
    return dateObj.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
  };
  
  
const calculateTourCost = (booking) => {
  const { traveller_count, associatedPackage } = booking;
  if (!associatedPackage) {
    return 0; 
  }
  const { price } = associatedPackage;
  return traveller_count * price;
};


  const styles = StyleSheet.create({
    page: {
      padding: '1cm',
    },
    heading: {
      fontSize: 24,
      textAlign: 'center',
      marginBottom: '1cm',
    },
    section: {
      marginBottom: '1cm',
    },
    packageName: {
      fontSize: 14,
      fontWeight: 'bold',
    },
    packageText: {
      fontSize: 10,
    },
    footer: {
      fontSize: 10,
      textAlign: 'center',
    },
  });

  const PDFDocument = (bookingData, tourPackage, numberOfPeople) => (
    <Document>
      <Page size="A4" style={styles.page}>
      <Text style={styles.heading}>TravelGo</Text>

{/* Home */}
<View style={{ ...styles.section, justifyContent: 'center', alignItems: 'center' }}>
  <Text>Welcome to TravelGo</Text>
</View>


{/* About */}
<View style={styles.section}>
  <Text style={{ ...styles.package_name, fontSize: 14 }}>About</Text>
  <Text style={{ fontSize: 12 }}>
    We are your gateway to extraordinary journeys, offering an exquisite array of destinations and unforgettable
    trips. Our dedicated team is committed to providing you with the finest travel experiences, tailored to your
    dreams and desires. Embark on a journey of a lifetime with us and let the adventure begin!
  </Text>
</View>

{bookingData.map(({ bookingData, associatedPackage }) => (
  <View key={bookingData.booking_id} style={{ ...styles.card, marginBottom: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '10px' }}>
    <Text style={{ ...styles.package_name, marginBottom: '5px' }}>Package Name: {associatedPackage.package_name}</Text>
    <Text style={{ marginBottom: '5px' }}>Booking Id: {bookingData.booking_id}</Text>
    <Text style={{ marginBottom: '5px' }}>Number of People: {bookingData.traveller_count}</Text>
    <Text style={{ marginBottom: '5px' }}>Booking Date: {formatDate(bookingData.bookingDate)}</Text>
    <Text>Booking-Confirmation: {getConfirmationStatus(bookingData.isConfirmed)}</Text>
    <img
      src={`https://localhost:7276/uploads/${associatedPackage.tour_image}`}
      alt={associatedPackage.packageName}
      className='img-fluid rounded'
      style={{ maxWidth: '200px' }} 
    />
  </View>
))}


      </Page>
    </Document>
  );

  useEffect(() => {
    const storedTravellerId = localStorage.getItem('traveller_id');
    if (storedTravellerId) {
      axios
        .get(`https://localhost:7152/api/Traveller/${storedTravellerId}`)
        .then((response) => {
          setTravellerData(response.data);
        })
        .catch((error) => {
          console.error('Error fetching traveler data:', error);
        });
    }
  }, []);
  useEffect(() => {
    const storedBookingId = localStorage.getItem('booking_id');
    const storedPackageId = localStorage.getItem('package_id');

    if (storedBookingId && storedPackageId) {
      fetch(`https://localhost:7152/api/Booking/${storedBookingId}`)
        .then((response) => response.json())
        .then((data) => {
          setBookingData(data);
        })
        .catch((error) => {
          console.error('Error fetching booking data from API:', error);
        });

      axios.get(`https://localhost:7276/api/TourPackages/${storedPackageId}`)
        .then(response => {
          setTourPackage(response.data);
        })
        .catch(error => {
          console.error('Error fetching tour package:', error);
        });
    } else {
      console.error('BookingId or PackageId not found in Session Storage');
    }
  }, []);

  const location = useLocation();
  
  const numberOfPeople = location.state?.traveller_count || 1; 
  
  const getBookingStatus = (isConfirmed) => {
    return isConfirmed === 0 ? 'Requested' : 'Successful';
  };

  const handlePayNowClick = () => {
    setShowPaymentModal(true);
  };

  const handleCloseModal = () => {
    setShowPaymentModal(false);
  };

const booking_id = localStorage.getItem('booking_id');


axios.get(`https://localhost:7152/api/Booking/${booking_id}`)
  .then((response) => {
   
  })
  .catch((error) => {
    console.error('Error fetching booking:', error);
}, []);

const handleNavigateToAnotherPage = () => {
    navigate('/Payment'); 
  };


  const handlePaymentStatusChange = () => {
    setShowPdfDownloadPopover(true);
  
    
  };

  const handleDownloadPdfClick = () => {
    const blob = new Blob([PDFDocument], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
  };
  
  
  return (
    <div style={{marginTop: '8%'}} className="container">
        
    <div className="row">
    <div className="col-md-4 offset-md-2">
        <h1>Booking Status</h1>
        {bookingData ? (
          <>
            <p>Booking Id: {bookingData.booking_id}</p>
            <p>Booking Status: {getBookingStatus(bookingData.isConfirmed)}</p>
            <p>Number of People: {bookingData.traveller_count}</p>
          </>
        ) : (
          <p>Loading booking data...</p>
        )}
        {travellerData ? (
            <>
              <h2>Traveler Details</h2>
              <p>Name: {travellerData.traveller_name}</p>
            </>
          ) : (
            <p>Loading traveler details...</p>
          )}
        </div>
        <div className="col-md-3 offset-md-1">
        {tourPackage ? (
          <div className="card">
            <img
        src={`https://localhost:7276/uploads/${tourPackage.tour_image}`}
        alt="Tour Package"
              className="card-img-top"
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <div className="card-body">
              <h2 className="card-title">{tourPackage.packageName}</h2>
              <p className="card-text">Price: {tourPackage.price}</p>
              <p className="card-text">Duration: {tourPackage.duration}</p>
              <p className="card-text">Hotel: {tourPackage.hotel_name}</p>
              <hr/>
              <center><p>Total Price: {tourPackage.price * numberOfPeople}</p></center>
              
              <div className="text-center">
  {bookingData && bookingData.isConfirmed === 1 ? (
    <button className="btn btn-danger" onClick={handleDownloadPdfClick}>
      Download PDF
    </button>
  ) : (
    <button
      className="btn btn-primary"
      onClick={handleNavigateToAnotherPage}
      disabled={!bookingData || !tourPackage}
    >
      Pay Now
    </button>
  )}
</div>

            </div>
          </div>
        ) : (
          <p>Loading tour package data...</p>
        )}
      </div>
    </div>
    <div className="text-center">
        {bookingData && bookingData.isConfirmed === 1 ? (
          <OverlayTrigger
            trigger="click"
            placement="bottom"
            show={showPdfDownloadPopover}
            onHide={() => setShowPdfDownloadPopover(false)}
            overlay={
              <Popover id="popover-contained">
                <Popover.Header as="h3">Booking PDF</Popover.Header>
                <Popover.Body>
                  <p>Your booking PDF is ready for download:</p>
                  <PDFDownloadLink
                    document={PDFDocument}
                    fileName="booking_summary.pdf"
                  >
                    {({ loading: pdfLoading }) =>
                      pdfLoading ? 'Generating PDF...' : 'Download PDF'
                    }
                  </PDFDownloadLink>
                </Popover.Body>
              </Popover>
            }
          >
             <button
              className="btn btn-danger"
              onClick={handlePaymentStatusChange}
            >
              Paid
            </button>
           
          </OverlayTrigger>
          
        ) : (
         <p></p>
        )}
      </div>
   
  </div>
  );
}