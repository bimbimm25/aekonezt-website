"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";

// Data proyek menggunakan konsep portfolio profesional Anda
const projects = [
    {
        title: "Mindora",
        category: "Web Application",
        description: "Aplikasi AI conversational dan interactive journaling dengan pelacakan progres, quest tracking, dan analitik data cerdas.",
        tech: ["Next.js", "Supabase", "Gemini API", "Tailwind CSS"],
        // Warna untuk skeleton placeholder gambar
        color: "from-brand-navy to-brand-navy/80",
    },
    {
        title: "The Gentleman Barbershop",
        category: "Commercial Website",
        description: "Website company profile dan landing page responsif dengan desain maskulin, ditujukan untuk layanan barbershop premium.",
        tech: ["React JS", "Tailwind CSS", "Framer Motion"],
        color: "from-brand-forest to-brand-leaf",
    },
    {
        title: "evoHRISv2.0",
        category: "Enterprise System",
        description: "Sistem Informasi Manajemen SDM (HRIS) komprehensif yang dilengkapi fitur otomatisasi rendering laporan HTML dan PDF.",
        tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
        color: "from-brand-gold to-brand-gold/70",
    }
];

export default function FeaturedProjects() {
    return (
        <section className="py-24 md:py-32 bg-brand-gray/20 relative">
            <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="max-w-2xl"
                    >
                        <h2 className="text-brand-gold text-sm font-bold tracking-widest uppercase mb-3">
                            Featured Projects
                        </h2>
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-navy leading-tight">
                            Karya Terbaik dari <br className="hidden sm:block" />
                            <span className="text-brand-forest">Studio Kami.</span>
                        </h3>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="hidden md:block"
                    >
                        <Link
                            href="/portfolio"
                            className="group flex items-center gap-2 px-6 py-3 bg-white border border-brand-gray rounded-full text-brand-navy font-semibold hover:border-brand-navy transition-all duration-300 shadow-sm hover:shadow-md"
                        >
                            Lihat Semua Portofolio
                            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                        </Link>
                    </motion.div>
                </div>

                {/* Project Grid */}
                <div className="flex flex-col gap-16 md:gap-24">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            className={`flex flex-col gap-8 lg:gap-16 ${
                                // Zig-zag layout: Index ganjil akan dibalik posisinya di desktop
                                index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"
                                } items-center`}
                        >

                            {/* Project Image Placeholder */}
                            <div className="w-full lg:w-3/5 group relative cursor-pointer">
                                <div className={`relative w-full aspect-4/3 lg:aspect-16/10 bg-linear-to-br ${project.color} rounded-2xl md:rounded-4xl overflow-hidden shadow-lg transition-transform duration-500 group-hover:scale-[1.02]`}>
                                    {/* Efek Glassmorphism mock UI di dalam gambar */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex flex-col p-4 shadow-2xl">
                                        <div className="w-full h-4 flex gap-1.5 mb-4">
                                            <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
                                        </div>
                                        <div className="flex-1 w-full bg-white/5 rounded-lg border border-white/10" />
                                    </div>

                                    {/* Overlay Hover */}
                                    <div className="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/20 transition-colors duration-500 flex items-center justify-center">
                                        <div className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl">
                                            <ArrowUpRight size={28} className="text-brand-navy" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className="w-full lg:w-2/5 flex flex-col items-start text-left">
                                <div className="px-3 py-1 bg-white border border-brand-gray rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider text-brand-navy/60 mb-4 shadow-sm">
                                    {project.category}
                                </div>

                                <h4 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 group-hover:text-brand-forest transition-colors">
                                    {project.title}
                                </h4>

                                <p className="text-brand-navy/70 leading-relaxed text-base md:text-lg mb-8">
                                    {project.description}
                                </p>

                                {/* Tech Stack Tags */}
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="px-3 py-1.5 bg-brand-gray/50 text-brand-navy text-xs font-semibold rounded-md">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <Link
                                    href={`/portfolio`}
                                    className="inline-flex items-center gap-2 text-brand-navy font-bold hover:text-brand-forest transition-colors group/link"
                                >
                                    Lihat Detail Proyek
                                    <ArrowRight size={18} className="transition-transform group-hover/link:translate-x-1" />
                                </Link>
                            </div>

                        </motion.div>
                    ))}
                </div>

                {/* Mobile Button CTA (Muncul hanya di HP karena header link disembunyikan di HP) */}
                <div className="mt-12 flex justify-center md:hidden">
                    <Link
                        href="/portfolio"
                        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-brand-gray rounded-full text-brand-navy font-bold hover:border-brand-navy transition-all duration-300 shadow-sm"
                    >
                        Lihat Semua Portofolio
                        <ArrowRight size={18} />
                    </Link>
                </div>

            </div>
        </section>
    );
}