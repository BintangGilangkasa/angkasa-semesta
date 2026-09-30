import React, { useState } from 'react';
import { experiencesData } from '../../data/experience';
import { Briefcase, Calendar, GraduationCap, ChevronDown, ChevronUp } from 'lucide-react';

export default function ExperienceSection() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-20 bg-transparent text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Jejak Pengalaman Saya</h2>
          <p className="mt-4 text-slate-400">
            Perjalanan akademis, peran organisasi, dan proyek pengembangan yang pernah saya jalani.
          </p>
        </div>

        {/* Timeline Line Container */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-32 space-y-8">
          {experiencesData.map((exp, index) => {
            const itemId = exp.id || index;
            const isExpanded = expandedId === itemId;
            const isAcademic =
              exp.role?.toLowerCase().includes('mahasiswa') ||
              exp.role?.toLowerCase().includes('pendidikan') ||
              exp.category === 'education';

            const listDetails = exp.responsibilities || exp.details;

            return (
              <div key={itemId} className="relative pl-6 sm:pl-10 group">

                {/* Timeline Bullet Node */}
                <div className="absolute -left-4 top-1.5 w-8 h-8 rounded-full bg-slate-900 border-2 border-indigo-500 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-md shadow-indigo-500/20 z-10">
                  {isAcademic ? <GraduationCap size={16} /> : <Briefcase size={16} />}
                </div>

                {/* Tanggal/Periode (Desktop) */}
                <div className="hidden sm:block absolute -left-32 top-2 w-24 text-right text-xs font-semibold text-indigo-400">
                  {exp.period}
                </div>

                {/* Card Konten Pengalaman */}
                <div
                  onClick={() => toggleExpand(itemId)}
                  className={`p-6 bg-slate-900/80 border rounded-2xl transition-all duration-300 cursor-pointer shadow-lg select-none ${isExpanded
                    ? 'border-indigo-500/80 bg-slate-900/90 ring-1 ring-indigo-500/30'
                    : 'border-slate-800/80 hover:border-indigo-500/50'
                    }`}
                >
                  {/* Tanggal/Periode (Mobile) */}
                  <div className="sm:hidden flex items-center gap-1.5 text-indigo-400 text-xs font-semibold mb-2">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>

                  {/* Header Info */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-3">
                      {exp.icon && (
                        <div className="p-2.5 bg-indigo-500/10 text-indigo-400 rounded-xl flex items-center justify-center shrink-0">
                          {typeof exp.icon === 'string' ? (
                            <img src={exp.icon} alt={exp.organization} className="w-5 h-5 object-contain" />
                          ) : (
                            exp.icon
                          )}
                        </div>
                      )}
                      <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {exp.role}
                      </h3>
                    </div>

                    <span className="text-sm font-medium text-pink-400 sm:text-right">
                      {exp.organization}
                    </span>
                  </div>

                  {/* Deskripsi Singkat */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Dropdown smooth */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${isExpanded && listDetails && listDetails.length > 0
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                      }`} 
                  >

                    {/* Detail Responsibilities */}
                    <div className='overflow-hidden'>
                      <div className="border-t border-slate-800/80 text-xs text-slate-300">
                        <h4 className="text-[11px] font-semibold text-indigo-400 uppercase tracking-wider mb-2">
                          Tanggung Jawab & Pencapaian:
                        </h4>
                        <ul className="space-y-2 text-slate-300 leading-relaxed pb-1">
                          {listDetails.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-indigo-400 font-bold shrink-0">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Footer Card: Tech/Skills Badges & Chevron Indicator */}
                  <div className="flex items-center justify-between pt-3 border-t border-slate-800/60">
                    <div className="flex flex-wrap gap-2">
                      {exp.skills?.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 bg-slate-800 text-slate-300 text-xs font-medium rounded-md border border-slate-700/50"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    {/* Ganti bagian indikator ChevronUp/ChevronDown dengan ini: */}
                    <div
                      className={`text-slate-500 group-hover:text-indigo-400 transition-transform duration-300 ml-2 shrink-0 ${isExpanded ? 'rotate-180 text-indigo-400' : ''
                        }`}
                    >
                      <ChevronDown size={18} />
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}