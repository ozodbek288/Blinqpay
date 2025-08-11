import { Link } from 'react-router-dom';
import './SupportCard.css';

function TechnicalHelp() {
  return (
    <div className="getting-started-container">
      <Link to="/support" className="back-link">← Orqaga qaytish</Link>
      <h1 className="page-title">Technical Help</h1>
      <p className="page-subtitle">Get help with integration, API, and technical issues.</p>

      <div className="step-card">
        <h2 className="step-title">1. API hujjatlari</h2>
        <p className="step-content">
          To‘liq API hujjatlaridan foydalanib tizimni oson integratsiya qiling. Endpoint’lar va autentifikatsiya haqida ma’lumotlar shu yerda mavjud.
        </p>
      </div>

      <div className="step-card">
        <h2 className="step-title">2. Test muhiti</h2>
        <p className="step-content">
          Integratsiya qilishdan oldin test muhitida tizimni sinab ko‘ring. Test ma’lumotlar va tokenlar yordamida simulyatsiya qiling.
        </p>
      </div>

      <div className="step-card">
        <h2 className="step-title">3. Texnik yordam</h2>
        <p className="step-content">
          Agar xatoliklar yoki texnik muammolar yuzaga kelsa, texnik yordam jamoasiga murojaat qiling: support@company.com
        </p>
      </div>
    </div>
  );
}

export default TechnicalHelp;
