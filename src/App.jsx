import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // 👈 Perbaikan Import
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import NotFound from './pages/NotFound'; //

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 min-h-screen font-sans antialiased relative overflow-x-hidden transition-colors duration-300">

        {/* Background Bergerak (Fixed) - Adaptif Mode Terang & Gelap */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-72 sm:w-125 h-72 sm:h-125 bg-indigo-500/20 dark:bg-indigo-600/30 rounded-full blur-[90px] sm:blur-[120px] animate-blob" />
          <div className="absolute top-[35%] -right-20 w-72 sm:w-125 h-72 sm:h-125 bg-purple-500/15 dark:bg-purple-600/30 rounded-full blur-[90px] sm:blur-[120px] animate-blob animation-delay-2000" />
          <div className="absolute -bottom-20 left-[20%] w-72 sm:w-125 h-72 sm:h-125 bg-cyan-500/15 dark:bg-cyan-600/30 rounded-full blur-[90px] sm:blur-[120px] animate-blob animation-delay-4000" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e130_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e130_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-size:[4rem_4rem]" />
        </div>

        {/* Konten Halaman */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          
          <main className="grow">
            <Routes>
              {/* Rute Beranda */}
              <Route path="/" element={<Home />} />
              
              {/* Rute Catch-All (Halaman Tidak Ditemukan / 404) */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer />
        </div>

      </div>
    </BrowserRouter>
  );
}