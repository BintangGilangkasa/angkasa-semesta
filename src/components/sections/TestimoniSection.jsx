import React, { useState, useEffect } from 'react';
import { initialTestimonials } from '../../data/testimoni';
import { 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Quote, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';

export default function TestimonialSection() {
  
  // 💥 2. Membaca data dari localStorage saat pertama dimuat (dengan fallback ke initialTestimonials)
  const [testimonials, setTestimonials] = useState(() => {
    const saved = localStorage.getItem('my_testimonials');
    return saved ? JSON.parse(saved) : initialTestimonials;
  });

  // 💥 3. Menyimpan ke localStorage secara otomatis setiap ada perubahan pada state `testimonials`
  useEffect(() => {
    localStorage.setItem('my_testimonials', JSON.stringify(testimonials));
  }, [testimonials]);

  // State Slider & Responsif
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Detect Ukuran Layar
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // State Form Input
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    organization: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 4. Saat form dikirim, `setTestimonials` dipanggil.
  // Otomatis merevolusi data di React State & memicu useEffect untuk menyimpan ke localStorage!
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;

    const generatedAvatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(
      formData.name
    )}&background=6366f1&color=fff&bold=true`;

    const newTestimonial = {
      id: Date.now(),
      name: formData.name,
      role: formData.role || 'Pengunjung',
      organization: formData.organization || 'Umum',
      message: formData.message,
      avatar: generatedAvatar
    };

    setTestimonials([newTestimonial, ...testimonials]);
    setCurrentIndex(0);
    setFormData({ name: '', email: '', role: '', organization: '', message: '' });
    setSubmitted(true);

    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="testimonials" className="py-20 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title & Navigasi Panah */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ulasan & Testimoni</h2>
            <p className="mt-2 text-sm text-slate-400">
              Pendapat rekan kerja, mentor, dan kolaborator mengenai pengalaman bekerja bersama saya.
            </p>
          </div>

          <div className="flex items-center gap-2 self-end">
            <button
              onClick={prevSlide}
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-indigo-500/50 transition-all shadow-lg active:scale-95"
              aria-label="Previous Slide"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-indigo-500/50 transition-all shadow-lg active:scale-95"
              aria-label="Next Slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Slider Container */}
        <div className="relative overflow-hidden mb-8 -mx-2.5 p-2.5">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`
            }}
          >
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="w-full sm:w-1/2 lg:w-1/3 shrink-0 px-2.5 flex"
              >
                <div className="p-6 bg-slate-900/80 border border-slate-800/80 hover:border-indigo-500/50 rounded-2xl flex flex-col justify-between w-full shadow-xl transition-all duration-300 group hover:-translate-y-1">
                  <div>
                    <Quote className="w-8 h-8 text-indigo-500/30 mb-3 group-hover:text-indigo-500/60 transition-colors" />
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed italic mb-6">
                      "{item.message}"
                    </p>
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80 mt-auto">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-10 h-10 rounded-full border border-indigo-500/30 object-cover shrink-0"
                    />
                    <div className="overflow-hidden">
                      <h4 className="text-sm font-bold text-white truncate">{item.name}</h4>
                      <p className="text-xs text-indigo-400 truncate">
                        {item.role} {item.organization && `• ${item.organization}`}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex items-center justify-center gap-2 mb-16">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? 'w-6 bg-indigo-500'
                  : 'w-2 bg-slate-800 hover:bg-slate-700'
              }`}
            />
          ))}
        </div>

        {/* Form Input Ulasan */}
        <div className="p-6 sm:p-8 bg-slate-900/90 border border-slate-800 rounded-2xl shadow-xl max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 bg-indigo-500/10 text-indigo-400 rounded-xl">
              <MessageSquare size={20} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Berikan Ulasan Anda</h3>
              <p className="text-xs text-slate-400">Pernah bekerja sama? Tulis ulasan Anda di sini.</p>
            </div>
          </div>

          {submitted && (
            <div className="p-4 mb-6 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs rounded-xl flex items-center gap-2">
              <CheckCircle2 size={16} />
              <span>Terima kasih! Ulasan Anda telah berhasil ditambahkan.</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Nama Lengkap *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Nama Anda"
                  className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Alamat Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="email@example.com"
                  className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Role / Posisi</label>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  placeholder="Contoh: Frontend Engineer"
                  className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Organisasi / Perusahaan</label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder="Contoh: PT. Angkasa"
                  className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1">Pesan / Ulasan *</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Bagikan pengalaman bekerja bersama saya..."
                className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs rounded-xl transition-all shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2"
            >
              <Send size={14} />
              <span>Kirim Ulasan</span>
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}