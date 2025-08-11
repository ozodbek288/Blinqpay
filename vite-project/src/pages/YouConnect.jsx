import React from "react";
import "./YouConnect.css";
import { useNavigate } from 'react-router-dom';

const UseYouConnect = () => {
    const navigate = useNavigate();

      const Developmentinprogress = () => {
        navigate('/Progress');
    };



    return (
        <div className="useyou-page">
            <header className="useyou-hero">
                <h1>Use You Connect</h1>
                <p>
                    Now track all of your transactions easily and keep your finances
                    transparent and organized.
                </p>
                <button onClick={Developmentinprogress} className="cta-btn">Get Started</button>
            </header>

            <section className="useyou-section">
                <div className="useyou-block">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/2936/2936635.png"
                        alt="Track Transactions"
                    />
                    <div>
                        <h2>Track Transactions Instantly</h2>
                        <p>
                            View all your incoming and outgoing payments in real time with
                            our advanced dashboard.
                        </p>
                    </div>
                </div>

                <div className="useyou-block reverse">
                    <div>
                        <h2>Organized History</h2>
                        <p>
                            Access your complete payment history with easy filtering and
                            search options.
                        </p>
                    </div>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/4149/4149644.png"
                        alt="History"
                    />
                </div>

                <div className="useyou-block">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                        alt="Secure Data"
                    />
                    <div>
                        <h2>Secure & Reliable</h2>
                        <p>
                            All your transaction data is encrypted and stored securely so you
                            can rest easy.
                        </p>
                    </div>
                </div>

                <div className="useyou-block reverse">
                    <div>
                        <h2>Automated Alerts</h2>
                        <p>
                            Receive notifications for any unusual transactions or important
                            account updates.
                        </p>
                    </div>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
                        alt="Alerts"
                    />
                </div>
            </section>

            <footer className="useyou-footer">
                <h3>Ready to simplify your transaction tracking?</h3>
                <button onClick={Developmentinprogress} className="cta-btn large">Start Now</button>
            </footer>
        </div>
    );
};

export default UseYouConnect;
