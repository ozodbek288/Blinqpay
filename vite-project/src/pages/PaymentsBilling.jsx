import { Link } from 'react-router-dom';
import './SupportCard.css';

function PaymentsBilling() {
  return (
    <div className="getting-started-container">
      <Link to="/support" className="back-link">← Orqaga qaytish</Link>
      <h1 className="page-title">Payments & Billing</h1>
      <p className="page-subtitle">Manage your payments, billing details, and financial records.</p>

      <div className="step-card">
        <h2 className="step-title">1. To‘lov usulini tanlash</h2>
        <p className="step-content">
          Stripe, Payme, Click kabi to‘lov tizimlaridan birini tanlang va ularga ulanish uchun kerakli ma’lumotlarni kiriting.
        </p>
      </div>

      <div className="step-card">
        <h2 className="step-title">2. Billing ma’lumotlarini kiritish</h2>
        <p className="step-content">
          Billing sahifasida kompaniyangiz ma’lumotlarini to‘ldiring: nomi, manzili, soliq raqami va boshqa kerakli ma’lumotlar.
        </p>
      </div>

      <div className="step-card">
        <h2 className="step-title">3. Billing hujjatlarini ko‘rish</h2>
        <p className="step-content">
          Har oyda avtomatik tarzda billing fayllar (invoice, receipt) yaratiladi. Ularni PDF ko‘rinishida yuklab olish mumkin.
        </p>
      </div>
    </div>
  );
}

export default PaymentsBilling;
