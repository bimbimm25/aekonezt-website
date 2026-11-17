"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, MessageSquare, Clock } from "lucide-react";

export default function ContactClient() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Simulasi form submit
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            alert("Pesan berhasil dikirim! Kami akan segera menghubungi Anda.");
        }, 1500);
    };

    return (
        <div className="pt-10 pb-24 relative overflow-hidden min-h-screen flex items-center">

            {/* Background Ornament */}
            <div className="absolute top-0 right-0 w-125 h-125 bg-[#00683D]/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-150 h-150 bg-[#B99150]/5 rounded-full blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/3" />

            <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-start">

                    {/* Bagian Kiri: Informasi Kontak */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col max-w-lg"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#F1F2EF] shadow-sm text-[#1D2B3D] text-xs font-bold tracking-wide uppercase mb-6 w-max">
                            <MessageSquare size={16} className="text-[#00683D]" />
                            <span>Mari Berdiskusi</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1D2B3D] leading-tight mb-6">
                            Mulai Proyek <br />
                            <span className="text-[#00683D]">Digital Anda.</span>
                        </h1>

                        <p className="text-[#1D2B3D]/70 text-lg font-medium leading-relaxed mb-12">
                            Ceritakan visi bisnis Anda kepada kami. Tim ahli kami siap membantu Anda merancang strategi dan membangun website yang mendatangkan hasil nyata.
                        </p>

                        <div className="space-y-8 mb-12">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-white border border-[#F1F2EF] shadow-sm flex items-center justify-center shrink-0">
                                    <Mail className="text-[#B99150]" size={20} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-[#1D2B3D] uppercase tracking-wider mb-1">Email Kemitraan</h4>
                                    <a href="mailto:bimaardiansyah2509@gmail.com" className="text-[#1D2B3D]/80 hover:text-[#00683D] transition-colors font-medium text-lg">
                                        bimaardiansyah2509@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-white border border-[#F1F2EF] shadow-sm flex items-center justify-center shrink-0">
                                    <Phone className="text-[#B99150]" size={20} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-[#1D2B3D] uppercase tracking-wider mb-1">Telepon / WhatsApp</h4>
                                    <p className="text-[#1D2B3D]/80 font-medium text-lg">+62 8XX XXXX XXXX</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-white border border-[#F1F2EF] shadow-sm flex items-center justify-center shrink-0">
                                    <MapPin className="text-[#B99150]" size={20} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-[#1D2B3D] uppercase tracking-wider mb-1">Lokasi Studio</h4>
                                    <p className="text-[#1D2B3D]/80 font-medium text-lg leading-relaxed">
                                        Surabaya, Jawa Timur<br />Indonesia
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Jam Kerja */}
                        <div className="bg-[#1D2B3D] rounded-3xl p-8 flex items-center gap-4 shadow-xl">
                            <Clock className="text-[#82BD3F] shrink-0" size={32} />
                            <div>
                                <h4 className="text-white font-bold mb-1">Jam Operasional</h4>
                                <p className="text-white/70 text-sm font-medium">Senin - Jumat: 09.00 - 17.00 WIB</p>
                            </div>
                        </div>

                    </motion.div>

                    {/* Bagian Kanan: Formulir Kontak */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_40px_rgba(29,43,61,0.06)] border border-[#F1F2EF]">
                            <h3 className="text-2xl font-extrabold text-[#1D2B3D] mb-8">Kirim Pesan Langsung</h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-[#1D2B3D] uppercase tracking-wider">Nama Lengkap</label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="Cth: Bima Ardiansyah"
                                            className="w-full bg-[#FAFAF7] border border-[#E5E7EB] rounded-xl px-4 py-3.5 text-[#1D2B3D] focus:outline-none focus:ring-2 focus:ring-[#00683D]/20 focus:border-[#00683D] transition-all font-medium"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-[#1D2B3D] uppercase tracking-wider">Email Valid</label>
                                        <input
                                            type="email"
                                            required
                                            placeholder="email@perusahaan.com"
                                            className="w-full bg-[#FAFAF7] border border-[#E5E7EB] rounded-xl px-4 py-3.5 text-[#1D2B3D] focus:outline-none focus:ring-2 focus:ring-[#00683D]/20 focus:border-[#00683D] transition-all font-medium"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-[#1D2B3D] uppercase tracking-wider">Layanan yang Dibutuhkan</label>
                                    <select
                                        className="w-full bg-[#FAFAF7] border border-[#E5E7EB] rounded-xl px-4 py-3.5 text-[#1D2B3D] focus:outline-none focus:ring-2 focus:ring-[#00683D]/20 focus:border-[#00683D] transition-all font-medium appearance-none"
                                    >
                                        <option value="">Pilih layanan...</option>
                                        <option value="company-profile">Company Profile Website</option>
                                        <option value="landing-page">Landing Page Development</option>
                                        <option value="ecommerce">E-Commerce System</option>
                                        <option value="custom">Custom Web Application</option>
                                        <option value="other">Konsultasi Umum</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-[#1D2B3D] uppercase tracking-wider">Detail Proyek / Pesan</label>
                                    <textarea
                                        required
                                        rows={4}
                                        placeholder="Ceritakan sedikit tentang bisnis dan kebutuhan Anda..."
                                        className="w-full bg-[#FAFAF7] border border-[#E5E7EB] rounded-xl px-4 py-3.5 text-[#1D2B3D] focus:outline-none focus:ring-2 focus:ring-[#00683D]/20 focus:border-[#00683D] transition-all font-medium resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-4 bg-[#1D2B3D] text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#00683D] transition-all duration-300 shadow-lg shadow-[#1D2B3D]/20 disabled:opacity-70 disabled:cursor-not-allowed mt-4 group"
                                >
                                    {isSubmitting ? (
                                        "Mengirim Pesan..."
                                    ) : (
                                        <>
                                            Kirim Pesan Sekarang
                                            <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                        </>
                                    )}
                                </button>
                                <p className="text-center text-xs text-[#1D2B3D]/50 font-medium mt-4">
                                    Data Anda aman dan tidak akan dibagikan ke pihak ketiga.
                                </p>
                            </form>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
}