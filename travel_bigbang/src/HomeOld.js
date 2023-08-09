import React, { useState, useEffect } from 'react';
import backg from './assets/Img/beach.jpg'
import glass from './assets/Img/sun.jpg'
import { NavLink } from 'react-router-dom';
import logo from './assets/logo.png';
import xAI from './assets/xAI.png';





function HomeOld() {
  
    

    const [isAffix, setIsAffix] = useState(false);
    const [menuActive, setMenuActive] = useState(false); 
  
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsAffix(true);
      } else {
        setIsAffix(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const toggleMenu = () => {
      setMenuActive(!menuActive);
    };

      

      
    return (
      <><><><><>
      <style dangerouslySetInnerHTML={{__html: `        
      body {
        background: url('${backg}');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center top;
        height: 100vh; /* Use viewport height for the body's height */
        margin: 0 ; /* Remove default margin for the body */
    }
    
    :root {
        
        --primary-color: #7b61ff;
        --secondary-color: #f6f4ff;
        --footer-color: #f9f9f9;
    }
    
    .fw-medium {
        font-weight: 500 !important;
    }
    
    .fw-bold {
        font-weight: 700 !important;
    }
    
    .fw-black {
        font-weight: 900 !important;
    }
    
    .back-to-top {
        position: fixed;
        display: none;
        right: 45px;
        bottom: 45px;
        z-index: 99;
    }
    
    /*** Button ***/
    .btn {
        font-weight: 500;
        transition: .5s;
    }
    
    .btn.btn-Info,
    .btn.btn-Dark {
        color: #FFFFFF;
    }
    
    .btn-square {
        width: 38px;
        height: 38px;
    }
    
    .btn-sm-square {
        width: 32px;
        height: 32px;
    }
    
    .btn-lg-square {
        width: 48px;
        height: 48px;
    }
    
    .btn-square,
    .btn-sm-square,
    .btn-lg-square {
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: normal;
    }
    
    
    /*** Navbar ***/
    /* .navbar .dropdown-toggle::after {
        border: none;
        content: "\f107";
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        vertical-align: middle;
        margin-left: 8px;
        background-color: transparent;
    }
    
    .navbar .navbar-nav .nav-link {
        margin-right: 30px;
        padding: 25px 0;
        color: #FFFFFF;
        font-size: 15px;
        font-weight: 500;
        text-transform: uppercase;
        outline: none;
    }
    
    .navbar .navbar-nav .nav-link:hover,
    .navbar .navbar-nav .nav-link.active {
        color: var(--primary);
        
    }
    
    @media (max-width: 991.98px) {
        .navbar .navbar-nav .nav-link  {
            margin-right: 0;
            padding: 10px 0;
            
        }
    
        .navbar .navbar-nav {
            
            background-color: transparent;
        }
    }
    
    .navbar .navbar-brand,
    .navbar a.btn {
        height: 75px;
        
    }
    
    .navbar .navbar-nav .nav-link {
        color: var(--dark);
        font-weight: 500;
        
    }
    
    .navbar.sticky-top {
        top: -100px;
        transition: .5s;
        
    }
    
    @media (min-width: 992px) {
        .navbar .nav-item .dropdown-menu {
            display: block;
            border: none;
            margin-top: 0;
            top: 150%;
            opacity: 0;
            visibility: hidden;
            transition: .5s;
            
        }
    
        .navbar .nav-item:hover .dropdown-menu {
            top: 100%;
            visibility: visible;
            transition: .5s;
            opacity: 1;
        }
    } */
    
    .tours-cards h3 {
        font-size: 2rem;
      }
      .tours-cards {
        display: flex;
        gap: 3rem;
      }
      
      .tours-card {
        display: flex;
        gap: 3rem;
        flex: 1;
      }
      
      .tours-card-content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-size: 1.6rem;
      }
      
      .tours-card-content-icons {
        display: flex;
        gap: 3rem;
        margin-top: 1rem;
      }
      .tours-card-content-icons h6 {
        display: inline-flex;
        justify-content: space-between;
        align-items: center;
        gap: 0.6rem;
        font-size: 8px;
        color: #878787;
      }
      .tours-card-contents-text p {
        margin-top: 1rem;
        font-size: 18px;
      }
      
      .tours-card img {
        border-radius: 12px;
      }
      
      
    
    .page-header {
        background: url('') top center no-repeat;
        background-size: cover;
        text-shadow: 0 0 30px rgba(0, 0, 0, .1);
        height: 800px;
    }
    
    .breadcrumb-item + .breadcrumb-item::before {
        color: var(--light);
    }
    
    
    
    /*** Feature ***/
    @media (min-width: 992px) {
        .container.feature {
            max-width: 100% !important;
        }
    
        .feature-text  {
            padding-left: calc(((100% - 960px) / 2) + .75rem);
        }
    }
    
    @media (min-width: 1200px) {
        .feature-text  {
            padding-left: calc(((100% - 1140px) / 2) + .75rem);
        }
    }
    
    @media (min-width: 1400px) {
        .feature-text  {
            padding-left: calc(((100% - 1320px) / 2) + .75rem);
        }
    }
    
    
    /* ** Team ** */
    .team-item img {
        position: relative;
        top: 0;
        transition: .5s;
    }
    
    .team-item:hover img {
        top: -30px;
    }
    
    .team-item .team-text {
        position: relative;
        height: 100px;
        transition: .5s;
    }
    
    .team-item:hover .team-text {
        margin-top: -60px;
        height: 160px;
    }
    
    .team-item .team-text .team-social {
        opacity: 0;
        transition: .5s;
    }
    
    .team-item:hover .team-text .team-social {
        opacity: 1;
    }
    
    .team-item .team-social .btn {
        display: inline-flex;
        color: var(--primary);
        background: #FFFFFF;
        border-radius: 40px;
    }
    
    .team-item .team-social .btn:hover {
        color: #FFFFFF;
        background: var(--primary);
    }
    
    
    
    
    /*** Footer ***/
    .footer .btn.btn-social {
        margin-right: 5px;
        width: 35px;
        height: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--light);
        border: 1px solid #FFFFFF;
        transition: .3s;
    }
    
    .footer .btn.btn-social:hover {
        color: var(--primary);
    }
    
    .footer .btn.btn-link {
        display: block;
        margin-bottom: 5px;
        padding: 0;
        text-align: left;
        color: #FFFFFF;
        font-size: 15px;
        font-weight: normal;
        text-transform: capitalize;
        transition: .3s;
    }
    
    .footer .btn.btn-link::before {
        position: relative;
        content: "\f105";
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        margin-right: 10px;
    }
    
    .footer .btn.btn-link:hover {
        color: var(--primary);
        letter-spacing: 1px;
        box-shadow: none;
    }
    
    .footer .copyright {
        padding: 25px 0;
        font-size: 15px;
        border-top: 1px solid rgba(256, 256, 256, .1);
    }
    
    .footer .copyright a {
        color: var(--light);
    }
    
    .footer .copyright a:hover {
        color: var(--primary);
    }
    
      .destination-cards-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
    
      .destination-row {
        width: calc(50% - 10px);
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
      }
    
      .activities-cards {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .activities-cards img {
        border-radius: 12px;
      }
      .activities-cards h4 {
        font-size: 1.6rem;
      }
    
    
      @media (max-width: 768px) {
        .activities-cards {
          flex-direction: column;
          align-items: center;
        }
      
        .activities-card {
          width: 100%;
        }
      }
    
    
    
      /* @import url("https://fonts.googleapis.com/css2?family=Basic&family=Poppins&display=swap");
    
    
    
    
    
    
    .gallery {
      display: flex;
      gap: 16px;
      scale: 1.6;
      display: 'flex';
      flex-wrap: wrap;
    
    }
    
    .card {
      position: relative;
      left: 350px;
      width: 140px;
      height: 160px;
      border-radius: 8px;
      transition: 1000ms all;
      transform-origin: center left;
      box-shadow: 0 5px 12px rgba(0, 0, 0, 0.5);
      outline: 1px solid var(--background);
      overflow: hidden;
    }
    
    .card img {
      height: 160px;
      object-fit: cover;
      border-radius: 4px;
    }
    
    .card:hover {
      cursor: pointer;
      transform: scale(1.15);
    }
    
    .card:hover figcaption {
      font-size: 0.6rem;
      position: absolute;
      height: 80px;
      width: 160px;
      display: flex;
      align-items: end;
      background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.9) 0%,
        rgba(0, 0, 0, 0) 100%
      );
      color: white;
      left: 0px;
      bottom: 0px;
      padding-left: 12px;
      padding-bottom: 10px;
    }
    
    .card:hover ~ .card {
      font-weight: bold;
      cursor: pointer;
      transform: translateX(22px);
    } */
    
    /* about */
    
    #About {
        display: flex;
        justify-content: center;
        margin-top: 120px;
        align-items: center;
        gap: 3rem;
      }
      #About h2 {
        font-size: var(--title-font-size);
      }
      #About p {
        width: 556px;
        font-size: 1.6rem;
        margin-top: 3rem;
      }
      #About .section-button {
        width: 130px;
      }
    
      /* showcase CONTENT */
    .showcase-content {
        text-align: center;
        color: white;
        font-size: 25px;
        
      }
      .showcase-content h1 {
        margin-bottom: 42px;
      }
      .showcase-content a {
        text-align: center;
        font-size: 1.8rem;
        margin-top: 32px;
        display: inline-flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        background: var(--primary-color);
        padding: 1.8rem 2.4rem;
        border-radius: 1.2rem;
      }
      
      .showcase-content a:hover {
        background: var(--primary-color);
        opacity: 0.9;
      }
    .showcase-button{
        color: #f9f9f9;
    }
      
    @import url('https://fonts.googleapis.com/css?family=Quicksand:400,500,700');
    html,
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Quicksand", sans-serif;
        font-size: 62.5%;
        font-size: 10px;
        background-color:transparent;
    }
    
    
    .nav {
        width: 100%;
        height: 65px;
        position: fixed;
        line-height: 65px;
        text-align: center;
    }
    
    .nav div.logo {
        float: left;
        width: auto;
        height: auto;
        padding-left: 3rem;
    }
    
    .nav div.logo a {
        text-decoration: none;
        color: #fff;
        font-size: 2.5rem;
    }
    
    .nav div.logo a:hover {
        color: #00E676;
    }
    
    .nav div.main_list {
        height: 65px;
        float: right;
    }
    
    .nav div.main_list ul {
        width: 100%;
        height: 65px;
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
    }
    
    .nav div.main_list ul li {
        width: auto;
        height: 65px;
        padding: 0;
        padding-right: 3rem;
    }
    
    .nav div.main_list ul li a {
        text-decoration: none;
        color: #fff;
        line-height: 65px;
        font-size: 2.4rem;
    }
    
    .nav div.main_list ul li a:hover {
        color: #00E676;
    }
    
    
    /* Home section */
    
    .home {
        width: 100%;
        height: 100vh;
        background-image: url(https://images.unsplash.com/photo-1498550744921-75f79806b8a7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b0f6908fa5e81286213c7211276e6b3d&auto=format&fit=crop&w=1500&q=80);
        background-position: center top;
        background-size:cover;
    }
    
    .navTrigger {
        display: none;
    }
    
    .nav {
        padding-top: 20px;
        padding-bottom: 20px;
        -webkit-transition: all 0.4s ease;
        transition: all 0.4s ease;
    }
    
    
    /* Media qurey section */
    
    @media screen and (min-width: 768px) and (max-width: 1024px) {
        .container {
            margin: 0;
        }
    }
    
    @media screen and (max-width:768px) {
        .navTrigger {
            display: block;
        }
        .nav div.logo {
            margin-left: 15px;
        }
        .nav div.main_list {
            width: 100%;
            height: 0;
            overflow: hidden;
        }
        .nav div.show_list {
            height: auto;
            display: none;
        }
        .nav div.main_list ul {
            flex-direction: column;
            width: 100%;
            height: 100vh;
            right: 0;
            left: 0;
            bottom: 0;
            background-color: white;
            /*same background color of navbar*/
            background-position: center top;
        }
        .nav div.main_list ul li {
            width: 100%;
            text-align: right;
        }
        .nav div.main_list ul li a {
            text-align: center;
            width: 100%;
            font-size: 3rem;
            padding: 20px;
        }
        .nav div.media_button {
            display: block;
        }
    }
    
    
    /* Animation */
    /* Inspiration taken from Dicson https://codemyui.com/simple-hamburger-menu-x-mark-animation/ */
    
    .navTrigger {
        cursor: pointer;
        width: 30px;
        height: 25px;
        margin: auto;
        position: absolute;
        right: 30px;
        top: 0;
        bottom: 0;
        color: #00E676;
    }
    
    .navTrigger i {
        background-color: #fff;
        border-radius: 2px;
        content: '';
        display: block;
        width: 100%;
        height: 4px;
    }
    
    .navTrigger i:nth-child(1) {
        -webkit-animation: outT 0.8s backwards;
        animation: outT 0.8s backwards;
        -webkit-animation-direction: reverse;
        animation-direction: reverse;
      
    }
    
    .navTrigger i:nth-child(2) {
        margin: 5px 0;
        -webkit-animation: outM 0.8s backwards;
        animation: outM 0.8s backwards;
        -webkit-animation-direction: reverse;
        animation-direction: reverse;
    }
    
    .navTrigger i:nth-child(3) {
        -webkit-animation: outBtm 0.8s backwards;
        animation: outBtm 0.8s backwards;
        -webkit-animation-direction: reverse;
        animation-direction: reverse;
    }
    
    .navTrigger.active i:nth-child(1) {
        -webkit-animation: inT 0.8s forwards;
        animation: inT 0.8s forwards;
    }
    
    .navTrigger.active i:nth-child(2) {
        -webkit-animation: inM 0.8s forwards;
        animation: inM 0.8s forwards;
    }
    
    .navTrigger.active i:nth-child(3) {
        -webkit-animation: inBtm 0.8s forwards;
        animation: inBtm 0.8s forwards;
    }
    
    @-webkit-keyframes inM {
        50% {
            -webkit-transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(45deg);
        }
    }
    
    @keyframes inM {
        50% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(45deg);
        }
    }
    
    @-webkit-keyframes outM {
        50% {
            -webkit-transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(45deg);
        }
    }
    
    @keyframes outM {
        50% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(45deg);
        }
    }
    
    @-webkit-keyframes inT {
        0% {
            -webkit-transform: translateY(0px) rotate(0deg);
        }
        50% {
            -webkit-transform: translateY(9px) rotate(0deg);
        }
        100% {
            -webkit-transform: translateY(9px) rotate(135deg);
        }
    }
    
    @keyframes inT {
        0% {
            transform: translateY(0px) rotate(0deg);
        }
        50% {
            transform: translateY(9px) rotate(0deg);
        }
        100% {
            transform: translateY(9px) rotate(135deg);
        }
    }
    
    @-webkit-keyframes outT {
        0% {
            -webkit-transform: translateY(0px) rotate(0deg);
        }
        50% {
            -webkit-transform: translateY(9px) rotate(0deg);
        }
        100% {
            -webkit-transform: translateY(9px) rotate(135deg);
        }
    }
    
    @keyframes outT {
        0% {
            transform: translateY(0px) rotate(0deg);
        }
        50% {
            transform: translateY(9px) rotate(0deg);
        }
        100% {
            transform: translateY(9px) rotate(135deg);
        }
    }
    
    @-webkit-keyframes inBtm {
        0% {
            -webkit-transform: translateY(0px) rotate(0deg);
        }
        50% {
            -webkit-transform: translateY(-9px) rotate(0deg);
        }
        100% {
            -webkit-transform: translateY(-9px) rotate(135deg);
        }
    }
    
    @keyframes inBtm {
        0% {
            transform: translateY(0px) rotate(0deg);
        }
        50% {
            transform: translateY(-9px) rotate(0deg);
        }
        100% {
            transform: translateY(-9px) rotate(135deg);
        }
    }
    
    @-webkit-keyframes outBtm {
        0% {
            -webkit-transform: translateY(0px) rotate(0deg);
        }
        50% {
            -webkit-transform: translateY(-9px) rotate(0deg);
        }
        100% {
            -webkit-transform: translateY(-9px) rotate(135deg);
        }
    }
    
    @keyframes outBtm {
        0% {
            transform: translateY(0px) rotate(0deg);
        }
        50% {
            transform: translateY(-9px) rotate(0deg);
        }
        100% {
            transform: translateY(-9px) rotate(135deg);
        }
    }
    
    .affix {
        padding: 0;
        background-color: #e4d5d5;
    }
    
    
    
    
    
    
    .myH2 {
        text-align:center;
        font-size: 4rem;
    }
    .myP {
        text-align: justify;
        padding-left:15%;
        padding-right:15%;
        font-size: 20px;
    }
    @media all and (max-width:700px){
        .myP {
            padding:2%;
        }
    }

    /* Dropdown menu style */
    .dropdown-menu {
    
      border: none;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      padding: 3px 0;
      max-height: 0px; 
      font-size: 1.4rem; 
    }
    
    .dropdown-item {
      padding: 2px;
      // color: #333;
      transition: background-color 0.3s, color 0.3s;
    }
    
    .dropdown-item:hover {
      background-color: transparent;
    }
    
    .dropdown-menu:before {
      content: "";
      position: absolute;
      top: -10px;
      left: 50%;
      margin-left: -10px;
      border-width: 0px;
      border-style: solid;
      border-color: transparent transparent #f8f9fa transparent;
    }
    

    
      `}} />
  

           
   
       </>

       <nav className={`nav ${menuActive ? 'affix' : ''}`}>
  <div className="container" style={{ color: 'black' }}>
  <div className="logo">
      <a href="/">
        <img src={xAI} alt="Trips Logo" height={"50px"} weight={"50px"}/>
        Trips
      </a>
    </div>
    <div id="mainListDiv" className={`main_list ${menuActive ? 'show_list' : ''}`}>
      <ul className="navlinks">
        <li>
          <NavLink exact to="/HomeOld">Home</NavLink>
        </li>
        <li>
          <NavLink exact to="/Gallery">Tour Packages</NavLink>
        </li>
        <li>
          <NavLink exact to="/Agent_Signup">Agent</NavLink>
        </li>
        <li>
          <NavLink exact to="/Login_Admin">Admin</NavLink>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="pagesDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Login
          </a>
          <div className="dropdown-menu" aria-labelledby="pagesDropdown">
            <NavLink exact to="/Signup" className="dropdown-item">
              User Sign up
            </NavLink>
            <NavLink exact to="/TravelLogin" className="dropdown-item">
              User Login
            </NavLink>
          
          </div>
        </li>
      </ul>
    </div>
    <span className={`navTrigger ${menuActive ? 'active' : ''}`} onClick={toggleMenu}>
      <i>sqassq</i>
      <i>sqs</i>
      <i>sqsq</i>
    </span>
  </div>
</nav>


<div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5" style={{marginTop:"200px"}}>
          <h1 className="display-3 text-white mb-3 animated slideInDown">About Us</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb text-uppercase mb-0" >
              <li className="breadcrumb-item"><a className="text-white" href="/home">Home</a></li>
              
              <li className="breadcrumb-item text-primary active" aria-current="page"><a className="text-white" href="/">About</a></li>
            </ol>
          </nav>
          <div className="showcase-content">
    <h1>Discover the most engaging places</h1>
    <a href="https://earth.google.com/web/" target="_blank" className="showcase-button">
      <img src="/Imgs/icons/globe.png" alt="" /> Discover on 3D globe
    </a>
  </div>
        </div>
      </div>
            
            </>


            <div className="container-xxl py-5" >
                    <div className="container">
                        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px" ,padding:'50px'}}>
                            <h1><b>Explore New Places</b></h1>
                        </div>
                        <div className="row g-4">
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="team-item position-relative rounded overflow-hidden">
                                    <div className="overflow-hidden">
                                        <img className="img-fluid" src="https://images.unsplash.com/photo-1581790061118-2cd9a40164b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80" alt="" />
                                    </div>
                                    <div className="team-text bg-light text-center p-4">
                                        <h5>Big sur</h5>
                                        <p className="text-primary">California, USA</p>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="team-item position-relative rounded overflow-hidden">
                                    <div className="overflow-hidden">
                                        <img className="img-fluid" src="https://images.unsplash.com/photo-1527824404775-dce343118ebc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                                    </div>
                                    <div className="team-text bg-light text-center p-4">
                                        <h5>Prescott</h5>
                                        <p className="text-primary">Arizona, USA</p>
                                       
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="team-item position-relative rounded overflow-hidden">
                                    <div className="overflow-hidden">
                                        <img className="img-fluid" src="https://images.unsplash.com/photo-1512936702668-1ab037aced2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                                    </div>
                                    <div className="team-text bg-light text-center p-4">
                                        <h5>Fort Myers</h5>
                                        <p className="text-primary">Florida, USA</p>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                                <div className="team-item position-relative rounded overflow-hidden">
                                    <div className="overflow-hidden">
                                        <img className="img-fluid" src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1121&q=80" alt="" />
                                    </div>
                                    <div className="team-text bg-light text-center p-4">
                                        <h5>Tucson</h5>
                                        <p className="text-primary">Arizona, USA</p>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="row g-4">
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="team-item position-relative rounded overflow-hidden">
                                    <div className="overflow-hidden">
                                        <img className="img-fluid"  src="https://images.unsplash.com/photo-1601425262040-ba23fe84f701?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                                    </div>
                                    <div className="team-text bg-light text-center p-4">
                                        <h5>St. Joseph</h5>
                                        <p className="text-primary">Michigan, USA</p>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="team-item position-relative rounded overflow-hidden">
                                    <div className="overflow-hidden">
                                        <img className="img-fluid" src="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                                    </div>
                                    <div className="team-text bg-light text-center p-4">
                                        <h5>Madrid</h5>
                                        <p className="text-primary">Spain</p>
                                       
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="team-item position-relative rounded overflow-hidden">
                                    <div className="overflow-hidden">
                                        <img className="img-fluid" src="https://images.unsplash.com/photo-1542321993-8fc36217e26d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                                    </div>
                                    <div className="team-text bg-light text-center p-4">
                                        <h5>Senja Island</h5>
                                        <p className="text-primary">Norway</p>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                                <div className="team-item position-relative rounded overflow-hidden">
                                    <div className="overflow-hidden">
                                        <img className="img-fluid" src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80" alt="" />
                                    </div>
                                    <div className="team-text bg-light text-center p-4">
                                        <h5>Eiffel Tower</h5>
                                        <p className="text-primary">Paris, France</p>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            
            

    <section id="tours">
    <div className="container">
    <div className="title-container" style={{padding: "60px",marginLeft:"-50px"}}>
      <h2 className="section-title"><b>Travel Tips and Advice</b></h2>
    </div>
    <div className="tours-cards" >
      <div className="tours-card">
        <div className="tour-img">
          <img
            src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt=""
            width="320"
            height="380"
          />
        </div>
        <div className="tours-card-content">
          <div className="tours-card-contents-text">
            <h3>East Village Ice Cream Crawl</h3>
            <p>
              We will stop at five different world-class ice cream shops on this 1.5 mile 1.5 hour tour. At each ice cream store, we'll explore the story behind the business and see what makes the ice cream unique as you savor every…
            </p>
          </div>
          {/* <div className="tours-card-content-icons">
            <h6>
              <img src="/Imgs/icons/calendersml.png" alt="Calendar Icon" /> Today
            </h6>
            <h6>
              <img src="/Imgs/icons/user.png" alt="User Icon" /> Avenger Initiative
            </h6>
            <h6>
              <img src="/Imgs/icons/message.png" alt="Message Icon" /> 2
            </h6>
          </div> */}
        </div>
      </div>

      <div className="tours-card">
        <div className="tour-img">
          <img
            src="https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt=""
            width="320"
            height="380"
          />
        </div>
        <div className="tours-card-content">
          <div className="tours-card-contents-text">
            <h3>Brooklyn Bridge Cinematic Photo Walk</h3>
            <p>
              This experience takes place at the Brooklyn Bridge Park and Brooklyn Bridge, but I’m always open to capture clients at different locations upon request for an additional charge.
            </p>
          </div>
          {/* <div className="tours-card-content-icons">
            <h6>
              <img src="/Imgs/icons/calendersml.png" alt="Calendar Icon" /> Today
            </h6>
            <h6>
              <img src="/Imgs/icons/user.png" alt="User Icon" /> Ager Pagla
            </h6>
            <h6>
              <img src="/Imgs/icons/message.png" alt="Message Icon" /> 12
            </h6>
          </div> */}
        </div>
      </div>
    </div>
  </div>
</section>

</><div>
               


    <section id="activities" style={{padding:80}}>
  <div className="container">
    <div className="title-container">
      <h2 className="section-title" style={{padding:'20px'}}><b>Activities</b></h2>
    </div>

    <div className="activities-cards">
      <div className="activities-card">
        <img
          src="https://images.unsplash.com/photo-1513432800008-a900568fccfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
          width="320"
          height="380"
        />
        <h4>Sailing</h4>
      </div>
      <div className="activities-card">
        <img
          src="https://images.unsplash.com/photo-1489805549589-3c5ae55fe740?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt=""
          width="320"
          height="380"
        />
        <h4>Climbing</h4>
      </div>
      <div className="activities-card">
        <img
          src="https://images.unsplash.com/photo-1565992441121-4367c2967103?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
          alt=""
          width="320"
          height="380"
        />
        <h4>Skiing</h4>
      </div>
      <div className="activities-card">
        <img
          src="https://images.unsplash.com/19/nomad.JPG?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1098&q=80"
          alt=""
          width="320"
          height="380"
        />
        <h4>Hiking</h4>
      </div>
    </div>
  </div>
</section>
            </div>
            
            </>

            <section id="About">
  <div className="about-content">
    <h2 style={{fontSize:'80px'}}>About Us</h2>
    <p>
    Our mission is simple: to provide you with unparalleled travel experiences that inspire, delight, and transform. We believe that travel is more than just visiting new places; it's about connecting with cultures, creating memories, and embracing the beauty and diversity of our world. We are dedicated to curating journeys that leave a lasting impact, sparking your curiosity and enriching your life.    </p>

    
  </div>

  <div className="about-img">
    <img src={glass} alt="" width="556" height="488" />
  </div>
</section>

            
    
            
            
            
            <div className="container-fluid bg-dark text-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-light mb-4">Address</h5>
                            <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                            <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+01234567890</p>
                            <p className="mb-2"><i className="fa fa-envelope me-3"></i>xyz@gmail.com</p>
                            
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-light mb-4">Places</h5>
                            <a className="btn btn-link" href="">Packages</a>
                            <a className="btn btn-link" href="">Agency</a>
                            <a className="btn btn-link" href="">Tourist</a>
                            <a className="btn btn-link" href="">Tourism</a>
                            <a className="btn btn-link" href="">About us</a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-light mb-4">Quick Links</h5>
                            <a className="btn btn-link" href="">About Us</a>
                            <a className="btn btn-link" href="">Contact Us</a>
                            <a className="btn btn-link" href="">Our Services</a>
                            <a className="btn btn-link" href="">Terms &amp; Condition</a>
                            <a className="btn btn-link" href="">Support</a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-light mb-4">Newsletter</h5>
                            <p>Any Queries..?</p>
                            <div className="position-relative mx-auto" style={{ maxWidth: '400px' }}>
                                <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text"  placeholder="Suggest" />
                                <button type="button"  className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2" >Post</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="copyright">
                        <div className="row">
                            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                &copy; <a className="border-bottom" href="#">Medico</a>, All Right Reserved.
                            </div>
                            <div className="col-md-6 text-center text-md-end">
                               
                                Designed By <a className="border-bottom" href="">XYZ</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div></>


      

      
    );
  }


export default HomeOld;



