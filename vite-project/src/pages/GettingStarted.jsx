import './SupportCard.css';
import { Link } from 'react-router-dom';

function GettingStarted() {
  return (
    <div className="getting-started-container">
      <Link to="/support" className="back-link">← Orqaga qaytish</Link>
      <h1 className="page-title">Getting Started</h1>
      <p className="page-subtitle">Step-by-step guide to set up your account and start accepting payments.</p>

      <div className="step-card">
        <h2 className="step-title">1. Ro‘yxatdan o‘tish</h2>
        <p className="step-content">
          Foydalanuvchi hisobingizni yaratish uchun quyidagi bosqichlarni bajaring: <br />
          - Email kiriting <br />
          - Parol yarating <br />
          - Foydalanuvchi nomini tanlang <br />
          - “Sign Up” tugmasini bosing
        </p>
      </div>

      <div className="step-card">
        <h2 className="step-title">2. Hisobni tasdiqlash</h2>
        <p className="step-content">
          Ro‘yxatdan o‘tgach, sizga tasdiqlovchi email keladi. Linkni bosing va hisobingizni faollashtiring.
        </p>
      </div>

      <div className="step-card">
        <h2 className="step-title">3. To‘lov tizimini ulash</h2>
        <p className="step-content">
          Dashboard orqali to‘lov xizmatini tanlang (Stripe, Payme, Click, Yandex). <br />
          Ma’lumotlaringizni kiriting va API kalitini qo‘shing.
        </p>
      </div>

      <div className="step-card">
        <h2 className="step-title">4. Sozlamalarni tekshirish</h2>
        <p className="step-content">
          Hisob sozlamalaridan foydalanib logotip, til va xavfsizlik sozlamalarini moslang.
        </p>
      </div>
    </div>
  );
}

export default GettingStarted;
