import React from 'react';
import { profileData } from '../../data/profile';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../common/Icons';
import { Mail, MapPin, ArrowUpRight, MessageCircle, icons } from 'lucide-react';
import { FaSpotify } from 'react-icons/fa';

export default function ContactSection() {
  const email = profileData?.email || 'bintanggilangkasa@gmail.com';
  const location = profileData?.location || 'Salatiga, Jawa Tengah';

  // Daftar media sosial (otomatis mengambil dari profileData atau fallback URL)
  const socials = [
    {
      name: 'Whatsapp',
      icon: <MessageCircle className='w-5 h-5' />,
      href: profileData?.socials?.whatsapp || 'https://whatsapp.com',
      colorClass: 'hover:border-green-500 hover:text-green-500'
    },
    {
      name: 'GitHub',
      icon: <GithubIcon className="w-5 h-5" />,
      href: profileData?.socials?.github || 'https://github.com/BintangGilangkasa',
      colorClass: 'hover:border-slate-400 hover:text-slate-900 dark:hover:text-white dark:hover:border-slate-500',
    },
    {
      name: 'LinkedIn',
      icon: <LinkedinIcon className="w-5 h-5" />,
      href: profileData?.socials?.linkedin || 'https://linkedin.com/in/bintanggilangkasa',
      colorClass: 'hover:border-blue-500 hover:text-blue-500',
    },
    {
      name: 'Instagram',
      icon: <InstagramIcon className="w-5 h-5" />,
      href: profileData?.socials?.instagram || 'https://instagram.com/bintanggilangkasaa',
      colorClass: 'hover:border-pink-500 hover:text-pink-500',
    },
    {
      name: 'Spotify',
      icon: <FaSpotify className='w-5 h-5'/>,
      href: profileData?.socials?.spotify || '',
      colorClass: 'hover:border-green-600 hover:text-green-600'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-transparent text-slate-800 dark:text-white border-t border-slate-800/80 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Header / Subtitle */}
        <div className="max-w-2xl mx-auto space-y-4 mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold">
            Mari Terhubung
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Mari Berdiskusi & Berkolaborasi
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Saya selalu terbuka untuk peluang karir, proyek menarik, diskusi seputar Sains Data & Web Development, atau sekadar menyapa.
          </p>
        </div>

        {/* Action Cards: Email Direct & Lokasi */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">

          {/* Email Direct Button */}
          <a
            href={`mailto:${email}`}
            className="group p-5 bg-slate-900/80 border border-slate-800/80 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 rounded-2xl transition-all duration-300 shadow-none flex items-center justify-between text-left hover:-translate-y-0.5"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-xl group-hover:scale-110 transition-transform">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Email Langsung</p>
                <p className="text-xs sm:text-sm font-bold text-slate-100 group-hover:text-indigo-400 transition-colors">
                  {email}
                </p>
              </div>
            </div>
            <ArrowUpRight size={18} className="text-slate-400 group-hover:text-indigo-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
          </a>

          {/* Lokasi Card */}
          <div className="group p-5 bg-slate-900/80 border border-slate-800/80 hover:border-indigo-500/50 rounded-2xl transition-all duration-300 shadow-sm dark:shadow-none flex items-center gap-4 text-left hover:-translate-y-0.5">
            <div className="p-3 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-xl group-hover:scale-110 transition-transform">
              <MapPin size={22} />
            </div>
            <div>
              <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                Domisili
              </p>
              <p className="text-xs sm:text-sm font-bold text-slate-100 group-hover:text-indigo-400 transition-colors">
                {location}
              </p>
            </div>
          </div>

        </div>

        {/* Media Sosial Bar */}
        <div className="pt-8 border-t border-slate-800/80">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-6">
            Temukan Saya Di Media Sosial
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2.5 px-5 py-2.5 bg-slate-900/80 border border-slate-800/80 rounded-xl text-slate-300 text-sm font-semibold transition-all duration-300 shadow-sm dark:shadow-none hover:scale-105 ${social.colorClass}`}
              >
                {social.icon}
                <span>{social.name}</span>
                <ArrowUpRight size={14} className="opacity-50" />
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}