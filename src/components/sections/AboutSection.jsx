import React from 'react';
import { profileData } from '../../data/profile';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-transparent text-white border-t border-slate-800/80 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 t8ext-center">
        
        {/* Judul Utama */}
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white mb-6">
          Tentang Saya
        </h2>

        {/* Deskripsi Teks Polos Rata Tengah */}
        <div className="space-y-4 text-white text-base sm:text-lg leading-relaxed">
          <p>
            Halo! Saya <strong className="text-white font-semibold">{profileData?.name || "Bintang Gilangkasa"}</strong>, mahasiswa <strong className="text-white font-semibold">Sains Data</strong> di UIN Salatiga yang berfokus pada alur kerja data dan pengembangan web modern.
          </p>
          <p>
            Minat utama saya mencakup perancangan <span className="text-indigo-400 font-medium">end-to-end data pipeline</span>, pemrosesan data spasial, pemodelan Machine Learning, serta pembangunan aplikasi web interaktif berbasis React JS dan Tailwind CSS.
          </p>
          <p>
            Saya senang menggabungkan analisis data berbasis sains dengan antarmuka web yang intuitif untuk menyajikan wawasan data secara efektif.
          </p>
        </div>
        
      </div>
    </section>
  );
}