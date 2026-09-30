import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import Home from './pages/Home';
import NotFound from './pages/NotFound';

function MainLayout() {
  return (
    <div className='relative z-10 flex flex-col min-h-screen'>
      <Navbar />
      <main className='grow'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      {/* 1. Tambahkan bg-slate-950 tanpa prefix dark: agar default-nya SELALU gelap (termasuk di HP Light Mode) */}
      <div className="bg-slate-950 text-slate-100 min-h-screen font-sans antialiased relative overflow-x-hidden transition-colors duration-300">

        {/* Background Bergerak (Fixed) */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-72 sm:w-125 h-72 sm:h-125 bg-indigo-600/30 rounded-full blur-[90px] sm:blur-[120px] animate-blob" />
          <div className="absolute top-[35%] -right-20 w-72 sm:w-125 h-72 sm:h-125 bg-purple-600/30 rounded-full blur-[90px] sm:blur-[120px] animate-blob animation-delay-2000" />
          <div className="absolute -bottom-20 left-[20%] w-72 sm:w-125 h-72 sm:h-125 bg-yellow-600/30 rounded-full blur-[90px] sm:blur-[120px] animate-blob animation-delay-4000" />

          {/* 2. Perbaiki sintaks arbitrary background size Tailwind */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-size:[4rem_4rem]" />
        </div>

        {/* Pengaturan Route */}
        <Routes>
          {/* Route main pages */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
          </Route>

          {/* Route NotFound pages */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}