import React from 'react';
import Noutbuks from './/assets/image-removebg-preview.png'
import Odam from './/assets/accessibility-outline.svg'
import Analystics from './/assets/analytics.svg'
import Pul from './/assets/cash-outline 1.svg'
import qogoz from './/assets/receipt-outline 1.svg'
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import Social from './/assets/Frame 42.svg'
import Planshet from './/assets/image_14-removebg-preview.png'
import Humans from './/assets/Group 429.png'
import HumansTwo from './/assets/Mask Group.svg'
import Rectange from './/assets/Rectangle 5.svg'
import DED from './/assets/Group 22.svg'
import DEV from './/assets/Group 23.svg'
import Amaki from './/assets/Group 24.svg'
import buvi from './/assets/Group 25.svg'
import opa from './/assets/Group 26.svg'


function HomeApp() {
  const navigate = useNavigate();

  const BtnOne = () => {
    navigate('/EasyAccessPage');
  };

  const BtnTwo = () => {
    navigate('/CashflowVisibility');
  };

  const BtnThree = () => {
    navigate('/YouConnect');
  };

  const BtnFour = () => {
    navigate('/ManageInvoicing');
  };


  return (
    <div className='LogHomePage'>
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
            <button>Start Now</button>
          </div>
          <div className="l-h">
            <img src={Noutbuks} alt="" />
          </div>
        </div>
      </div>
      <div className="Makeishare">
        <div className="container">
          <div className="Makei">
            <div className="r-m">
              <div className="rmake">
                <button onClick={BtnOne}>
                  <div className="custom-card">
                    <div className="c-l">
                    </div>
                    <div className="c-r">
                      <div className="card-icon"><img src={Odam} alt="" /></div>
                      <h3 className="card-title">Easy Access</h3>
                      <p className="card-desc">Now track all of your <br /> transaction easily.</p>
                    </div>
                  </div>
                </button>

                <button onClick={BtnThree}>
                  <div className="custom-card">
                    <div className="c-l">

                    </div>
                    <div className="c-r">
                      <div className="card-icon"><img src={Analystics} alt="" /></div>
                      <h3 className="card-title">Use You Connect</h3>
                      <p className="card-desc">Now track all of your <br /> transaction easily.</p>
                    </div>
                  </div>
                </button>
              </div>
              <div className="lmake">
                <button onClick={BtnTwo}>
                  <div className="custom-card">
                    <div className="c-l">

                    </div>
                    <div className="c-r">
                      <div className="card-icon"><img src={Pul} alt="" /></div>
                      <h3 className="card-title">Cashflow Visiblity</h3>
                      <p className="card-desc">Now track all of your <br /> transaction easily.</p>
                    </div>
                  </div>
                </button>

                <button onClick={BtnFour}>
                  <div className="custom-card">
                    <div className="c-l">

                    </div>
                    <div className="c-r">
                      <div className="card-icon"><img src={qogoz} alt="" /></div>
                      <h3 className="card-title">Manage Invoicing</h3>
                      <p className="card-desc">Now track all of your <br /> transaction easily.</p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
            <div className="l-m">
              <h1>
                Make & Share <br /> <span>Payments</span> With <br /> Community
              </h1>
              <p>
                Hac sem ut eget tellus diam convallis <br /> lacus a, interdum nulla sem adipiscing <br /> inw
              </p>
              <li><Link to={'/MakeShake'}>Learn More</Link></li>
            </div>
          </div>
        </div>
      </div>
      <div className="HeaderThree">
        <div className="container">
          <div className="HThree">
            <div className="top">
              <div className="img">
                <img src={Social} alt="" />
              </div>
            </div>
            <div className="middle">
              <div className="m-l">
                <h1>
                  Payment <br /> <span>Gets Easier</span>
                </h1>
                <p>
                  Hac sem ut eget tellus diam convallis <br /> lacus a, interdum nulla sem adipiscing <br /> inw
                </p>
                <li><Link to={'/MakeShake'}>Learn More</Link></li>
              </div>
              <div className="m-r">
                <img src={Planshet} alt="" />
              </div>
            </div>
            <div className="bottom">
              <div className="m-r">
                <img src={Humans} alt="" />
              </div>
              <div className="m-l">
                <h1>
                  Smart Mobile <br /> <span>Banking</span>
                </h1>
                <p>
                  Hac sem ut eget tellus diam convallis <br /> lacus a, interdum nulla sem adipiscing <br /> inw
                </p>
                <li><Link to={'/Progress'}>Learn More</Link></li>
              </div>
            </div>
            <div className="bottomTwo">
               <div className="m-l">
                <h1>
                  Save Your<br /> <span>Saving</span>
                </h1>
                <p>
                  Hac sem ut eget tellus diam convallis <br /> lacus a, interdum nulla sem adipiscing <br /> inw
                </p>
                <li><Link to={'/Progress'}>Learn More</Link></li>
              </div>
              <div className="m-r">
                <img src={HumansTwo} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="BottomFooter">
        <div className="container">
          <div className="bottomfot">
            <div className="fotlef">
              <h1>
                What Our <span>Customer</span><br /> Are saying
              </h1>
              <p>
                Hac sem ut eget tellus diam convallis lacus a, interdum <br /> nulla sem lacus a, interdum nulla sem adipiscing inw
              </p>
            </div>
            <div className="fotrig">
              <div className="col-1">
                <div className="ded">
                  <img src={DED} alt="" />
                </div>
               <div className="MID">
                 <p className='P'>
                  Hac sem ut eget tellus diam convallis lacus a, <br /> interdum nulla sem lacus a, interdum nulla <br /> sem adipiscing inw
                </p>
                <h1>
                  Leo Maynus
                </h1>
                <h6>
                  CEO at Softpanda
                </h6>
               </div>
               <div className="dev">
                  <img src={DEV} alt="" />
                </div>
              </div>
              <div className="col-2">
                <div className="amaki">
                  <img src={Amaki} alt="" />
                </div>
                <div className="buvi">
                  <img src={buvi} alt="" />
                </div>
                <div className="opa">
                  <img src={opa} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
      <div className="container">
        
        <div className="footer">
          <div className="footer-left">
          <h2 className="logo">blinqpay</h2>
          <p className="copyright">
            © Copy Right 2021. <br /> All rights reserved
          </p>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><Link to="/Progress">Design</Link></li>
            <li><Link to="/Progress">Coding</Link></li>
            <li><Link to="/Progress">Development</Link></li>
            <li><Link to="/Progress">Marketing</Link></li>
            <li><Link to="/Progress">Digital Marketing</Link></li>
            <li><Link to="/Progress">Product Design</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Product</h4>
          <ul>
           <li><Link to="/Progress">Hotel Management</Link></li>
            <li><Link to="/Progress">Rent Management</Link></li>
            <li><Link to="/Progress">Micro-Finance</Link></li>
            <li><Link to="/Progress">Industry</Link></li>
            <li><Link to="/Progress">Dhoko</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
             <li><Link to="/Progress">Las Vegas</Link></li>
            <li><Link to="/Progress">New York</Link></li>
            <li><Link to="/Progress">Tokyo</Link></li>
            <li><Link to="/Progress">Paris</Link></li>
          </ul>
        </div>
        </div>

      </div>
    </footer>
    </div>
  );
}

export default HomeApp;


