import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
// import './Login_Admin.css'; 
import wave from './assets/wave.png';
import bgImage from './assets/bg.svg';
import avatarImage from './assets/avatar.svg';

function AdminLoginForm() {

  const [admin_password, setPassword] = useState('');
  const [admin_name, setUserName] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const proceedLoginUsingAPI = (e) => {
    e.preventDefault();
    if (validate()) {
      let inputobj = {
        admin_name: admin_name,
        admin_password: admin_password,
      };
      fetch('https://localhost:7116/api/Token/Admin', {
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
          localStorage.setItem('role','admin')
          localStorage.setItem('token', resp);
          navigate('/Approve');
        })
        .catch((err) => {
          toast.error('Login Failed due to: ' + err.message);
        });
    }
  };

  const validate = () => {
    let result = true;
    if (admin_name.trim() === '') {
      result = false;
      toast.warning('Please Enter Username');
    }
    if (admin_password.trim() === '') {
      result = false;
      toast.warning('Please Enter Password');
    } else if (admin_password.length < 8) {
      result = false;
      toast.warning('Password must be at least 8 characters long');
    }
    return result;
  };

  return (
    <div>
    <style dangerouslySetInnerHTML={{__html: `   
       *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      }
      
      body{
          font-family: 'Poppins', sans-serif;
          overflow: hidden;
          background-color: #333;
      }
      
      .wave{
        position: fixed;
        bottom: 0;
        left: 0;
        height: 100%;
        z-index: -1;
      }
      
      .container{
          width: 100vw;
          height: 100vh;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-gap :7rem;
          padding: 0 2rem;
      }
      
      .img{
        display: flex;
        justify-content: flex-end;
        align-items: center;
      }
      
      .login-content{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        text-align: center;
      }
      
      .img img{
        width: 500px;
      }
      
      form{
        width: 360px;
      }
      
      .login-content img{
          height: 100px;
      }
      
      .login-content h2{
        margin: 15px 0;
        color: #333;
        text-transform: uppercase;
        font-size: 2.9rem;
      }
      
      /* .login-content .input-div{
        position: relative;
          display: grid;
          grid-template-columns: 7% 93%;
          margin: 25px 0;
          padding: 5px 0;
          border-bottom: 2px solid #d9d9d9;
      } */
      
      .login-content .input-div.one{
        margin-top: 0;
      }
      
      /* .i{
        color: #d9d9d9;
        display: flex;
        justify-content: center;
        align-items: center;
      } */
      
      /* .i i{
        transition: .3s;
      } */
      
      .input-div > div{
          position: relative;
        height: 45px;
      }
      
      .input-div > div > h5{
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        color: #999;
        font-size: 18px;
        transition: .3s;
      }
      
      .input-div:before, .input-div:after{
        content: '';
        position: absolute;
        bottom: -2px;
        width: 0%;
        height: 2px;
        background-color: #38d39f;
        transition: .4s;
      }
      
      .input-div:before{
        right: 50%;
      }
      
      .input-div:after{
        left: 50%;
      }
      
      .input-div.focus:before, .input-div.focus:after{
        width: 50%;
      }
      
      .input-div.focus > div > h5{
        top: -5px;
        font-size: 15px;
      }
      
      .input-div.focus > .i > i{
        color: #38d39f;
      }
      
      .input-div > div > input{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        background: none;
        padding: 0.5rem 0.7rem;
        font-size: 1.2rem;
        color: #555;
        font-family: 'poppins', sans-serif;
      }
      
      .input-div.pass{
        margin-bottom: 4px;
      }
      
      a{
        display: block;
        text-align: right;
        text-decoration: none;
        color: #999;
        font-size: 0.9rem;
        transition: .3s;
      }
      
      a:hover{
        color: #38d39f;
      }
      
      .btn{
        display: block;
        width: 100%;
        height: 50px;
        border-radius: 25px;
        outline: none;
        border: none;
        background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f);
        background-size: 200%;
        font-size: 1.2rem;
        color: #fff;
        font-family: 'Poppins', sans-serif;
        text-transform: uppercase;
        margin: 1rem 0;
        cursor: pointer;
        transition: .5s;
      }
      .btn:hover{
        background-position: right;
      }
      
      
      @media screen and (max-width: 1050px){
        .container{
          grid-gap: 5rem;
        }
      }
      
      @media screen and (max-width: 1000px){
        form{
          width: 290px;
        }
      
        .login-content h2{
              font-size: 2.4rem;
              margin: 8px 0;
        }
      
        .img img{
          width: 400px;
        }
      }
      
      @media screen and (max-width: 900px){
        .container{
          grid-template-columns: 1fr;
        }
      
        .img{
          display: none;
        }
      
        .wave{
          display: none;
        }
      
        .login-content{
          justify-content: center;
        }
      }
                  `}} />
    <div className="container">
      <img className="wave" src={wave} alt="Wave" />
      <div className="img">
        <img src={bgImage} alt="Background" />
      </div>
      <div className="login-content">
        <form onSubmit={proceedLoginUsingAPI}>
          <img src={avatarImage} alt="Avatar" />
          <h2 className="title" style={{ color: 'white' }}>Admin Login</h2>
          <div className="input-div one">
            <div className="i">
              <i className="fas fa-user"></i>
            </div>
            <div className="div">
              <div className="form-group">
                <label>User Name </label>
                <input value={admin_name} onChange={e => setUserName(e.target.value)} className="form-control"></input>
              </div>
            </div>
          </div>
          <div className="input-div pass">
            <div className="i">
              <i className="fas fa-lock"></i>
            </div>
            <div className="div">
              <div className="form-group">
                <label>Password</label>
                <input type="password" value={admin_password} onChange={e => setPassword(e.target.value)} className="form-control"></input>
              </div>
            </div>
          </div>
          <div style={{ marginBottom: '40px' }}>
            <a className='' href="#" style={{ marginTop: '20px' }}>Forgot Password?</a>
          </div>
          <input type="submit" className="btn" value="Login" />
        </form>
      </div>
    </div>
    </div>
  );
}

export default AdminLoginForm;
