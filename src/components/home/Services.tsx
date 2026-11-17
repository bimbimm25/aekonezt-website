"use client";

import { motion } from "framer-motion";
import {
    Globe,
    ShoppingBag,
    LayoutTemplate,
    PenTool,
    MonitorSmartphone,
    Code2,
    ArrowRight
} from "lucide-react";
import Link from "next/link";

const servicesData = [
    {
        icon: Globe,
        title: "Company Profile",
        description: "Website profesional untuk membangun kredibilitas dan identitas digital perusahaan atau agensi Anda.",
    },
    {
        icon: LayoutTemplate,
        title: "Landing Page",
        description: "Halaman web yang dioptimalkan khusus untuk konversi tinggi, kampanye iklan, dan peluncuran produk.",
    },
    {
        icon: ShoppingBag,
        title: "E-Commerce",
        description: "Toko online terintegrasi dengan sistem manajemen produk, keranjang belanja, dan pembayaran.",
    },
    {
        icon: Code2,
        title: "Custom Development",
        description: "Pengembangan sistem web kustom berskala besar yang disesuaikan dengan alur bisnis unik Anda.",
    },
    {
        icon: PenTool,
        title: "UI/UX Design",
        description: "Perancangan antarmuka pengguna yang estetik dan pengalaman interaksi yang intuitif untuk aplikasi web.",
    },
    {
        icon: MonitorSmartphone,
        title: "Website Redesign",
        description: "Pembaruan total visual dan performa website lama Anda menjadi lebih modern dan responsif.",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" as const },
    },
};

export default function Services() {
    return (
        <section className="py-24 md:py-32 bg-brand-white relative overflow-hidden">
            {/* Background Ornament Lembut */}
            <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-brand-gray to-transparent" />
            <div className="absolute -left-40 top-40 w-96 h-96 bg-brand-leaf/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -right-40 bottom-40 w-96 h-96 bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl relative z-10">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="max-w-2xl"
                    >
                        <h2 className="text-brand-gold text-sm font-bold tracking-widest uppercase mb-3">
                            Layanan Kami
                        </h2>
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-navy leading-tight">
                            Solusi Digital Terpadu untuk <span className="text-brand-forest">Bisnis Anda.</span>
                        </h3>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    >
                        <Link
                            href="/services"
                            className="inline-flex items-center gap-2 pb-1 border-b-2 border-brand-navy text-brand-navy font-semibold hover:text-brand-forest hover:border-brand-forest transition-colors"
                        >
                            Lihat Semua Layanan
                            <ArrowRight size={18} />
                        </Link>
                    </motion.div>
                </div>

                {/* Services Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                >
                    {servicesData.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="group relative bg-white border border-brand-gray p-8 rounded-3xl hover:shadow-[0_20px_40px_rgba(29,43,61,0.06)] transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                        >
                            {/* Efek Hover Garis Atas */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-brand-gray transition-colors duration-500 group-hover:bg-brand-forest" />

                            <div className="w-14 h-14 bg-brand-gray/50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-forest/10 transition-colors duration-500">
                                <service.icon size={28} className="text-brand-navy group-hover:text-brand-forest transition-colors duration-500" />
                            </div>

                            <h4 className="text-xl font-bold text-brand-navy mb-3">
                                {service.title}
                            </h4>

                            <p className="text-brand-navy/70 leading-relaxed text-sm md:text-base">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}