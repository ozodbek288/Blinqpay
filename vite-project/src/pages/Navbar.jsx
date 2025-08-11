import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../assets/Group 40.svg';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const handleClick = () => {
    toast.warning('Iltimos, ro‘yxatdan o‘ting', {
      position: 'top-center',
      autoClose: 3000,
    });
  };
  const navigate = useNavigate();




  return (
    <nav>
      <div className='container'>
        <div className="navbar">
          <div className="logo">
            <Link to={'/'}><img src={Logo} alt="logo" /></Link>
            <Link to={'/'}><h1>blinqpay</h1></Link>
          </div>

          <ul>
            <Link to={'/Product'}><li >Products</li></Link>
            <Link to={'/Developers'}> <li >Developers</li></Link>
            <Link to={'/Company'}><li>Company</li></Link>
            <Link to={'/PricePage'}><li>Pricing</li></Link>
          </ul>

          <div className="btns">
            <ul>
              <Link to={'/support'}>
                <li
                  className="cursor-pointer text-blue-500 hover:underline"
                >
                  Support
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar