"use client";

import { motion, Variants, TargetAndTransition } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Code, Layout, TrendingUp } from "lucide-react";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
};

const floatAnimation: TargetAndTransition = {
    y: [0, -6, 0],
    transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
    }
};

export default function Hero() {
    return (
        
        <section className="relative h-dvh min-h-137.5 w-full flex items-center justify-center overflow-hidden bg-brand-white px-6 md:px-12 lg:px-20 bottom-18">

            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1D2B3D08_1px,transparent_1px),linear-gradient(to_bottom,#1D2B3D08_1px,transparent_1px)] bg-size-[32px_32px]" />

            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[10%] w-125 h-125 rounded-full bg-brand-leaf/10 blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-150 h-150 rounded-full bg-brand-gold/10 blur-[150px]" />
            </div>

            <div className="container mx-auto max-w-7xl relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col items-start text-left lg:col-span-7"
                    >
                        {/* Margin bawah (mb) diperkecil */}
                        <motion.div variants={itemVariants} className="mb-3 md:mb-4">
                            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-brand-gray shadow-sm text-brand-navy text-[10px] md:text-xs font-bold tracking-wide uppercase">
                                <Sparkles size={14} className="text-brand-gold" />
                                <span>Premium Web Development</span>
                            </div>
                        </motion.div>

                        {/* Ukuran H1 disesuaikan agar tidak over-height (text-4xl ke 5xl max) */}
                        <motion.h1 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem] font-extrabold text-brand-navy leading-[1.1] tracking-tight mb-3 md:mb-4">
                            Desain Elegan. <br />
                            Kinerja Maksimal. <br />
                            <span className="relative inline-block mt-1">
                                <span className="absolute -inset-1 bg-brand-leaf/10 -rotate-1 rounded-lg"></span>
                                <span className="relative text-brand-forest">Solusi Digital Anda.</span>
                            </span>
                        </motion.h1>

                        {/* Teks paragraf diperpendek jaraknya */}
                        <motion.p variants={itemVariants} className="text-sm lg:text-base text-brand-navy/70 mb-5 md:mb-6 max-w-lg leading-relaxed font-medium">
                            Kami merancang dan membangun website profesional yang tidak hanya menawan secara visual, tetapi juga dioptimalkan untuk pertumbuhan bisnis dan pengalaman pengguna.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                            <Link
                                href="/contact"
                                className="w-full sm:w-auto group flex items-center justify-center gap-2 px-6 py-2.5 lg:px-7 lg:py-3 bg-brand-navy text-brand-white text-sm font-bold rounded-full hover:bg-brand-forest transition-all duration-300 shadow-[0_8px_20px_rgb(29,43,61,0.2)] hover:shadow-[0_8px_25px_rgba(0,104,61,0.3)] transform hover:-translate-y-1"
                            >
                                Mulai Proyek
                                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                            </Link>

                            <Link
                                href="/portfolio"
                                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 lg:px-7 lg:py-3 bg-white border border-brand-gray text-brand-navy text-sm font-bold rounded-full hover:border-brand-navy hover:bg-brand-gray/30 transition-all duration-300 shadow-sm"
                            >
                                Lihat Portfolio
                            </Link>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                        // Tinggi dibatasi lebih ketat: max-h-[400px] agar tidak pernah mendorong layar ke bawah
                        className="relative w-full h-[35vh] md:h-[45vh] max-h-95 min-h-60 flex items-center justify-center lg:col-span-5 mt-4 lg:mt-0"
                    >
                        <div className="relative w-full max-w-60 lg:max-w-70 aspect-4/5 bg-white border border-brand-gray/60 shadow-[0_20px_40px_rgba(29,43,61,0.08)] rounded-2xl md:rounded-3xl overflow-hidden flex flex-col z-10">

                            <div className="w-full h-8 md:h-10 bg-brand-gray/30 border-b border-brand-gray/50 flex items-center px-3 md:px-4 gap-1.5">
                                <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-red-400" />
                                <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-yellow-400" />
                                <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-green-400" />
                            </div>

                            <div className="flex-1 p-4 flex flex-col gap-3">
                                <div className="w-1/2 h-3 md:h-4 bg-brand-navy/10 rounded-md" />
                                <div className="w-full flex-1 bg-brand-navy/5 rounded-xl flex items-center justify-center">
                                    <div className="w-10 h-10 rounded-full bg-brand-leaf/20 flex items-center justify-center">
                                        <Layout size={18} className="text-brand-forest" />
                                    </div>
                                </div>
                                <div className="space-y-1.5 mt-auto">
                                    <div className="w-full h-2 bg-brand-gray rounded-full" />
                                    <div className="w-4/5 h-2 bg-brand-gray rounded-full" />
                                    <div className="w-2/3 h-2 bg-brand-gray rounded-full" />
                                </div>
                            </div>
                        </div>

                        <motion.div
                            animate={floatAnimation}
                            className="absolute top-0 -left-2 md:top-4 md:-left-8 z-20 bg-white p-2.5 md:p-3 rounded-xl md:rounded-2xl shadow-xl border border-brand-gray flex items-center gap-2"
                        >
                            <div className="w-8 h-8 rounded-full bg-brand-gold/10 flex items-center justify-center">
                                <Code size={16} className="text-brand-gold" />
                            </div>
                            <div className="hidden sm:block">
                                <p className="text-[10px] text-brand-navy/60 font-semibold uppercase tracking-wider">Teknologi</p>
                                <p className="text-xs font-bold text-brand-navy">Modern Stack</p>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ ...floatAnimation, transition: { ...floatAnimation.transition, delay: 1 } }}
                            className="absolute bottom-2 -right-2 md:bottom-6 md:-right-8 z-20 bg-brand-navy p-2.5 md:p-3 rounded-xl md:rounded-2xl shadow-2xl border border-brand-navy flex items-center gap-2"
                        >
                            <div className="w-8 h-8 rounded-full bg-brand-white/10 flex items-center justify-center">
                                <TrendingUp size={16} className="text-brand-leaf" />
                            </div>
                            <div className="hidden sm:block">
                                <p className="text-[10px] text-brand-white/70 font-semibold uppercase tracking-wider">Performa</p>
                                <p className="text-xs font-bold text-brand-white">SEO Optimized</p>
                            </div>
                        </motion.div>

                    </motion.div>

                </div>
            </div>
        </section>
    );
}