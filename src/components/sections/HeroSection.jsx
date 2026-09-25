import React from 'react';
import { ArrowRight, FileText, Database, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../common/Icons';
import { profileData } from '../../data/Profile';

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen bg-transparent text-white flex items-center pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* KOLOM KIRI: TEKS & CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-indigo-500/30 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-slate-300 tracking-wide">
                Terbuka untuk Kolaborasi & Proyek
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.15]">
              Membangun <br />
              <span className="bg-clip-text text-transparent bg-linear-to-r from-indigo-400 via-purple-300 to-cyan-400">
                Data Pipeline & Web
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Saya <strong className="text-white font-semibold">{profileData.name}</strong>, berfokus pada pengolahan data, Machine Learning, dan pengembangan aplikasi web interaktif.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#project"
                className="w-full sm:w-auto px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-600/30 hover:scale-[1.02]"
              >
                Lihat Proyek <ArrowRight size={18} />
              </a>
              
              <a
                href={profileData.resumeURL || "#"}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 backdrop-blur-md rounded-xl font-semibold flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
              >
                <FileText size={18} /> Unduh CV
              </a>

              <div className="flex items-center gap-2 pt-2 sm:pt-0 sm:ml-2">
                {profileData.instagram && (
                  <a
                    href={profileData.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white rounded-xl backdrop-blur-md transition-all hover:scale-110"
                  >
                    <InstagramIcon className="w-5 h-5" />
                  </a>
                )}
                {profileData.github && (
                  <a
                    href={profileData.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white rounded-xl backdrop-blur-md transition-all hover:scale-110"
                  >
                    <GithubIcon className="w-5 h-5" />
                  </a>
                )}
                {profileData.linkedin && (
                  <a
                    href={profileData.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white rounded-xl backdrop-blur-md transition-all hover:scale-110"
                  >
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* KOLOM KANAN: TERMINAL GLASSMORPHISM */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-slate-900/70 border border-slate-800 rounded-2xl p-5 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <span className="text-xs text-slate-500 font-mono">developer_profile.py</span>
              </div>

              <div className="pt-4 font-mono text-xs sm:text-sm space-y-3 text-slate-300">
                <p>
                  <span className="text-purple-400">class</span> <span className="text-amber-300">DataDeveloper</span>:
                </p>
                <div className="pl-4 space-y-1.5 border-l border-slate-800 ml-1">
                  <p>
                    <span className="text-indigo-400">name</span> = <span className="text-emerald-400">"{profileData.name}"</span>
                  </p>
                  <p>
                    <span className="text-indigo-400">role</span> = <span className="text-emerald-400">"Data Science & Fronted Developer"</span>
                  </p>
                  <p>
                    <span className="text-indigo-400">stack</span> = [<span className="text-amber-300">"Python"</span>, <span className="text-amber-300">"React"</span>, <span className="text-amber-300">"SQL"</span>]
                  </p>
                  <p>
                    <span className="text-indigo-400">status</span> = <span className="text-cyan-400">"Building pipelines..."</span>
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-indigo-400">
                  <Database size={14} /> Machine Learning
                </span>
                <span className="flex items-center gap-1.5 text-cyan-400">
                  <Code2 size={14} /> React Apps
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}