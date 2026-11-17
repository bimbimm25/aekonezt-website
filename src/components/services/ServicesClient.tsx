"use client";

import { motion } from "framer-motion";
import {
    Globe,
    Building2,
    LayoutTemplate,
    ShoppingBag,
    Code2,
    PenTool,
    CheckCircle2,
    ArrowRight
} from "lucide-react";
import Link from "next/link";

const servicesDetail = [
    {
        id: "company-profile",
        icon: Globe,
        title: "Company Profile Website",
        description: "Bangun kredibilitas dan identitas digital yang kuat untuk perusahaan Anda. Website company profile kami dirancang untuk menampilkan profesionalisme, portofolio, dan nilai perusahaan Anda kepada calon klien dan mitra.",
        features: ["Desain elegan & eksklusif", "Halaman Tentang Kami & Tim", "Integrasi Formulir Kontak", "Galeri Portofolio/Proyek", "Optimasi Kecepatan (Core Web Vitals)"],
        color: "text-[#B99150]",
        bgLight: "bg-[#B99150]/10",
    },
    {
        id: "business-website",
        icon: Building2,
        title: "Business & SME Website",
        description: "Solusi digital terjangkau namun premium untuk UMKM dan bisnis lokal yang ingin memperluas jangkauan pasar. Hadir online 24/7 dan permudah pelanggan menemukan layanan Anda.",
        features: ["Katalog Layanan/Produk", "Integrasi Tombol WhatsApp", "Desain Responsif (Mobile-Friendly)", "Optimasi SEO Lokal dasar", "Setup Google My Business (Opsional)"],
        color: "text-[#00683D]",
        bgLight: "bg-[#00683D]/10",
    },
    {
        id: "landing-page",
        icon: LayoutTemplate,
        title: "Landing Page Development",
        description: "Halaman web tunggal dengan konversi tinggi yang dirancang khusus untuk kampanye pemasaran, peluncuran produk baru, atau pengumpulan prospek (lead generation).",
        features: ["Copywriting persuasif (Struktur AIDA)", "Call-To-Action (CTA) strategis", "A/B Testing Ready", "Integrasi Pixel/Analytics", "Kecepatan muat instan (< 2 detik)"],
        color: "text-[#82BD3F]",
        bgLight: "bg-[#82BD3F]/20",
    },
    {
        id: "e-commerce",
        icon: ShoppingBag,
        title: "E-Commerce Website",
        description: "Ubah pengunjung menjadi pembeli dengan toko online profesional. Kami membangun sistem e-commerce yang aman, mudah dikelola, dan terintegrasi dengan metode pembayaran lokal.",
        features: ["Manajemen Inventaris & Produk", "Sistem Keranjang & Checkout", "Integrasi Payment Gateway (Midtrans/dll)", "Kalkulasi Ongkir Otomatis", "Dashboard Admin interaktif"],
        color: "text-[#1D2B3D]",
        bgLight: "bg-[#1D2B3D]/10",
    },
    {
        id: "custom-web",
        icon: Code2,
        title: "Custom Web Development",
        description: "Miliki sistem berbasis web (SaaS, HRIS, CRM, Portal) yang dirancang khusus sesuai dengan alur kerja (workflow) dan kebutuhan unik operasional bisnis Anda.",
        features: ["Arsitektur Database Kustom (PostgreSQL/MySQL)", "Sistem Autentikasi Kompleks", "Dashboard Analitik Real-time", "API Development & Integrasi", "Skalabilitas tinggi dengan Next.js"],
        color: "text-[#B99150]",
        bgLight: "bg-[#B99150]/10",
    },
    {
        id: "ui-ux",
        icon: PenTool,
        title: "UI/UX & Website Redesign",
        description: "Tingkatkan pengalaman pengguna dan perbarui tampilan website lama Anda agar lebih modern, segar, dan selaras dengan standar desain industri terkini.",
        features: ["Audit UI/UX Website Lama", "Pembuatan Wireframe & Mockup", "Prototyping Interaktif", "Desain Sistem & Style Guide", "Implementasi Frontend Modern"],
        color: "text-[#00683D]",
        bgLight: "bg-[#00683D]/10",
    }
];

export default function ServicesClient() {
    return (
        <div className="pt-24 md:pt-28 pb-24 relative overflow-hidden">

            {/* Background Ornament */}
            <div className="absolute top-0 right-0 w-150 h-150 bg-[#00683D]/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
            <div className="absolute top-[20%] left-[-10%] w-125 h-125 bg-[#B99150]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl relative z-10">

                {/* Header Layanan */}
                <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1D2B3D] leading-tight mb-6"
                    >
                        Layanan <span className="text-[#00683D]">Spesialis</span> Kami.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-[#1D2B3D]/70 text-lg md:text-xl font-medium leading-relaxed"
                    >
                        AEKONEZT menyediakan spektrum penuh layanan pengembangan website. Mulai dari profil digital sederhana hingga sistem web kustom skala enterprise, semuanya dibangun dengan standar kualitas premium.
                    </motion.p>
                </div>

                {/* List Layanan (Alternating Layout) */}
                <div className="flex flex-col gap-24 md:gap-32">
                    {servicesDetail.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            className={`flex flex-col gap-10 lg:gap-16 items-center ${index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"
                                }`}
                        >

                            {/* Bagian Visual (Icon/Mockup placeholder) */}
                            <div className="w-full lg:w-1/2">
                                <div className="w-full aspect-4/3 bg-white border border-[#F1F2EF] rounded-3xl shadow-lg flex items-center justify-center relative overflow-hidden group">
                                    <div className={`absolute inset-0 ${service.bgLight} opacity-50 group-hover:scale-110 transition-transform duration-700`} />
                                    <service.icon size={100} strokeWidth={1} className={`${service.color} relative z-10 opacity-80 group-hover:opacity-100 transition-opacity duration-500`} />

                                    {/* Decorative Elements */}
                                    <div className="absolute top-6 left-6 flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-[#1D2B3D]/10" />
                                        <div className="w-3 h-3 rounded-full bg-[#1D2B3D]/10" />
                                    </div>
                                    <div className="absolute bottom-6 right-6 w-24 h-2 bg-[#1D2B3D]/10 rounded-full" />
                                </div>
                            </div>

                            {/* Bagian Teks & Fitur */}
                            <div className="w-full lg:w-1/2 flex flex-col">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-[#1D2B3D] mb-4">
                                    {service.title}
                                </h2>
                                <p className="text-[#1D2B3D]/70 text-base md:text-lg leading-relaxed mb-8">
                                    {service.description}
                                </p>

                                <h3 className="text-sm font-bold text-[#1D2B3D] uppercase tracking-widest mb-4">
                                    Cakupan Layanan:
                                </h3>

                                <ul className="space-y-4 mb-10">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle2 size={20} className="text-[#82BD3F] shrink-0 mt-0.5" />
                                            <span className="text-[#1D2B3D]/80 font-medium">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-white border-2 border-[#1D2B3D] text-[#1D2B3D] font-bold rounded-full hover:bg-[#1D2B3D] hover:text-white transition-all duration-300 w-max shadow-sm"
                                >
                                    Konsultasikan Kebutuhan
                                    <ArrowRight size={18} />
                                </Link>
                            </div>

                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
}