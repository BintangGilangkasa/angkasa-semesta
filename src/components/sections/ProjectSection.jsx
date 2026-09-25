import React from 'react';
import { ProjectsData } from '../../data/Project'
import { GithubIcon } from '../common/Icons';
import { ExternalLink, Folder } from 'lucide-react';

function ProjectsSection() {
  return (
    <section id="project" className="py-20 bg-slate-950/40 backdrop-blur-sm border-t border-slate-800/80 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Proyek Pilihan</h2>
          <p className="mt-4 text-slate-400">
            Beberapa proyek portofolio yang telah saya kerjakan di bidang Web Development dan Data Science.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ProjectsData.map((project) => (
            <div
              key={project.id}
              className="flex flex-col bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-indigo-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-400">
                  <Folder size={22} />
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-white transition-colors"
                      title="Lihat Kode di GitHub"
                    >
                      <GithubIcon className="w-5 h-5" />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-white transition-colors"
                      title="Lihat Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
                {project.category}
              </span>

              <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-300 transition-colors">
                {project.title}
              </h3>

              <p className="text-slate-400 text-sm mb-6 flex leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-slate-800 text-slate-300 rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection