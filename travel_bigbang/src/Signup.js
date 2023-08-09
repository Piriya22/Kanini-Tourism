import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import pic from './assets/signup.jpg';

function Signup() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isLoginForm, setLoginForm] = useState(true);
    const [traveller_name, setUsername] = useState('');
    const [traveller_email, setEmail] = useState('');
    const [traveller_password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
      sessionStorage.clear();
    }, []);


    const proceedLoginUsingAPI = (e) => {
        e.preventDefault();
        if (validate()) {
          let inputobj = {
            traveller_name: traveller_name,
            traveller_email: traveller_email,
            traveller_password: traveller_password,
            rememberMe : rememberMe
          };
          fetch('https://localhost:7152/api/Traveller', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(inputobj),
          })
            .then((res) => {
              if (!res.ok) {
                throw new Error('Invalid credentials');
              }
              return res.text();
            })
            .then((resp) => {
              console.log(resp);
              toast.success('Success');
              localStorage.setItem('token', resp);
              navigate('/TravelLogin');
            })
            .catch((err) => {
              toast.error('Login Failed due to: ' + err.message);
            });
        }
      };

  const validate = () => {
    let result = true;
    if (traveller_name.trim() === '') {
      result = false;
      toast.warning('Please Enter Username');
    }
    if (traveller_email.trim() === '') {
        result = false;
        toast.warning('Please Enter Email');
      } else if (!isValidEmail(traveller_email)) {
        result = false;
        toast.warning('Please Enter Valid Email ID');
      }
    if (traveller_password.trim() === '') {
      result = false;
      toast.warning('Please Enter Password');
    } else if (traveller_password.length < 8) {
      result = false;
      toast.warning('Password must be at least 8 characters long');
    }
    return result;
  };

      const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
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
        }            `}} />
      
        <div className="wrapper">
            <nav className="nav">
                {/* <div className="nav-logo">
                    <p>LOGO .</p>
                </div>
                <div className={`nav-menu ${isMenuOpen ? 'responsive' : ''}`} id="navMenu">
                    <ul>
                        <li><a href="#" className="link active">Home</a></li>
                        <li><a href="#" className="link">Blog</a></li>
                        <li><a href="#" className="link">Services</a></li>
                        <li><a href="#" className="link">About</a></li>
                    </ul>
                </div> */}
                {/* <div className="nav-button">
                    <button className={`btn ${isLoginForm ? 'white-btn' : ''}`} id="loginBtn" onClick={handleLoginClick}>Sign In</button>
                    <button className={`btn ${!isLoginForm ? 'white-btn' : ''}`} id="registerBtn" onClick={handleRegisterClick}>Sign Up</button>
                </div> */}
                <div className="nav-menu-btn">
                    <i className="bx bx-menu" ></i>
                </div>
            </nav>

            <div class="register-container" id="register">
                                <div className="top">
                    <span>Have an account? <a href="#" >Login</a></span>
                    <header>Travellers Sign Up</header>
                </div>
                <form onSubmit={proceedLoginUsingAPI}>
                
                    <div className="input-box">
               
                    <input value={traveller_name} onChange={e => setUsername(e.target.value)} className="input-field" placeholder="Username"></input>                        <i className="bx bx-user"></i>
                    </div>
                <br></br>
                <div className="input-box">
                <input value={traveller_email} onChange={e => setEmail(e.target.value)} className="input-field" placeholder="Email"></input> 
                    <i className="bx bx-envelope"></i>
                </div><br></br>
                <div className="input-box">
                <input type="password" value={traveller_password} onChange={e => setPassword(e.target.value)} className="input-field" placeholder="password"></input>                    <i className="bx bx-lock-alt"></i>
                </div><br></br>
                <div className="input-box">
                    <input type="submit" className="submit" value="Register" />
                </div>
                </form>
                <div className="two-col">
                <div className="one">
                     <label>
                         <input
                            type="checkbox"
                            id="register-check"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}/>
                            Remember Me
                            </label>
                </div>
                   
                    <div className="two">
                        <label><a href="#">Terms &amp; conditions</a></label>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Signup;
