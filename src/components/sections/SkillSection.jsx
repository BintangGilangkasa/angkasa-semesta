import React from 'react';
import {
  SiPython,
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiVite,
  SiDocker,
  SiPostgresql,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiStreamlit,
  SiGit,
  SiHtml5,
  SiCss,
  SiFigma,
  SiApachekafka,
} from 'react-icons/si';

export default function SkillsSection() {
  // Daftar logo teknologi lengkap dengan warna khas brand
  const techStack = [
    { name: "Python", icon: <SiPython />, color: "hover:text-[#3776AB] hover:border-[#3776AB]/50 hover:shadow-[#3776AB]/20", anim: "animate-float-1" },
    { name: "React JS", icon: <SiReact />, color: "hover:text-[#61DAFB] hover:border-[#61DAFB]/50 hover:shadow-[#61DAFB]/20", anim: "animate-float-2" },
    { name: "JavaScript", icon: <SiJavascript />, color: "hover:text-[#F7DF1E] hover:border-[#F7DF1E]/50 hover:shadow-[#F7DF1E]/20", anim: "animate-float-3" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "hover:text-[#06B6D4] hover:border-[#06B6D4]/50 hover:shadow-[#06B6D4]/20", anim: "animate-float-1" },
    { name: "Vite", icon: <SiVite />, color: "hover:text-[#646CFF] hover:border-[#646CFF]/50 hover:shadow-[#646CFF]/20", anim: "animate-float-2" },
    { name: "Docker", icon: <SiDocker />, color: "hover:text-[#2496ED] hover:border-[#2496ED]/50 hover:shadow-[#2496ED]/20", anim: "animate-float-3" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "hover:text-[#4169E1] hover:border-[#4169E1]/50 hover:shadow-[#4169E1]/20", anim: "animate-float-1" },
    { name: "Pandas", icon: <SiPandas />, color: "hover:text-[#150458] hover:border-[#150458]/50 hover:shadow-[#150458]/20", anim: "animate-float-2" },
    { name: "NumPy", icon: <SiNumpy />, color: "hover:text-[#013243] hover:border-[#013243]/50 hover:shadow-[#013243]/20", anim: "animate-float-3" },
    { name: "Scikit-Learn", icon: <SiScikitlearn />, color: "hover:text-[#F7931E] hover:border-[#F7931E]/50 hover:shadow-[#F7931E]/20", anim: "animate-float-1" },
    { name: "Streamlit", icon: <SiStreamlit />, color: "hover:text-[#F05032] hover:border-[#F05032]/50 hover:shadow-[#F05032]/20", anim: "animate-float-1" },
    { name: "Git", icon: <SiGit />, color: "hover:text-[#F05032] hover:border-[#F05032]/50 hover:shadow-[#F05032]/20", anim: "animate-float-2" },
    { name: "HTML5", icon: <SiHtml5 />, color: "hover:text-[#E34F26] hover:border-[#E34F26]/50 hover:shadow-[#E34F26]/20", anim: "animate-float-3" },
    { name: "CSS3", icon: <SiCss />, color: "hover:text-[#1572B6] hover:border-[#1572B6]/50 hover:shadow-[#1572B6]/20", anim: "animate-float-1" },
    { name: "Figma", icon: <SiFigma />, color: "hover:text-[#F7DF1E] hover:border-[#F7DF1E]/50 hover:shadow-[#F7DF1E]/20", anim: "animate-float-3" },
    { name: "Apache Kafka", icon: <SiApachekafka />, color: "hover:text-[#F7931E] hover:border-[#F7931E]/50 hover:shadow-[#F7931E]/20", anim: "animate-float-3" },
  ];

  return (
    <section id="skills" className="py-24 bg-transparent border-t border-slate-800/80 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtitle Ringkas */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Tech Stack & Tools
          </h2>
          <p className="mt-3 text-slate-400 text-sm">
            Teknologi dan perangkat lunak yang biasa saya gunakan.
          </p>
        </div>

        {/* Scattered Floating Icon Cloud (Tanpa Kolom & Tanpa Title Kategori) */}
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 max-w-4xl mx-auto">
          {techStack.map((tech, idx) => (
            <div
              key={tech.name}
              style={{ animationDelay: `${(idx % 5) * 0.4}s` }}
              className={`group relative p-5 sm:p-6 bg-slate-900/80 border border-slate-800 rounded-2xl text-slate-400 text-3xl sm:text-4xl flex items-center justify-center transition-all duration-300 hover:scale-125 hover:z-20 hover:shadow-2xl cursor-pointer ${tech.anim} ${tech.color}`}
            >
              {/* Logo Icon */}
              {tech.icon}

              {/* Tooltip Nama Tech saat Hover */}
              <span className="absolute -bottom-10 opacity-0 group-hover:opacity-100 group-hover:-bottom-8 transition-all duration-200 text-xs font-semibold px-2.5 py-1 bg-slate-800 text-slate-200 rounded-md border border-slate-700 whitespace-nowrap pointer-events-none shadow-md">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}