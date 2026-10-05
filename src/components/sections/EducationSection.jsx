import React from 'react';
import { educationData } from '../../data/education';
import { GraduationCap, Calendar, Award } from 'lucide-react';

export default function EducationSection() {
  // Memastikan data diproses dengan aman baik dalam bentuk Array maupun Object
  const items = Array.isArray(educationData) ? educationData : [educationData];

  return (
    <section id="education" className="py-30 bg-transparent text-white border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Pendidikan
          </h2>
          <p className="mt-2 text-slate-400 text-sm">
            Latar belakang akademis formal yang menunjang keahlian saya.
          </p>
        </div>

        {/* Timeline Line Container */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-32 space-y-10">
          {items.map((item, index) => {
            const title = item.degree || item.role || "Pendidikan";
            const institution = item.institution || item.organization || "";
            const period = item.period || "";
            const gpa = item.gpa;
            const courses = item.courses || item.highlights || [];

            return (
              <div key={item.id || index} className="relative pl-8 sm:pl-10 group">

                {/* Timeline Node Icon di Garis Jalur */}
                <div className="absolute -left-4.25 top-1.5 w-8 h-8 rounded-full bg-slate-900 border-2 border-indigo-500 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-md shadow-indigo-500/20">
                  <GraduationCap size={16} />
                </div>

                {/* Tanggal/Periode (Tampilan Desktop: Di Kiri Garis) */}
                <div className="hidden sm:block absolute -left-32 top-2 w-24 text-right text-xs font-semibold text-indigo-400">
                  {period}
                </div>

                {/* Card Konten Pendidikan */}
                <div className="p-5 sm:p-6 bg-slate-900/80 border border-slate-800 rounded-xl hover:border-indigo-500/40 transition-all duration-300 shadow-lg">
                  
                  {/* Tanggal/Periode (Tampilan HP) */}
                  <div className="sm:hidden flex items-center gap-1.5 text-indigo-400 text-xs font-semibold mb-2">
                    <Calendar size={13} />
                    <span>{period}</span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {title}
                    </h3>
                    {gpa && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 rounded-md text-xs font-semibold w-fit">
                        <Award size={12} /> IPK: {gpa}
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-slate-300 font-medium mb-3">
                    {institution} {item.faculty ? `— ${item.faculty}` : ''}
                  </p>

                  {item.description && (
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                  )}

                  {/* Tag Mata Kuliah / Fokus */}
                  {courses.length > 0 && (
                    <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-slate-800/60">
                      {courses.map((course, cIdx) => (
                        <span
                          key={cIdx}
                          className="px-2.5 py-1 bg-slate-950 text-slate-300 border border-slate-800 rounded-md text-xs font-medium"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  )}

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}