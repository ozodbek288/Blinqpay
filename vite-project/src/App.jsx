import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/CartContext';
import CartSidebar from './components/CartSidebar';

import LogHomePage from './pages/LogHomePage';
import Support from './pages/Support';
import ContactSupport from './pages/ContactSupport';
import GettingStarted from './pages/GettingStarted';
import PaymentsBilling from './pages/PaymentsBilling';
import TechnicalHelp from './pages/TechnicalHelp';
import Login from './pages/Login';
import HomeApp from './HomeApp';
import Layout from './components/Layout';
import Product from './Product/Product';
import ProductCard from './Product/ProductCard';
import ProductTwo from './Product/ProductTwo';
import ProductThree from './Product/ProductThree';
import Developers from './Developers/Developers';
import Company from './Company/Company';
import Developmentinprogress from './Developmentinprogress/Developmentinprogress';
import Price from './Price/Price';
import EasyAccessPage from './pages/EasyAccessPage';
import CashflowVisibility from "./pages/CashflowVisibility";
import CashflowDetailLearnPage from "./pages/Cashflo/wDetailLearnMore";
import YouConnect from './pages/YouConnect';
import ManageInvoicing from './pages/ManageInvoicing';
import MakeShake from './pages/MakeShake';


function App() {
  return (
    <CartProvider>
      <CartSidebar />

      <Routes>
        <Route path="/" element={<LogHomePage />} />
        <Route path="/Login" element={<Login />} />

        <Route element={<Layout />}>
          <Route path="/Product" element={<Product />} />
          <Route path="/ProductCard" element={<ProductCard />} />
          <Route path="/ProductTwo" element={<ProductTwo />} />
          <Route path="/ProductThree" element={<ProductThree />} />
          <Route path="/Developers" element={<Developers />} />
          <Route path="/Company" element={<Company />} />
          <Route path="/Progress" element={<Developmentinprogress />} />
          <Route path="/CashflowVisibility" element={<CashflowVisibility />} />
          <Route path="/CashflowDetailLearnPage" element={<CashflowDetailLearnPage />} />
          <Route path="/YouConnect" element={<YouConnect />} />
          <Route path="/ManageInvoicing" element={<ManageInvoicing />} />
          <Route path="/MakeShake" element={<MakeShake />} />
          <Route path="/PricePage" element={<Price />} />
          <Route path="/support" element={<Support />} />
          <Route path="/EasyAccessPage" element={<EasyAccessPage />} />
          <Route path="/contact-support" element={<ContactSupport />} />
          <Route path="/support/getting-started" element={<GettingStarted />} />
          <Route path="/support/payments-billing" element={<PaymentsBilling />} />
          <Route path="/support/technical-help" element={<TechnicalHelp />} />
          <Route path="/homeapp" element={<HomeApp />} />
        </Route>
      </Routes>
    </CartProvider>
  );
}

export default App;
