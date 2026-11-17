"use client";

import { motion } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "Konsultasi",
        description: "Diskusi mendalam untuk memahami visi, target audiens, dan kebutuhan spesifik bisnis Anda.",
    },
    {
        number: "02",
        title: "Perencanaan",
        description: "Pembuatan sitemap, wireframe, dan strategi arsitektur teknologi yang paling sesuai.",
    },
    {
        number: "03",
        title: "UI/UX Desain",
        description: "Perancangan visual mockup yang estetik, responsif, dan mencerminkan identitas brand Anda.",
    },
    {
        number: "04",
        title: "Pengembangan",
        description: "Proses coding menggunakan Next.js dan standar industri terbaru dengan kode yang bersih.",
    },
    {
        number: "05",
        title: "Peluncuran",
        description: "Testing menyeluruh, optimasi SEO dasar, dan peluncuran website ke publik secara mulus.",
    },
];

export default function Process() {
    return (
        // Menggunakan background terang senada dengan section lain
        <section className="py-24 md:py-32 bg-brand-gray/20 relative overflow-hidden">

            <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl relative z-10">

                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-brand-gold text-sm font-bold tracking-widest uppercase mb-3"
                    >
                        Alur Kerja
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        // Teks kembali menggunakan warna navy gelap
                        className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-navy leading-tight"
                    >
                        Proses Terstruktur Menuju <br className="hidden md:block" />
                        Hasil yang <span className="text-brand-forest">Sempurna.</span>
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            // Kartu menggunakan warna putih dengan border tipis dan shadow elegan
                            className="relative bg-white border border-brand-gray p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-[0_20px_40px_rgba(29,43,61,0.08)] hover:-translate-y-2 transition-all duration-300"
                        >
                            {/* Angka besar transparan di latar belakang teks */}
                            <div className="text-5xl font-black text-brand-navy/5 mb-6">
                                {step.number}
                            </div>
                            <h4 className="text-xl font-bold text-brand-navy mb-3">{step.title}</h4>
                            <p className="text-brand-navy/70 text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}