import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Concepts from './pages/Concepts';
import LivePrices from './pages/LivePrices';
import BlockSimulator from './pages/BlockSimulator';
import Portfolio from './pages/Portfolio';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import './styles/global.css';

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/concepts" element={<Concepts />} />
          <Route path="/live-prices" element={<LivePrices />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/block-simulator" element={<BlockSimulator />} />
          <Route path="/login" element={<Login mode="login" />} />
          <Route path="/signup" element={<Login mode="signup" />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
