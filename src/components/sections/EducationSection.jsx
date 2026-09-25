import React from 'react';
import { educationData } from '../../data/Education';
import { GraduationCap, Calendar, Award } from 'lucide-react';

export default function EducationSection() {
  return (
    <section id="education" className="py-16 bg-slate-950/40 backdrop-blur-sm border-t border-slate-800/80 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Ringkas */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Pendidikan
          </h2>
          <p className="mt-2 text-slate-400 text-sm">
            Latar belakang akademis formal yang menunjang keahlian saya.
          </p>
        </div>

        {/* Minimal Compact Card */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-6 hover:border-indigo-500/40 transition-all duration-300 shadow-md">
          
          {/* Baris Atas: Jurusan, Kampus, Periode & IPK */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-indigo-500/10 text-indigo-400 rounded-lg border border-indigo-500/20 shrink-0">
                <GraduationCap size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{educationData.degree}</h3>
                <p className="text-sm text-slate-300">{educationData.institution}</p>
              </div>
            </div>

            {/* Badges Ringkas */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800">
                <Calendar size={13} className="text-indigo-400" />
                {educationData.period}
              </span>
              <span className="flex items-center gap-1.5 bg-indigo-500/10 text-indigo-300 px-2.5 py-1 rounded-md border border-indigo-500/20 font-medium">
                <Award size={13} className="text-indigo-400" />
                IPK: {educationData.gpa}
              </span>
            </div>
          </div>

          {/* Deskripsi Singkat */}
          <p className="text-slate-300 text-sm leading-relaxed mb-4">
            {educationData.faculty} — Berfokus pada Machine Learning, pengolahan data spasial, serta pengembangan pipeline dan aplikasi web.
          </p>

          {/* Tag Mata Kuliah Relevan */}
          <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-slate-800/60">
            <span className="text-xs text-slate-400 font-medium mr-1">Fokus Studi:</span>
            {educationData.courses.slice(0, 5).map((course, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 bg-slate-950 text-slate-300 border border-slate-800/80 rounded-md text-xs font-medium"
              >
                {course}
              </span>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}