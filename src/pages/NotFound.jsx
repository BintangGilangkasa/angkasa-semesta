import React from 'react';
import { ArrowLeft, Home, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300 relative overflow-hidden">
      
      {/* Moving Background Glow */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-87.5 sm:w-125 h-87.5 sm:h-125 bg-indigo-500/20 dark:bg-indigo-600/20 rounded-full blur-[100px] sm:blur-[140px] animate-blob" />
      </div>

      <div className="max-w-md w-full text-center relative z-10 space-y-6 py-12">
        
        {/* ILUSTRASI VEKTOR SVG 404 (CUSTOM VECTOR) */}
        <div className="relative w-full max-w-xs mx-auto flex items-center justify-center">
          {/* Efek Pendaran di Belakang Vektor */}
          <div className="absolute inset-0 bg-indigo-500/20 dark:bg-indigo-500/30 blur-2xl rounded-full" />
          
          <svg
            viewBox="0 0 400 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto drop-shadow-xl animate-float-1 relative z-10"
          >
            {/* Angka 4 Pertama */}
            <path
              d="M70 190 L120 90 L120 230 M120 180 L160 180"
              stroke="currentColor"
              strokeWidth="22"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-indigo-600 dark:text-indigo-400"
            />
            
            {/* Vektor Planet "0" */}
            <circle
              cx="200"
              cy="150"
              r="48"
              fill="url(#planetGlow)"
              stroke="currentColor"
              strokeWidth="10"
              className="text-purple-500 dark:text-purple-400"
            />
            {/* Cincin Planet */}
            <ellipse
              cx="200"
              cy="150"
              rx="75"
              ry="22"
              stroke="currentColor"
              strokeWidth="6"
              className="text-cyan-500 dark:text-cyan-400 opacity-80"
              transform="rotate(-18 200 150)"
            />
            
            {/* Angka 4 Kedua */}
            <path
              d="M240 190 L290 90 L290 230 M290 180 L330 180"
              stroke="currentColor"
              strokeWidth="22"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-indigo-600 dark:text-indigo-400"
            />

            {/* Bintang-bintang / Percikan Vektor */}
            <circle cx="80" cy="50" r="3" className="fill-cyan-400 animate-ping" />
            <circle cx="320" cy="60" r="4" className="fill-purple-400" />
            <circle cx="350" cy="240" r="3" className="fill-indigo-400" />
            <circle cx="50" cy="230" r="2.5" className="fill-slate-400" />

            {/* Gradient Fill Planet */}
            <defs>
              <radialGradient id="planetGlow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(200 150) rotate(90) scale(50)">
                <stop stopColor="#818CF8" stopOpacity="0.5" />
                <stop offset="1" stopColor="#4F46E5" stopOpacity="0.1" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        {/* PESAN Halaman Tidak Ditemukan */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-semibold">
            <Compass size={14} className="animate-spin" /> Error 404
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Halaman Tidak Ditemukan
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm mx-auto">
            Maaf, halaman yang Anda cari tidak ada, telah dipindahkan, atau alamat URL yang Anda masukkan salah.
          </p>
        </div>

        {/* TOMBOL AKSI (CTA) */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="/"
            className="w-full sm:w-auto px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-600/20 hover:scale-[1.02]"
          >
            <Home size={16} /> Kembali ke Beranda
          </a>
          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto px-5 py-2.5 bg-slate-200 dark:bg-slate-900 hover:bg-slate-300 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-800 text-sm font-semibold rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
          >
            <ArrowLeft size={16} /> Halaman Sebelumnya
          </button>
        </div>

      </div>
    </div>
  );
}