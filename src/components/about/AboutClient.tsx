"use client";

import { motion } from "framer-motion";
import { Target, Eye, Leaf, Award, Lightbulb, HeartHandshake } from "lucide-react";

const values = [
    {
        icon: Award,
        title: "Kualitas Premium",
        description: "Kami tidak berkompromi pada detail. Setiap piksel dan baris kode dikerjakan dengan standar industri tertinggi.",
    },
    {
        icon: Leaf,
        title: "Estetika Natural",
        description: "Desain yang bernafas. Mengambil inspirasi dari alam untuk menciptakan antarmuka yang elegan dan tidak lekang oleh waktu.",
    },
    {
        icon: Lightbulb,
        title: "Solusi Inovatif",
        description: "Menggabungkan teknologi modern seperti Next.js untuk memecahkan masalah bisnis dengan cara yang paling efisien.",
    },
    {
        icon: HeartHandshake,
        title: "Kemitraan Jangka Panjang",
        description: "Kami memposisikan diri sebagai mitra pertumbuhan digital Anda, bukan sekadar vendor pembuat website sesaat.",
    },
];

export default function AboutClient() {
    return (
        <div className="pt-24 md:pt-32 pb-24 relative overflow-hidden">

            {/* Ornamen Latar Belakang */}
            <div className="absolute top-0 right-0 w-125 h-125 bg-brand-leaf/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-[20%] left-[-10%] w-100 h-100 bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl relative z-10">

                {/* HEADER SECTION */}
                <div className="max-w-4xl mx-auto text-center mb-24 md:mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-brand-gray shadow-sm text-brand-navy text-xs md:text-sm font-bold tracking-wide uppercase mb-6"
                    >
                        <Leaf size={16} className="text-brand-forest" />
                        <span>Cerita AEKONEZT</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-brand-navy leading-tight mb-8"
                    >
                        Lebih dari Sekadar Kode. <br />
                        Kami Membangun <span className="text-brand-forest">Pertumbuhan.</span>
                    </motion.h1>
                </div>

                {/* OUR STORY SECTION */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center mb-32"
                >
                    {/* Visual Abstrak Mewakili "Alam & Teknologi" */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative w-full aspect-square md:aspect-4/3 bg-brand-white border border-brand-gray rounded-4xl md:rounded-[3rem] overflow-hidden flex items-center justify-center shadow-xl">
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1D2B3D08_1px,transparent_1px),linear-gradient(to_bottom,#1D2B3D08_1px,transparent_1px)] bg-size-[24px_24px]" />
                            <div className="absolute w-[120%] h-[120%] bg-linear-to-br from-brand-forest/20 via-brand-leaf/10 to-transparent blur-[60px] animate-pulse rounded-full" />

                            {/* Geometry UI */}
                            <div className="relative z-10 w-48 h-64 bg-white/40 backdrop-blur-xl border border-white/60 rounded-2xl shadow-2xl transform -rotate-6 flex flex-col p-4">
                                <div className="w-12 h-12 rounded-full bg-brand-leaf/20 mb-4" />
                                <div className="w-full h-3 bg-white/50 rounded-full mb-3" />
                                <div className="w-3/4 h-3 bg-white/50 rounded-full mb-3" />
                                <div className="w-full h-24 bg-white/40 rounded-xl mt-auto" />
                            </div>
                            <div className="absolute z-20 w-48 h-48 bg-brand-navy/80 backdrop-blur-xl border border-brand-navy rounded-2xl shadow-2xl transform rotate-6 translate-x-12 translate-y-12 flex items-center justify-center p-6">
                                <div className="w-full h-full border border-brand-gold/30 rounded-xl flex items-center justify-center">
                                    <span className="text-brand-gold font-bold tracking-widest uppercase text-xs">AEKONEZT</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 flex flex-col">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-6">
                            Menggabungkan Estetika dan Presisi Digital.
                        </h2>
                        <div className="space-y-6 text-brand-navy/75 text-base md:text-lg leading-relaxed font-medium">
                            <p>
                                AEKONEZT lahir dari sebuah visi sederhana: dunia digital tidak seharusnya dingin dan kaku. Kami percaya bahwa teknologi terbaik adalah yang terasa natural, intuitif, dan mampu bernafas bersama identitas sebuah brand.
                            </p>
                            <p>
                                Sebagai studio pengembangan web premium, kami memadukan keandalan teknologi tumpukan modern (Modern Tech Stack) seperti Next.js dan Supabase dengan filosofi desain yang terinspirasi dari harmoni alam.
                            </p>
                            <p>
                                Bagi kami, membuat website bukan sekadar tentang merakit kode. Ini adalah tentang merancang ekosistem digital yang kokoh, membangun kredibilitas, dan pada akhirnya—menumbuhkan bisnis Anda layaknya pohon yang berakar kuat.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* VISION & MISSION */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                        className="bg-brand-navy rounded-4xl p-10 md:p-14 flex flex-col relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-forest/30 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
                        <Eye size={40} className="text-brand-gold mb-8 relative z-10" />
                        <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Visi Kami</h3>
                        <p className="text-brand-white/80 leading-relaxed relative z-10">
                            Menjadi digital agency dan mitra teknologi terdepan yang menetapkan standar baru dalam desain UI/UX dan performa website di Indonesia. Menghadirkan karya yang estetis, fungsional, dan berdampak nyata.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-brand-gray/30 border border-brand-gray rounded-4xl p-10 md:p-14 flex flex-col"
                    >
                        <Target size={40} className="text-brand-forest mb-8" />
                        <h3 className="text-2xl font-bold text-brand-navy mb-4">Misi Kami</h3>
                        <ul className="text-brand-navy/75 leading-relaxed space-y-3 list-disc list-inside">
                            <li>Memberikan solusi digital yang inovatif dan relevan.</li>
                            <li>Membantu UMKM dan perusahaan bertransformasi digital.</li>
                            <li>Mengedepankan performa, keamanan, dan pengalaman pengguna.</li>
                            <li>Membangun hubungan kolaboratif jangka panjang dengan klien.</li>
                        </ul>
                    </motion.div>
                </div>

                {/* CORE VALUES */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy">Filosofi & Nilai Inti</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white border border-brand-gray p-8 rounded-3xl hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="w-14 h-14 bg-brand-gray/50 rounded-2xl flex items-center justify-center mb-6">
                                <value.icon size={28} className="text-brand-forest" />
                            </div>
                            <h4 className="text-xl font-bold text-brand-navy mb-3">{value.title}</h4>
                            <p className="text-sm text-brand-navy/70 leading-relaxed font-medium">
                                {value.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
}