"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, Info, ArrowRight, Sparkles } from "lucide-react";

const pricingPlans = [
    {
        id: "starter",
        name: "Starter Website",
        target: "Cocok untuk personal & bisnis rintisan",
        price: "Mulai dari Rp 3 Juta",
        description: "Paket dasar untuk membangun identitas digital awal dengan desain profesional dan responsif.",
        features: [
            "Maksimal 3 Halaman",
            "Desain Template Premium",
            "Responsif (Mobile & Desktop)",
            "Integrasi Tombol WhatsApp",
            "Optimasi SEO Dasar",
            "Gratis Domain & Hosting (1 Tahun)"
        ],
        highlight: false,
        buttonText: "Pilih Starter",
    },
    {
        id: "business",
        name: "Business Website",
        target: "Pilihan terbaik untuk UMKM & Perusahaan",
        price: "Mulai dari Rp 7 Juta",
        description: "Solusi lengkap dengan performa tinggi dan desain kustom untuk mendongkrak kredibilitas bisnis Anda.",
        features: [
            "Maksimal 10 Halaman",
            "Desain Kustom Eksklusif (UI/UX)",
            "Animasi Transisi Premium",
            "Integrasi Formulir & Database",
            "Optimasi Core Web Vitals",
            "Setup Google Analytics",
            "Gratis Domain & Hosting (1 Tahun)",
            "Dukungan Teknis (3 Bulan)"
        ],
        highlight: true,
        buttonText: "Mulai Bisnis",
    },
    {
        id: "custom",
        name: "Custom Project",
        target: "Untuk skala enterprise & aplikasi web",
        price: "Hubungi Kami",
        description: "Pengembangan sistem web kompleks, E-commerce, atau aplikasi spesifik sesuai alur kerja perusahaan.",
        features: [
            "Jumlah Halaman Tak Terbatas",
            "Arsitektur Teknologi Kustom (Next.js/Laravel)",
            "Sistem Backend & Database Skalabel",
            "Integrasi API & Payment Gateway",
            "Dashboard Admin Panel",
            "Keamanan Tingkat Lanjut",
            "SLA Maintenance Khusus"
        ],
        highlight: false,
        buttonText: "Konsultasi Kustom",
    }
];

export default function PricingClient() {
    return (
        <div className="pt-24 md:pt-32 pb-24 relative overflow-hidden">

            {/* Background Ornament */}
            <div className="absolute top-[-10%] right-[10%] w-125 h-125 bg-[#82BD3F]/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-5%] w-150 h-150 bg-[#B99150]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl relative z-10">

                {/* Header Pricing */}
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#F1F2EF] shadow-sm text-[#1D2B3D] text-xs font-bold tracking-wide uppercase mb-6"
                    >
                        <Sparkles size={16} className="text-[#B99150]" />
                        <span>Investasi Digital</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1D2B3D] leading-tight mb-6"
                    >
                        Transparan. <br />
                        Berorientasi <span className="text-[#00683D]">Hasil.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-[#1D2B3D]/70 text-base md:text-lg font-medium leading-relaxed"
                    >
                        Pilih paket yang paling sesuai dengan skala dan kebutuhan bisnis Anda saat ini. Tidak ada biaya tersembunyi.
                    </motion.p>
                </div>

                {/* Pricing Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
                    {pricingPlans.map((plan, index) => (
                        <motion.div
                            key={plan.id}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            // PERBAIKAN: Menggunakan kode HEX #1D2B3D secara langsung untuk background gelap
                            className={`relative flex flex-col rounded-[2.5rem] p-8 md:p-10 transition-transform duration-300 hover:-translate-y-2 ${plan.highlight
                                    ? "bg-[#1D2B3D] shadow-2xl border border-[#1D2B3D]"
                                    : "bg-white border border-[#F1F2EF] shadow-lg"
                                }`}
                        >
                            {/* Badge Populer */}
                            {plan.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-[#B99150] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md">
                                    Paling Direkomendasikan
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className={`text-2xl font-extrabold mb-2 ${plan.highlight ? "text-white" : "text-[#1D2B3D]"}`}>
                                    {plan.name}
                                </h3>
                                <p className={`text-sm font-medium mb-6 ${plan.highlight ? "text-white/70" : "text-[#1D2B3D]/60"}`}>
                                    {plan.target}
                                </p>
                                <div className="flex items-baseline gap-1">
                                    <span className={`text-3xl lg:text-4xl font-black ${plan.highlight ? "text-[#82BD3F]" : "text-[#1D2B3D]"}`}>
                                        {plan.price}
                                    </span>
                                </div>
                                <p className={`text-sm mt-4 leading-relaxed ${plan.highlight ? "text-white/80" : "text-[#1D2B3D]/80"}`}>
                                    {plan.description}
                                </p>
                            </div>

                            {/* Fitur List */}
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-4">
                                    <Info size={16} className={plan.highlight ? "text-[#B99150]" : "text-[#1D2B3D]/40"} />
                                    <span className={`text-xs font-bold uppercase tracking-wider ${plan.highlight ? "text-white/90" : "text-[#1D2B3D]"}`}>
                                        Termasuk:
                                    </span>
                                </div>
                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <Check size={18} className={`shrink-0 mt-0.5 ${plan.highlight ? "text-[#82BD3F]" : "text-[#00683D]"}`} />
                                            <span className={`text-sm font-medium ${plan.highlight ? "text-white/80" : "text-[#1D2B3D]/80"}`}>
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Tombol CTA */}
                            <Link
                                href={`/contact?plan=${plan.id}`}
                                className={`w-full py-4 rounded-full flex justify-center items-center gap-2 font-bold transition-all duration-300 group ${plan.highlight
                                        ? "bg-[#82BD3F] text-white hover:bg-white hover:text-[#1D2B3D] shadow-lg"
                                        : "bg-[#F1F2EF] text-[#1D2B3D] hover:bg-[#1D2B3D] hover:text-white"
                                    }`}
                            >
                                {plan.buttonText}
                                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                            </Link>

                        </motion.div>
                    ))}
                </div>

                {/* Footer Note Pricing */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-center mt-12 text-sm text-[#1D2B3D]/60 font-medium"
                >
                    *Harga di atas adalah estimasi dasar. Total investasi akan disesuaikan dengan kompleksitas proyek setelah konsultasi.
                </motion.div>

            </div>
        </div>
    );
}