import React from "react";
import { FaCheckCircle, FaMobileAlt, FaLock, FaCloud, FaSyncAlt } from "react-icons/fa";
import easy from '../assets/easy.png'
import { useNavigate } from 'react-router-dom';


const EasyAccessPage = () => {

  const navigate = useNavigate();

  const Developmentinprogress = () => {
        navigate('/Progress');
    };

  return (
    <div className="bg-gradient-to-b from-purple-50 to-white min-h-screen flex flex-col w-full">


      <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-20 w-full min-h-[600px]">
        <div className="max-w-xl w-full">
          <h1 className="text-5xl font-bold text-purple-800 leading-tight w-full">
            Easy Access <br /> To Your Finances
          </h1>
          <p className="mt-6 text-lg text-gray-600 w-full">
            Control your finances anytime, anywhere with secure and easy access to your dashboard.
            Enjoy seamless connectivity and a smooth experience.
          </p>
          <button onClick={Developmentinprogress} className="mt-8 bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-lg shadow-lg transition w-48 h-12">
            Get Started
          </button>
        </div>
        <img
          src={easy}
          alt="Easy Access"
          className="mt-10 md:mt-0 rounded-xl shadow-lg w-[500px] h-[350px] object-cover"
        />
      </section>


      <section className="bg-white py-20 px-8 md:px-20 w-full">
        <h2 className="text-3xl font-bold text-center text-purple-800 mb-16 w-full">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto w-full mt-12">
          {[
            { icon: <FaMobileAlt />, title: "Mobile Friendly", desc: "Access from any device with a fully responsive design." },
            { icon: <FaLock />, title: "Secure Login", desc: "Your data is protected with industry-leading encryption." },
            { icon: <FaCloud />, title: "Cloud Sync", desc: "Always have your latest data synced in real-time." },
            { icon: <FaSyncAlt />, title: "Fast Performance", desc: "Enjoy lightning-fast loading and smooth navigation." },
            { icon: <FaCheckCircle />, title: "User Friendly", desc: "Designed to be simple and intuitive for everyone." },
          ].map((f, i) => (
            <div
              key={i}
              className="bg-purple-50 rounded-xl p-6 shadow hover:shadow-lg transition w-full h-[220px] flex flex-col"
            >
              <div className="text-purple-700 text-4xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>


      <section className="py-20 bg-purple-700 text-white text-center w-full">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
          {[
            { num: "50K+", label: "Active Users" },
            { num: "99.9%", label: "Uptime" },
            { num: "24/7", label: "Support" },
          ].map((s, i) => (
            <div key={i} className="w-full h-[100px] flex flex-col justify-center">
              <p className="text-4xl font-bold">{s.num}</p>
              <p className="mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </section>


      <section className="py-20 px-8 md:px-20 w-full">
        <h2 className="text-3xl font-bold text-center text-purple-800 mb-16 w-full">
          How It Works
        </h2>
        <div className="space-y-12 max-w-4xl mx-auto w-full">
          {[
            { step: "1", title: "Sign Up", desc: "Create your account in just a few clicks." },
            { step: "2", title: "Log In", desc: "Access your dashboard securely from anywhere." },
            { step: "3", title: "Manage", desc: "Track and manage your finances effortlessly." },
          ].map((s, i) => (
            <div key={i} className="flex items-start w-full h-[100px]">
              <div className="bg-purple-700 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mr-6">
                {s.step}
              </div>
              <div className="w-full">
                <h3 className="text-xl font-semibold text-purple-800">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>


      <section className="bg-purple-800 text-white py-20 text-center w-full">
        <h2 className="text-3xl font-bold mb-6 w-full">Ready to Get Easy Access?</h2>
        <p className="max-w-2xl mx-auto mb-8 w-full">
          Join thousands of users who trust our platform for secure, easy, and fast access to their finances.
        </p>
        <button onClick={Developmentinprogress} className="bg-white text-purple-800 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition w-48 h-12">
          Sign Up Now
        </button>
      </section>
    </div>
  );
};

export default EasyAccessPage;
