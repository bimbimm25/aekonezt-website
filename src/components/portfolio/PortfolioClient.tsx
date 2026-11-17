"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const categories = ["Semua", "Web App", "Company Profile", "E-Commerce"];

const portfolioData = [
    {
        id: 1,
        title: "Mindora AI Journaling",
        category: "Web App",
        description: "Aplikasi AI conversational dan interactive journaling dengan pelacakan progres, quest tracking, dan analitik data cerdas.",
        tech: ["Next.js", "Supabase", "Gemini API", "Tailwind CSS"],
        color: "from-brand-navy to-brand-navy/80",
    },
    {
        id: 2,
        title: "The Gentleman Barbershop",
        category: "Company Profile",
        description: "Website komersial dan landing page responsif dengan desain maskulin, ditujukan untuk layanan barbershop premium.",
        tech: ["React JS", "Tailwind CSS", "Framer Motion"],
        color: "from-[#1D2B3D] to-[#00683D]",
    },
    {
        id: 3,
        title: "Sistem Manajemen Kos",
        category: "Web App",
        description: "Platform manajemen properti kos dengan pelacakan ketersediaan kamar, penagihan bulanan otomatis, dan klasifikasi penyewa.",
        tech: ["Next.js", "Supabase", "TypeScript"],
        color: "from-[#B99150] to-[#B99150]/70",
    },
    {
        id: 4,
        title: "evoHRISv2.0 Enterprise",
        category: "Web App",
        description: "Sistem Informasi Manajemen SDM (HRIS) komprehensif yang dilengkapi fitur otomatisasi rendering laporan HTML dan PDF.",
        tech: ["Laravel", "MySQL", "Bootstrap"],
        color: "from-[#82BD3F] to-[#00683D]",
    },
    {
        id: 5,
        title: "AekoNezt Digital Store",
        category: "E-Commerce",
        description: "Marketplace produk digital dengan integrasi payment gateway Midtrans dan pengiriman lisensi otomatis yang aman (SHA-512).",
        tech: ["Laravel", "PHP", "Midtrans", "Tailwind CSS"],
        color: "from-brand-gray/80 to-brand-gray/40",
        textColor: "text-brand-navy",
    },
    {
        id: 6,
        title: "Tomeetcafe Hub",
        category: "Company Profile",
        description: "Website portal kafe multi-cabang dengan performa tinggi yang dihosting menggunakan Nginx dan PM2 di server Linux.",
        tech: ["Next.js", "Nginx", "Linux Server"],
        color: "from-[#1D2B3D] to-brand-gray",
    },
];

export default function PortfolioClient() {
    const [activeCategory, setActiveCategory] = useState("Semua");

    const filteredProjects = portfolioData.filter((project) =>
        activeCategory === "Semua" ? true : project.category === activeCategory
    );

    return (
        <section className="pt-24 md:pt-8 pb-24 relative overflow-hidden px-6 md:px-12 lg:px-20 min-h-screen">

            {/* Background Ornament - Diperbarui dengan w-150 h-150 */}
            <div className="absolute top-0 right-0 w-150 h-150 bg-[#00683D]/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />

            <div className="container mx-auto max-w-7xl relative z-10">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-8 md:mb-10">
                    <div className="max-w-2xl">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl md:text-5xl font-extrabold text-[#1D2B3D] leading-tight mb-4"
                        >
                            Karya <span className="text-[#00683D]">Terbaik</span> Kami.
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-[#1D2B3D]/70 text-lg font-medium"
                        >
                            Jelajahi berbagai solusi digital yang telah kami bangun untuk mendongkrak visibilitas dan efisiensi bisnis klien kami.
                        </motion.p>
                    </div>
                </div>

                {/* Filter Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-wrap items-center gap-3 mb-8"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${activeCategory === category
                                    ? "bg-[#1D2B3D] text-white shadow-md"
                                    : "bg-white border border-[#F1F2EF] text-[#1D2B3D]/70 hover:border-[#1D2B3D]/30 hover:text-[#1D2B3D]"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Project Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{
                                    layout: { type: "spring", bounce: 0.2, duration: 0.5 },
                                    opacity: { duration: 0.2 }
                                }}
                                className="group flex flex-col bg-white border border-[#F1F2EF] rounded-3xl overflow-hidden hover:shadow-[0_20px_40px_rgba(29,43,61,0.08)] transition-shadow duration-300"
                            >
                                {/* Image Placeholder - Diperbarui dengan aspect-4/3 */}
                                <div className="relative w-full aspect-4/3 p-6 overflow-hidden bg-brand-gray/20">
                                    <div className={`absolute inset-0 bg-linear-to-br ${project.color} opacity-90 transition-transform duration-700 group-hover:scale-105`} />

                                    <div className="relative z-10 w-full h-full bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-xl flex flex-col p-4 transform translate-y-4 group-hover:translate-y-2 transition-transform duration-500">
                                        <div className="flex gap-1.5 mb-4">
                                            <div className="w-2.5 h-2.5 rounded-full bg-white/40" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-white/40" />
                                        </div>
                                        <div className="flex-1 w-full bg-white/10 rounded-lg border border-white/10" />
                                        <div className={`absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${project.textColor || 'text-white'}`}>
                                            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center border border-white/30">
                                                <ExternalLink size={20} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Project Info */}
                                <div className="p-6 md:p-8 flex flex-col flex-1">
                                    <div className="mb-4">
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#B99150] bg-[#B99150]/10 px-3 py-1 rounded-full">
                                            {project.category}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#1D2B3D] mb-3 group-hover:text-[#00683D] transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-[#1D2B3D]/70 text-sm leading-relaxed mb-6 flex-1 font-medium">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                                        {project.tech.map((tech, i) => (
                                            <span key={i} className="px-2.5 py-1 bg-[#F1F2EF] text-[#1D2B3D] text-[11px] font-bold rounded-md">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="pt-6 border-t border-[#F1F2EF] flex items-center justify-between">
                                        <span className="text-sm font-bold text-[#1D2B3D] group-hover:text-[#00683D] transition-colors flex items-center gap-2">
                                            Lihat Detail <ArrowUpRight size={16} />
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

            </div>
        </section>
    );
}