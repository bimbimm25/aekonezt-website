"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Rocket, Headset } from "lucide-react";

const reasons = [
    {
        icon: Zap,
        title: "Performa Tinggi",
        description: "Website dioptimalkan untuk kecepatan pemuatan maksimal dan Core Web Vitals yang sempurna.",
    },
    {
        icon: ShieldCheck,
        title: "Keamanan Terjamin",
        description: "Menerapkan standar keamanan web modern untuk melindungi data bisnis dan pelanggan Anda.",
    },
    {
        icon: Rocket,
        title: "Skalabilitas Bisnis",
        description: "Arsitektur kode yang modular memastikan website siap berkembang seiring pertumbuhan bisnis.",
    },
    {
        icon: Headset,
        title: "Dukungan Dedikatif",
        description: "Kami menyediakan maintenance dan dukungan teknis berkelanjutan setelah website diluncurkan.",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="py-24 md:py-32 bg-brand-white relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">

                    {/* Bagian Kiri: Judul & Deskripsi */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-xl"
                    >
                        <h2 className="text-brand-gold text-sm font-bold tracking-widest uppercase mb-3">
                            Mengapa AEKONEZT
                        </h2>
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-navy leading-tight mb-6">
                            Mitra Digital yang <br className="hidden md:block" />
                            <span className="text-brand-forest">Bisa Diandalkan.</span>
                        </h3>
                        <p className="text-brand-navy/70 text-base md:text-lg leading-relaxed mb-8">
                            Kami tidak sekadar membuat website, kami membangun aset digital yang bekerja keras untuk bisnis Anda. Dari baris kode pertama hingga peluncuran, kualitas adalah prioritas utama kami.
                        </p>

                        {/* Statistik / Trust Indicators */}
                        <div className="flex gap-8 md:gap-12 pt-6 border-t border-brand-gray">
                            <div>
                                <p className="text-3xl font-extrabold text-brand-navy mb-1">100%</p>
                                <p className="text-xs text-brand-navy/60 font-semibold uppercase tracking-wider">Kustomisasi</p>
                            </div>
                            <div>
                                <p className="text-3xl font-extrabold text-brand-navy mb-1">24/7</p>
                                <p className="text-xs text-brand-navy/60 font-semibold uppercase tracking-wider">Dukungan</p>
                            </div>
                            <div>
                                <p className="text-3xl font-extrabold text-brand-navy mb-1">SEO</p>
                                <p className="text-xs text-brand-navy/60 font-semibold uppercase tracking-wider">Optimized</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Bagian Kanan: Grid Fitur */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                        {reasons.map((reason, index) => (
                            <div
                                key={index}
                                className="bg-white border border-brand-gray/60 p-6 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-brand-leaf/10 flex items-center justify-center mb-5">
                                    <reason.icon size={24} className="text-brand-forest" />
                                </div>
                                <h4 className="text-lg font-bold text-brand-navy mb-2">{reason.title}</h4>
                                <p className="text-sm text-brand-navy/70 leading-relaxed">{reason.description}</p>
                            </div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    );
}