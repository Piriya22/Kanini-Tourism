import React, { useState} from 'react';
import pic from './assets/signup.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


function TravelLogin() {
    const [traveller_name, setTravellerName] = useState('');
    const [traveller_password, setTravellerPassword] = useState('');
    const [errorsset, setErrors] = useState({});
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'traveller_name') {
            setTravellerName(value);
        } else if (name === 'traveller_password') {
            setTravellerPassword(value);
        }
    };

    const handleLogin = (e) => {
        e.preventDefault();

        const newErrors = {};
        if (!traveller_name) {
            newErrors.traveller_name = 'Username is required';
        }
        if (!traveller_password) {
            newErrors.traveller_password = 'Password is required';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            console.log("Logging in with:", traveller_name, traveller_password);
            axios
                .post("https://localhost:7152/api/Token/Travellerlogin", { traveller_name, traveller_password })
                .then((response) => {
                    console.log("Login successful:", response.data);
                    localStorage.setItem('token', response.data.token);
                    localStorage.setItem('role','traveller')
                    localStorage.setItem('traveller_id', response.data.id); // Store the traveller_agent_id 
                    toast.success('Login successful.');

                    // Use navigate('/Tour_Fetch') to navigate to the Tour_Fetch page
                    navigate('/Fetch');
                })
                .catch((error) => {
                    console.error("Login error:", error);
                    toast.error('Login failed. Please check your credentials.');
                });
        }
    };
  
  
    

    


  return (
    <div>
      <style dangerouslySetInnerHTML={{__html: `      
  
  /* POPPINS FONT */
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        
        *{  
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Poppins', sans-serif;
        }
        body {
            background-image: url('${pic}');
            background-size: cover;
            background-repeat: no-repeat;
            background-attachment: fixed;
            overflow: hidden;
          }
          
        .wrapper{
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background: rgba(39, 39, 39, 0.4);
        }
        .nav{
            position: fixed;
            top: 0;
            display: flex;
            justify-content: space-around;
            width: 100%;
            height: 100px;
            line-height: 100px;
            background: linear-gradient(rgba(39,39,39, 0.6), transparent);
            z-index: 100;
        }
        .nav-logo p{
            color: black;
            font-size: 25px;
            font-weight: 600;
        }
        .nav-menu ul{
            display: flex;
        }
        .nav-menu ul li{
            list-style-type: none;
        }
        .nav-menu ul li .link{
            text-decoration: none;
            font-weight: 500;
            color: black;
            padding-bottom: 15px;
            margin: 0 25px;
        }
        .link:hover, .active{
            border-bottom: 2px solid #fff;
        }
        .nav-button .btn{
            width: 130px;
            height: 40px;
            font-weight: 500;
            background: rgba(185, 110, 110, 0.4);
            border: none;
            border-radius: 30px;
            cursor: pointer;
            transition: .3s ease;
        }
        .btn:hover{
            background: rgba(255, 255, 255, 0.3);
        }
        #registerBtn{
            margin-left: 15px;
        }
        .btn.white-btn{
            background: rgba(255, 255, 255, 0.7);
        }
        .btn.btn.white-btn:hover{
            background: rgba(255, 255, 255, 0.5);
        }
        .nav-menu-btn{
            display: none;
        }
        .form-box{
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 512px;
            height: 420px;
            overflow: hidden;
            z-index: 2;
        }
        .login-container{
            position: absolute;
            left: 4px;
            width: 500px;
            display: flex;
            flex-direction: column;
            transition: .5s ease-in-out;
        }
        .register-container{
            position: absolute;
          
            width: 500px;
            display: flex;
            flex-direction: column;
            transition: .5s ease-in-out;
        }
        .top span{
            color: #fff;
            font-size: small;
            padding: 10px 0;
            display: flex;
            justify-content: center;
        }
        .top span a{
            font-weight: 500;
            color: #fff;
            margin-left: 5px;
        }
        header{
            color: #fff;
            font-size: 30px;
            text-align: center;
            padding: 10px 0 30px 0;
        }
        .two-forms{
            display: flex;
            gap: 10px;
        }
        .input-field{
            font-size: 15px;
            background: rgba(255, 255, 255, 0.2);
            color: #fff;
            height: 50px;
            width: 100%;
            padding: 0 10px 0 45px;
            border: none;
            border-radius: 30px;
            outline: none;
            transition: .2s ease;
        }
        .input-field:hover, .input-field:focus{
            background: rgba(255, 255, 255, 0.25);
        }
        ::-webkit-input-placeholder{
            color: #fff;
        }
        .input-box i{
            position: relative;
            top: -35px;
            left: 17px;
            color: #fff;
        }
        .submit{
            font-size: 15px;
            font-weight: 500;
            color: black;
            height: 45px;
            width: 100%;
            border: none;
            border-radius: 30px;
            outline: none;
            background: rgba(255, 255, 255, 0.7);
            cursor: pointer;
            transition: .3s ease-in-out;
        }
        .submit:hover{
            background: rgba(255, 255, 255, 0.5);
            box-shadow: 1px 5px 7px 1px rgba(0, 0, 0, 0.2);
        }
        .two-col{
            display: flex;
            justify-content: space-between;
            color: #fff;
            font-size: small;
            margin-top: 10px;
        }
        .two-col .one{
            display: flex;
            gap: 5px;
        }
        .two label a{
            text-decoration: none;
            color: #fff;
        }
        .two label a:hover{
            text-decoration: underline;
        }
        @media only screen and (max-width: 786px){
            .nav-button{
                display: none;
            }
            .nav-menu.responsive{
                top: 100px;
            }
            .nav-menu{
                position: absolute;
                top: -800px;
                display: flex;
                justify-content: center;
                background: rgba(255, 255, 255, 0.2);
                width: 100%;
                height: 90vh;
                backdrop-filter: blur(20px);
                transition: .3s;
            }
            .nav-menu ul{
                flex-direction: column;
                text-align: center;
            }
            .nav-menu-btn{
                display: block;
            }
            .nav-menu-btn i{
                font-size: 25px;
                color: #fff;
                padding: 10px;
                background: rgba(255, 255, 255, 0.2);
                border-radius: 50%;
                cursor: pointer;
                transition: .3s;
            }
            .nav-menu-btn i:hover{
                background: rgba(255, 255, 255, 0.15);
            }
        }
        @media only screen and (max-width: 540px) {
            .wrapper{
                min-height: 100vh;
            }
            .form-box{
                width: 100%;
                height: 500px;
            }
            .register-container, .login-container{
                width: 100%;
                padding: 0 20px;
            }
            .register-container .two-forms{
                flex-direction: column;
                gap: 0;
            }
        }  
      
      
                      `}} />

    
<div className="wrapper">
      <div className="register-container" id="register">
        <div className="top">
          <header>LOGIN</header>
        </div>
        <form onSubmit={handleLogin} encType="multipart/form-data">
          <div className="input-box">
            <input
              value={traveller_name}
              onChange={handleInputChange}
              className="input-field"
              placeholder="Username"
              name="traveller_name"
            />
          </div>
          <br />
          <br />
          <div className="input-box">
            <input
              type="password"
              value={traveller_password}
              onChange={handleInputChange}
              className="input-field"
              placeholder="Password"
              name="traveller_password"
            />
          </div>
          <br />
          <div className="input-box">
            <input type="submit" className="submit" value="Login" />
          </div>
        </form>
      
      </div>
    </div>
    </div>

      

  );
}



export default TravelLogin;
