import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';

export default function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 font-sans antialiased relative overflow-x-hidden">
      
      {/* Background Bergerak (Fixed) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-125 h-125 bg-indigo-600/30 rounded-full blur-[120px] animate-blob" />
        <div className="absolute top-[35%] -right-20 w-125 h-125 bg-purple-600/25 rounded-full blur-[120px] animate-blob animation-delay-2000" />
        <div className="absolute -bottom-20 left-[20%] w-125 h-125 bg-cyan-600/25 rounded-full blur-[120px] animate-blob animation-delay-4000" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-size-[4rem_4rem]" />
      </div>

      {/* Konten Halaman */}
      <div className="relative z-10 flex flex-col min-h-screen ">
        <Navbar />
        <main className='grow'>
          <Home />
        </main>
        <Footer />
      </div>

    </div>
  );
}