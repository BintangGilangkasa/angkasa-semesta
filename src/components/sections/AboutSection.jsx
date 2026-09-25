import React from 'react';
import { profileData } from '../../data/Profile';
import { Code, Database, Sparkles } from 'lucide-react';

function AboutSection() {
  const highlights = [
    {
      icon: <Database className="w-6 h-6 text-indigo-400" />,
      title: "Data Science & Analytics",
      description: "Pengolahan data, Eksplorasi Data Analyst (EDA), dan pembuatan model machine learning untuk estimasi dan klasifikasi.",
    },
    {
      icon: <Code className="w-6 h-6 text-indigo-400" />,
      title: "Web Development",
      description: "Membangun antarmuka web yang modern, responsif, dan interaktif menggunakan React JS dan Tailwind CSS.",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-indigo-400" />,
      title: "Spatial Data & Pipeline",
      description: "Pemrosesan data spasial (GIS), otomasik ETL pipeline, dan ekstraksi data melalui web scraping.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-transparent text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Tentang Saya</h2>
          <p className="mt-4 text-slate-400">
            Kombinasi antara analisis data dan pengembangan web untuk membangun solusi digital yang berorientasi pada data.
          </p>
        </div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-slate-900 border border-slate-800 rounded-xl hover:border-indigo-500/50 transition-all duration-300"
            >
              <div className="p-3 bg-indigo-500/10 rounded-lg w-fit mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutSection