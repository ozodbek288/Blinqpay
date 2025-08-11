import React from 'react';
import { useNavigate } from 'react-router-dom'; // 💡 navigate uchun
import Logo from '../assets/Group 40.svg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Noutbuks from '../assets/image-removebg-preview.png'
import { Link } from 'react-router-dom';
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet, useLocation } from 'react-router-dom';

const LogHomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    toast.warning('Iltimos, ro‘yxatdan o‘ting', {
      position: 'top-center',
      autoClose: 3000,
    });
  };

  const LoginClick = () => {
    navigate('/Login');
  };

    const location = useLocation();

    const hideNavbar = location.pathname === '/login';

  return (
    <div className="LogHomePage">
      <ToastContainer />
      <nav className='nav'>
        <div className="container">

          <div className="navbar">
            <div className="logo">
              <Link to={'/'}><img src={Logo} alt="logo" /></Link>
              <Link to={'/'}><h1>blinqpay</h1></Link>
            </div>

            <ul>
              <li onClick={handleClick}>Products</li>
              <li onClick={handleClick}>Developers</li>
              <li onClick={handleClick}>Company</li>
              <li onClick={handleClick}>Pricing</li>
            </ul>

            <div className="btns">
              <ul>
                <li
                  onClick={() => navigate('/support')}
                  className="cursor-pointer text-blue-500 hover:underline"
                >
                  Support
                </li>
              </ul>
              <button onClick={LoginClick}>Sign in</button>
            </div>
          </div>
          <Outlet />
        </div>
      </nav>
      <div className="container">
        <div className="Header">
            <div className="r-h">
              <h1>
                Get Your <br />
                Payment Faster
              </h1>
              <p>
                Blinqpay helps businesses in Africa get paid by <br /> anyone, anywhere in the world
              </p>
              <button onClick={LoginClick}>Start Now</button>
            </div>
            <div className="l-h">
              <img src={Noutbuks} alt="" />
            </div>
          </div>
      </div>
    </div>
  );
};

export default LogHomePage;
