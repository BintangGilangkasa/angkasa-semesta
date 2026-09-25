import React from 'react';
import { experiencesData } from '../../data/Experience';
import { Briefcase, Calendar, GraduationCap } from 'lucide-react';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-transparent text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Jejak Pengalaman saya
          </h2>
          <p className="mt-4 text-slate-400">
            Perjalanan akademis, peran organisasi, dan proyek pengembangan yang pernah saya jalani.
          </p>
        </div>

        {/* Timeline Line Container */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-32 space-y-12">
          {experiencesData.map((exp, index) => (
            <div key={exp.id || index} className="relative pl-8 sm:pl-10 group">
              
              {/* Timeline Bullet Node / Icon di Garis Jalur */}
              <div className="absolute -left-4.25 top-1.5 w-8 h-8 rounded-full bg-slate-900 border-2 border-indigo-500 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-md shadow-indigo-500/20">
                {exp.role.toLowerCase().includes('mahasiswa') || exp.role.toLowerCase().includes('pendidikan') ? (
                  <GraduationCap size={16} />
                ) : (
                  <Briefcase size={16} />
                )}
              </div>

              {/* Tanggal/Periode (Tampilan Desktop: di sebelah kiri garis) */}
              <div className="hidden sm:block absolute -left-32 top-2 w-24 text-right text-xs font-semibold text-indigo-400">
                {exp.period}
              </div>

              {/* Card Konten Pengalaman */}
              <div className="p-6 bg-slate-900/80 border border-slate-800/80 rounded-xl hover:border-indigo-500/50 transition-all duration-300 shadow-lg">
                
                {/* Tanggal/Periode (Tampilan Mobile) */}
                <div className="sm:hidden flex items-center gap-1.5 text-indigo-400 text-xs font-semibold mb-2">
                  <Calendar size={14} />
                  <span>{exp.period}</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {exp.role}
                  </h3>
                  <span className="text-sm font-medium text-slate-400">
                    {exp.organization}
                  </span>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Tech / Skills Badges */}
                {exp.skills && exp.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/60">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 bg-slate-800 text-slate-300 text-xs font-medium rounded-md border border-slate-700/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}