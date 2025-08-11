import React from "react";
import "./Company.css";
import { useNavigate } from 'react-router-dom';

const Company = () => {
    const navigate = useNavigate();

    const Developmentinprogress = () => {
        navigate('/Progress');
    };

      const handleClick = () => {
        toast.warning('Hozircha Ishlamayapti (Biz buning ustidan ishlayapmiz) ', {
          position: 'top-center',
          autoClose: 3000,
        });
      };


    return (
        <div className="company-page">


            <section className="hero">
                <div className="hero-content">
                    <h1>Welcome to Our Company</h1>
                    <p>Building the future, one step at a time.</p>
                </div>
            </section>


            <section className="about">
                <h2>About Us</h2>
                <p>
                    Our company has been at the forefront of innovation for over a
                    decade. We focus on delivering quality products and services
                    worldwide, with a passionate team dedicated to excellence.
                </p>
            </section>


            <section className="team">
                <h2>Our Team</h2>
                <div className="team-grid">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <div className="team-card" key={i}>
                            <img src={`https://randomuser.me/api/portraits/men/${i + 10}.jpg`} alt="Team" />
                            <h3>John Doe {i + 1}</h3>
                            <p>Developer</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="values">
                <h2>Our Values</h2>
                <div className="values-grid">
                    <button onClick={Developmentinprogress} className="value-card">Innovation</button>
                    <button onClick={Developmentinprogress} className="value-card">Integrity</button>
                    <button onClick={Developmentinprogress} className="value-card">Teamwork</button>
                    <button onClick={Developmentinprogress} className="value-card">Customer Focus</button>

                </div>
            </section>


            <section className="timeline">
                <h2>Our Journey</h2>
                <ul>
                    <li><span>2010</span> - Company Founded</li>
                    <li><span>2015</span> - Expanded to International Markets</li>
                    <li><span>2020</span> - Launched Innovative Products</li>
                    <li><span>2023</span> - Over 1M Customers Worldwide</li>
                </ul>
            </section>

            <section className="contact">
                <h2>Contact Us</h2>
                <form>
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <textarea placeholder="Your Message" required></textarea>
                    <button onClick={handleClick} type="submit">Send Message</button>
                </form>
            </section>
        </div>
    );
};

export default Company;
