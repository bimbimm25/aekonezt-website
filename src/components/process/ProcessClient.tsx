"use client";

import { motion } from "framer-motion";
import { MessageCircle, Map, PenTool, Code2, CheckCircle, Rocket } from "lucide-react";

const detailedSteps = [
    {
        id: "01",
        icon: MessageCircle,
        title: "Discovery & Konsultasi",
        description: "Kami memulai dengan mendengarkan. Pada tahap ini, kami mempelajari visi bisnis Anda, target audiens, serta tujuan utama yang ingin dicapai melalui website.",
        deliverables: ["Project Brief", "Analisis Kompetitor", "Estimasi Timeline & Biaya"],
        color: "text-[#B99150]",
        bg: "bg-[#B99150]/10",
    },
    {
        id: "02",
        icon: Map,
        title: "Strategi & Arsitektur",
        description: "Merancang fondasi digital yang kokoh. Kami membuat kerangka kerja, alur pengguna (user flow), dan struktur navigasi agar website intuitif dan mudah digunakan.",
        deliverables: ["Sitemap Website", "Wireframe Dasar (UX)", "Pemilihan Tech Stack"],
        color: "text-[#00683D]",
        bg: "bg-[#00683D]/10",
    },
    {
        id: "03",
        icon: PenTool,
        title: "UI/UX Visual Design",
        description: "Mengubah wireframe menjadi karya seni. Tim desainer kami merancang antarmuka (UI) yang estetis, selaras dengan identitas brand, dan menarik perhatian pengunjung.",
        deliverables: ["Style Guide & Typography", "Mockup High-Fidelity (Figma)", "Prototipe Interaktif"],
        color: "text-[#82BD3F]",
        bg: "bg-[#82BD3F]/20",
    },
    {
        id: "04",
        icon: Code2,
        title: "Development & Coding",
        description: "Menghidupkan desain dengan kode. Kami menggunakan teknologi mutakhir (seperti Next.js dan Tailwind) untuk memastikan website cepat, aman, dan responsif.",
        deliverables: ["Clean & Modular Code", "Integrasi CMS/Database", "Link Staging (Review Klien)"],
        color: "text-[#1D2B3D]",
        bg: "bg-[#1D2B3D]/10",
    },
    {
        id: "05",
        icon: CheckCircle,
        title: "QA Testing & Optimasi",
        description: "Sebelum rilis, kami melakukan pengujian ketat di berbagai perangkat dan browser. Kami juga memastikan performa Core Web Vitals dan SEO dasar sudah optimal.",
        deliverables: ["Laporan Bug Fixing", "Audit Kecepatan (Lighthouse)", "Optimasi SEO On-Page"],
        color: "text-[#B99150]",
        bg: "bg-[#B99150]/10",
    },
    {
        id: "06",
        icon: Rocket,
        title: "Peluncuran & Handover",
        description: "Website Anda siap menyapa dunia! Kami memindahkan website ke server produksi, menyerahkan akses penuh, dan memberikan panduan cara pengelolaannya.",
        deliverables: ["Live Website (Domain Utama)", "Source Code Lengkap", "Dokumentasi & Dukungan"],
        color: "text-[#00683D]",
        bg: "bg-[#00683D]/10",
    },
];

export default function ProcessClient() {
    return (
        <div className=" pt-25 pb-24 relative overflow-hidden">

            {/* Background Ornament */}
            <div className="absolute top-0 right-0 w-125 h-125 bg-[#82BD3F]/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-[20%] left-[-10%] w-100 h-100 bg-[#B99150]/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl relative z-10">

                {/* Header Section */}
                <div className="max-w-3xl mx-auto text-center mb-24 md:mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#F1F2EF] shadow-sm text-[#1D2B3D] text-xs font-bold tracking-wide uppercase mb-6"
                    >
                        <span>Metodologi AEKONEZT</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1D2B3D] leading-tight mb-6"
                    >
                        Sistematis. Transparan. <br />
                        <span className="text-[#00683D]">Tanpa Kejutan.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-[#1D2B3D]/70 text-lg font-medium leading-relaxed"
                    >
                        Kami menghilangkan kerumitan teknis dari pundak Anda. Ikuti perjalanan transparan kami dari sketsa ide pertama hingga website Anda resmi mengudara.
                    </motion.p>
                </div>

                {/* Timeline Process */}
                <div className="relative max-w-5xl mx-auto">

                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-[#1D2B3D]/20 to-transparent -translate-x-1/2" />

                    <div className="flex flex-col gap-16 md:gap-24">
                        {detailedSteps.map((step, index) => {
                            const isEven = index % 2 === 0;

                            return (
                                <motion.div
                                    key={step.id}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                                    className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 relative ${isEven ? "md:flex-row" : "md:flex-row-reverse"
                                        }`}
                                >

                                    <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white border-4 border-[#FAFAF7] rounded-full items-center justify-center shadow-lg z-10">
                                        <div className="w-4 h-4 bg-[#1D2B3D] rounded-full" />
                                    </div>

                                    <div className={`w-full md:w-1/2 flex ${isEven ? "md:justify-end" : "md:justify-start"}`}>
                                        <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-[#F1F2EF] shadow-[0_20px_40px_rgba(29,43,61,0.05)] hover:shadow-[0_20px_40px_rgba(29,43,61,0.1)] transition-shadow duration-300 relative w-full group">

                                            <div className="absolute top-4 right-8 text-7xl font-black text-[#1D2B3D]/5 group-hover:text-[#00683D]/5 transition-colors duration-500">
                                                {step.id}
                                            </div>

                                            <div className={`w-14 h-14 rounded-2xl ${step.bg} flex items-center justify-center mb-6`}>
                                                <step.icon size={28} className={step.color} />
                                            </div>

                                            {/* PERBAIKAN: Dari {title} diubah menjadi {step.title} agar membaca data array dengan benar */}
                                            <h3 className="text-2xl font-extrabold text-[#1D2B3D] mb-4 relative z-10">
                                                {step.title}
                                            </h3>

                                            <p className="text-[#1D2B3D]/70 font-medium leading-relaxed mb-8 relative z-10">
                                                {step.description}
                                            </p>

                                            <div className="pt-6 border-t border-[#F1F2EF] relative z-10">
                                                <h4 className="text-xs font-bold text-[#1D2B3D] uppercase tracking-wider mb-4">
                                                    Output / Deliverables:
                                                </h4>
                                                <ul className="space-y-3">
                                                    {step.deliverables.map((item, i) => (
                                                        <li key={i} className="flex items-center gap-3">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-[#B99150]" />
                                                            <span className="text-[#1D2B3D]/80 text-sm font-medium">{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="hidden md:block w-1/2" />

                                </motion.div>
                            );
                        })}
                    </div>

                </div>

            </div>
        </div>
    );
}