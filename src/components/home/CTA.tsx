"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageSquareText } from "lucide-react";

export default function CTA() {
    return (
        <section className="py-20 md:py-32 relative overflow-hidden bg-brand-white px-4 md:px-12 lg:px-20">
            <div className="container mx-auto max-w-5xl relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="relative bg-[#1D2B3D] rounded-3xl md:rounded-[3rem] p-10 md:p-16 lg:p-20 overflow-hidden flex flex-col items-center text-center shadow-2xl"
                >
                    {/* Background Ornament yang JAUH lebih kalem dan elegan */}
                    <div className="absolute top-0 right-0 w-100 h-100 bg-[#B99150]/10 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
                    <div className="absolute bottom-0 left-0 w-100 h-100 bg-[#00683D]/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3" />

                    {/* Ikon dengan gaya frosted-glass yang clean */}
                    <div className="w-16 h-16 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 relative z-10">
                        <MessageSquareText size={32} className="text-[#B99150]" />
                    </div>

                    {/* Teks tanpa gradien norak, menggunakan warna Muted Gold solid */}
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 relative z-10">
                        Siap Mewujudkan <br />
                        <span className="text-[#B99150]">Website Impian Anda?</span>
                    </h2>

                    <p className="text-[#F1F2EF]/70 text-base md:text-lg max-w-2xl mb-10 relative z-10 font-medium leading-relaxed">
                        Mari diskusikan ide Anda bersama tim AEKONEZT. Kami siap membantu merancang dan membangun solusi digital terbaik untuk mendongkrak bisnis Anda ke level selanjutnya.
                    </p>

                    {/* Tombol putih bersih yang berubah menjadi Gold saat di-hover */}
                    <Link
                        href="/contact"
                        className="group flex items-center gap-2 px-8 py-4 bg-white text-[#1D2B3D] text-base font-bold rounded-full hover:bg-[#B99150] hover:text-white transition-all duration-300 shadow-lg transform hover:-translate-y-1 relative z-10"
                    >
                        Konsultasi Gratis Sekarang
                        <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                    </Link>

                </motion.div>
            </div>
        </section>
    );
}