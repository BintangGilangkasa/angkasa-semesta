import React from 'react';
import { profileData } from '../../data/Profile';
import { Mail, MapPin, Send } from 'lucide-react';

export default function ContactSection() { // <-- PASTIKAN ADA 'export default' DI SINI
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Terima kasih! Pesan Anda telah terkirim.');
  };

  return (
    <section id="contact" className="py-20 bg-transparent text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Info Kontak */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Mari Berdiskusi</h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Saya selalu terbuka untuk berkolaborasi dalam proyek menarik, peluang karir, atau sekadar berdiskusi seputar Data Science & Web Development.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-400">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase font-semibold">Email</p>
                  <a href={`mailto:${profileData.email}`} className="text-slate-200 hover:text-indigo-400 transition-colors">
                    {profileData.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-400">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase font-semibold">Lokasi</p>
                  <p className="text-slate-200">{profileData.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Kontak */}
          <form onSubmit={handleSubmit} className="p-8 bg-slate-900 border border-slate-800 rounded-xl space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Nama Anda</label>
              <input
                type="text"
                required
                placeholder="Masukkan nama"
                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Email Anda</label>
              <input
                type="email"
                required
                placeholder="nama@email.com"
                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Pesan</label>
              <textarea
                rows="4"
                required
                placeholder="Tuliskan pesan Anda di sini..."
                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-indigo-500 transition-colors"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 font-medium rounded-lg flex items-center justify-center gap-2 transition-colors shadow-lg shadow-indigo-600/20"
            >
              <Send size={18} /> Kirim Pesan
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}