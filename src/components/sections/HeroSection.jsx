import React, { useState, useEffect } from 'react';
import myProfileImage from '../../assets/myProfileImage.jpg';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import {  
  Mail, 
  ArrowRight,  
  Code2, 
  Database,
} from 'lucide-react';

const ROLES = [
  "Data Science Student",
  "Frontend Developer",
  "Data Scientist",
  "Data Analyst",
  "Data Engineer"
];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // Animasi Pergantian Role tiap 3 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
        setFade(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="min-h-[90vh] flex items-center justify-center pt-40 pb-26 text-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* GRID 2 KOLOM (Mobile: Stacked, Desktop: Split 2 Kolom) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ================= KOLOM KIRI: TEKS & AKSES ================= */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left order-2 lg:order-1">

            {/* Nama dengan Teks Gradasi */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Halo, Saya <br className="hidden sm:inline" />
              <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text text-transparent inline-block">
                Bintang Gilangkasa
              </span>
            </h1>

            {/* Role Dinamis */}
            <div className="h-8 flex items-center justify-center lg:justify-start">
              <p className={`text-lg sm:text-xl font-bold text-slate-300 transition-all duration-300 ${
                fade ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
              }`}>
                <span className="text-indigo-400">&lt;</span> {ROLES[roleIndex]} <span className="text-indigo-400">/&gt;</span>
              </p>
            </div>

            {/* Deskripsi Singkat */}
            <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Mahasiswa Data Science Semester 7 di UIN Salatiga dengan peminatan Data Management, saya memiliki minat di Frontend Developer. saya sangat suka membuat sebuah tampilan dari Website maupun Dashboard.
            </p>

            {/* Tombol Aksi (CTA) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#contact"
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm rounded-xl transition-all shadow-lg shadow-indigo-500/25 flex items-center gap-2 group active:scale-95"
              >
                <span>Hubungi Saya</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#project"
                className="px-6 py-3 bg-slate-900/90 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-slate-700 font-semibold text-sm rounded-xl transition-all active:scale-95"
              >
                Lihat Proyek
              </a>
            </div>

            {/* Link Media Sosial */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-3 text-slate-400 border-t border-slate-800/60 max-w-md mx-auto lg:mx-0">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800/80 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800/80 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href="mailto:email@example.com"
                className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800/80 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>

          </div>


          {/* ================= KOLOM KANAN: BINGKAI FOTO & FLOATING BADGES ================= */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-88 lg:h-88">
              
              {/* Efek Ambient Glow Belakang Foto */}
              <div className="absolute inset-0 bg-gradient-tr from-indigo-500 to-pink-500 rounded-3xl blur-2xl opacity-30 animate-pulse" />

              {/* Card utama pembungkus Foto */}
              <div className="relative w-full h-full rounded-3xl bg-slate-900/90 border border-slate-800/90 p-3 shadow-2xl overflow-hidden group">
                
                {/* Tempat Foto Profil */}
                <div className="w-full h-full rounded-2xl bg-slate-950 overflow-hidden relative flex items-center justify-center border border-slate-800/50">
                  {/* Ganti src dengan path foto kamu, misal: /assets/profile.jpg */}
                  <img
                    src={myProfileImage}
                    alt="Bintang Gilangkasa"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback jika foto belum dimasukkan
                      e.target.style.display = 'none';
                    }}
                  />
                  
                  {/* Fallback jika gambar kosong */}
                  <div className="text-center p-4">
                    <Code2 size={48} className="mx-auto text-indigo-400 mb-2 opacity-50" />
                    <span className="text-xs text-slate-500 font-medium">Bintang Gilangkasa</span>
                  </div>
                </div>

              </div>

              {/* FLOATING BADGE 1: Top Right */}
              <div className="absolute -top-4 -right-4 bg-slate-900/90 border border-slate-800 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-xl flex items-center gap-2.5 animate-bounce [animation-duration:4s]">
                <div className="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-400">
                  <Code2 size={16} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-slate-400 font-medium">Fokus</p>
                  <p className="text-xs font-bold text-white">Frontend Developer</p>
                </div>
              </div>

              {/* FLOATING BADGE 2: Bottom Left */}
              <div className="absolute -bottom-4 -left-4 bg-slate-900/90 border border-slate-800 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-xl flex items-center gap-2.5 animate-bounce [animation-duration:5s]">
                <div className="p-1.5 rounded-lg bg-pink-500/20 text-pink-400">
                  <Database size={16} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-slate-400 font-medium">Studi</p>
                  <p className="text-xs font-bold text-white">Data Science</p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}