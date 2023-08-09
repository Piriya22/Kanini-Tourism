import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import Agent_Signup from "./Agent_Signup";
import AdminLoginForm from "./Login_Admin";
import Signup from "./Signup";
import HomeOld from "./HomeOld";
import Tour_Post from './Tour_Post';
import Agent_Login from './Agent_Login';
import TravelLogin from './TravelLogin';
import Gallery from './Gallery';
import NewBook from './NewBook';
import Status from './Status';
import Fetch from './Fetch';
import Payment from './Payment';
import Pdf from './Pdf';
import Post_Gallery from './Post_Gallery';
import Approve from './Approve'
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
        <Route path='/Fetch' element={<Fetch/>}></Route>
        <Route path='/Agent_Login' element= {<Agent_Login/>}></Route>
        <Route path='/Login_Admin' element={<AdminLoginForm/>}></Route>
        <Route path='/Post_Gallery' element={<Post_Gallery/>}></Route>
        <Route path='/Status' element={<Status/>}></Route>

        <Route path='/Approve' element={<Approve/>}></Route>    
       


        {/* Admin Pages */}
        {/* <Route path='/AdminPage' element={ <Admin> {<AdminPage/>} </Admin> }></Route> */}
        {/* <Route path='/AdminPage' element={<AdminPage/>}></Route> */}
        {/* <Route path='/AdminPage2' element={<AdminPage2/>}></Route> */}

        {/* Agent Pages */}
        <Route path='/Tour_Post' element={<TravelAgent> {<Tour_Post/>} </TravelAgent>}></Route>
        {/* Traveller Pages */}
        <Route path='/NewBook' element={<Traveller>{<NewBook/>}</Traveller>}></Route>
        <Route path='/Status' element={<Traveller>{<Status/>}</Traveller>}></Route>
        <Route path='/Payment' element={<Traveller>{<Payment/>}</Traveller>}></Route>
        <Route path='/Pdf' element={<Traveller>{<Pdf/>}</Traveller>}></Route>
      </Routes>


    </div>
  );
}

export default App;



