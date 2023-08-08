import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import Agent_Signup from "./Agent_Signup";
import AnimatedLoginForm from "./Login_Admin";
import Approve from "./Approve";
import Signup from "./Signup";
import HomeOld from "./HomeOld";
import BookingConfirmation from './BookingConfirmation';
import { BookingProvider } from './BookingContext';
import Tour_Fetch from './Tour_Fetch';
import Tour_Post from './Tour_Post';
import Agent_Login from './Agent_Login';
import Tour_package from './Tour_Package';
import TravelLogin from './TravelLogin';
import Gallery from './Gallery';
import NewBook from './NewBook';
import Status from './Status';
import Fetch from './Fetch';
import Payment from './Payment';
import Pdf from './Pdf';

function TravelAgent({role, children})
{
    if(localStorage.getItem("role")!= null && localStorage.getItem("role") === "agent")
    {
        return children;
    }
    return <Navigate to="/"/>
}


function Admin({role, children})
{
    if(localStorage.getItem("role")!= null && localStorage.getItem("role") === "admin")
    {
        return children;
    }
    return <Navigate to="/"/>
}


function Traveller({role, children})
{
    if(localStorage.getItem("role")!= null && localStorage.getItem("role") === "traveller")
    {
        return children;
    }
    return <Navigate to="/"/>
}

function App() {


  return (



    <div>
      <ToastContainer theme='colored'></ToastContainer>
      <Routes>
        {/* Common Pages */}
        <Route path='/' element={<HomeOld/>}></Route>
        <Route path='/TravelLogin' element={<TravelLogin/>}></Route>
        <Route path='/Signup' element={<Signup/>}></Route>
        <Route path='/Agent_Signup' element={<Agent_Signup/>}></Route>
        <Route path='/Gallery' element={<Gallery/>}></Route>
        {/* Admin Pages */}
        <Route path='/Approve' element={ <Admin> {<Approve/>} </Admin> }></Route>
        <Route path='/Login_Admin' element={ <Admin>{<AnimatedLoginForm/>}</Admin>}></Route>
        {/* Agent Pages */}
        <Route path='/Tour_Post' element={<TravelAgent> {<Tour_Post/>} </TravelAgent>}></Route>
        <Route path='/Agent_Login' element={<TravelAgent> {<TravelLogin/>} </TravelAgent>}></Route>
        {/* Traveller Pages */}
        <Route path='/Fetch' element={<Traveller>{<Fetch/>}</Traveller>}></Route>
        <Route path='/NewBook' element={<Traveller>{<NewBook/>}</Traveller>}></Route>
        <Route path='/Status' element={<Traveller>{<Status/>}</Traveller>}></Route>
        <Route path='/Payment' element={<Traveller>{<Payment/>}</Traveller>}></Route>
        <Route path='/Pdf' element={<Traveller>{<Pdf/>}</Traveller>}></Route>

        {/* <Route path='/Tour_Package' element={Tour_package}></Route> */}
        {/* <Route path='/BookingConfirmation' element={BookingConfirmation}></Route> */}
        {/* <Route path='/Tour_Fetch' element={Tour_Fetch}></Route> */}
      </Routes>


    </div>
  );
}

export default App;
