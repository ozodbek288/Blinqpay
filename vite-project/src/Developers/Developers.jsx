// src/pages/Developers.jsx
import React from "react";
import "./Developers.css";

const Developers = () => {
    const Navdevelopers = [
        { name: "John Smith", img: "https://randomuser.me/api/portraits/men/1.jpg" },
        { name: "Emma Johnson", img: "https://randomuser.me/api/portraits/women/2.jpg" },
        { name: "Michael Brown", img: "https://randomuser.me/api/portraits/men/3.jpg" },
        { name: "Sophia Davis", img: "https://randomuser.me/api/portraits/women/4.jpg" },
        { name: "James Wilson", img: "https://randomuser.me/api/portraits/men/5.jpg" },
        { name: "Olivia Martinez", img: "https://randomuser.me/api/portraits/women/6.jpg" },
        { name: "William Taylor", img: "https://randomuser.me/api/portraits/men/7.jpg" },
        { name: "Ava Thomas", img: "https://randomuser.me/api/portraits/women/8.jpg" },
        { name: "Benjamin Anderson", img: "https://randomuser.me/api/portraits/men/9.jpg" },
        { name: "Isabella Moore", img: "https://randomuser.me/api/portraits/women/10.jpg" },
    ];

    const HomePageDev = [
        { name: "Lucas Jackson", img: "https://randomuser.me/api/portraits/men/11.jpg" },
        { name: "Mia White", img: "https://randomuser.me/api/portraits/women/12.jpg" },
        { name: "Henry Harris", img: "https://randomuser.me/api/portraits/men/13.jpg" },
        { name: "Charlotte Martin", img: "https://randomuser.me/api/portraits/women/14.jpg" },
        { name: "Alexander Thompson", img: "https://randomuser.me/api/portraits/men/15.jpg" },
        { name: "Amelia Garcia", img: "https://randomuser.me/api/portraits/women/16.jpg" },
        { name: "Daniel Martinez", img: "https://randomuser.me/api/portraits/men/17.jpg" },
        { name: "Harper Robinson", img: "https://randomuser.me/api/portraits/women/18.jpg" },
        { name: "Matthew Clark", img: "https://randomuser.me/api/portraits/men/19.jpg" },
        { name: "Evelyn Rodriguez", img: "https://randomuser.me/api/portraits/women/20.jpg" },
        { name: "Joseph Lewis", img: "https://randomuser.me/api/portraits/men/21.jpg" },
        { name: "Abigail Lee", img: "https://randomuser.me/api/portraits/women/22.jpg" },
        { name: "Samuel Walker", img: "https://randomuser.me/api/portraits/men/23.jpg" },
        { name: "Ella Hall", img: "https://randomuser.me/api/portraits/women/24.jpg" },
        { name: "David Allen", img: "https://randomuser.me/api/portraits/men/25.jpg" },
        { name: "Scarlett Young", img: "https://randomuser.me/api/portraits/women/26.jpg" },
        { name: "Andrew Hernandez", img: "https://randomuser.me/api/portraits/men/27.jpg" },
        { name: "Grace King", img: "https://randomuser.me/api/portraits/women/28.jpg" },
        { name: "Joshua Wright", img: "https://randomuser.me/api/portraits/men/29.jpg" },
        { name: "Chloe Scott", img: "https://randomuser.me/api/portraits/women/30.jpg" },
    ];

    const FooterDev = [
        { name: "Christopher Green", img: "https://randomuser.me/api/portraits/men/31.jpg" },
        { name: "Lily Adams", img: "https://randomuser.me/api/portraits/women/32.jpg" },
        { name: "Ethan Baker", img: "https://randomuser.me/api/portraits/men/33.jpg" },
        { name: "Zoe Nelson", img: "https://randomuser.me/api/portraits/women/34.jpg" },
        { name: "Anthony Carter", img: "https://randomuser.me/api/portraits/men/35.jpg" },
        { name: "Hannah Mitchell", img: "https://randomuser.me/api/portraits/women/36.jpg" },
        { name: "Ryan Perez", img: "https://randomuser.me/api/portraits/men/37.jpg" },
        { name: "Victoria Roberts", img: "https://randomuser.me/api/portraits/women/38.jpg" },
        { name: "Nathan Turner", img: "https://randomuser.me/api/portraits/men/39.jpg" },
        { name: "Aria Phillips", img: "https://randomuser.me/api/portraits/women/40.jpg" },
        { name: "Christian Campbell", img: "https://randomuser.me/api/portraits/men/41.jpg" },
        { name: "Sofia Parker", img: "https://randomuser.me/api/portraits/women/42.jpg" },
        { name: "Jonathan Evans", img: "https://randomuser.me/api/portraits/men/43.jpg" },
        { name: "Layla Edwards", img: "https://randomuser.me/api/portraits/women/44.jpg" },
        { name: "Aaron Collins", img: "https://randomuser.me/api/portraits/men/45.jpg" },
        { name: "Riley Stewart", img: "https://randomuser.me/api/portraits/women/46.jpg" },
        { name: "Charles Sanchez", img: "https://randomuser.me/api/portraits/men/47.jpg" },
        { name: "Camila Morris", img: "https://randomuser.me/api/portraits/women/48.jpg" },
        { name: "Thomas Rogers", img: "https://randomuser.me/api/portraits/men/49.jpg" },
        { name: "Penelope Reed", img: "https://randomuser.me/api/portraits/women/50.jpg" }
    ];

    return (
        <div className="developers-page">
            <div className="container">
                <div className="Deves">
                    <div className="NavDev">
                        <h1>Navbar Developers</h1>
                        <div className="developers-grid">
                            {Navdevelopers.map((dev, index) => (
                                <div key={index} className="developer-card">
                                    <img src={dev.img} alt={dev.name} />
                                    <p>{dev.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="HomDev">
                        <h1>HomePage Developers</h1>
                        <div className="developers-grid">
                            {HomePageDev.map((dev, index) => (
                                <div key={index} className="developer-card">
                                    <img src={dev.img} alt={dev.name} />
                                    <p>{dev.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="FotDev">
                        <h1>Footer Developers</h1>
                        <div className="developers-grid">
                            {FooterDev.map((dev, index) => (
                                <div key={index} className="developer-card">
                                    <img src={dev.img} alt={dev.name} />
                                    <p>{dev.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Developers;
