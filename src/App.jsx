import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AnaSayfa from './pages/AnaSayfa';
import Gonderiler from './pages/Gonderiler';
import Profil from './pages/Profil';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-[#3b5998] text-white p-4 shadow-md sticky top-0 z-10">
          <div className="max-w-4xl mx-auto flex gap-8 font-semibold">
            <Link to="/" className="hover:text-gray-200">Ana Sayfa</Link>
            <Link to="/gonderiler" className="hover:text-gray-200">Gönderiler</Link>
            <Link to="/profil" className="hover:text-gray-200">Profil</Link>
          </div>
        </nav>

        <main className="max-w-3xl mx-auto mt-10 p-4 mb-20">
          <Routes>
            <Route path="/" element={<AnaSayfa />} />
            <Route path="/gonderiler" element={<Gonderiler />} />
            <Route path="/profil" element={<Profil />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;