"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Process", href: "/process" },
    { name: "Pricing", href: "/pricing" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full px-4 pt-4 md:pt-6 transition-all duration-500 pointer-events-none">

            <motion.nav
                layout
                className={`pointer-events-auto flex items-center justify-between transition-all duration-500 ease-in-out ${isScrolled
                        // PERUBAHAN: Menghapus border dan sedikit mempertegas soft-shadow agar tetap terlihat melayang elegan
                        ? "w-full max-w-5xl bg-brand-white/90 backdrop-blur-xl shadow-[0_8px_30px_rgb(29,43,61,0.08)] rounded-full py-2.5 px-6 md:px-8"
                        : "w-full max-w-7xl bg-transparent py-4 px-2 md:px-4 rounded-none"
                    }`}
            >
                <Link href="/" className="relative z-50 flex items-center shrink-0">
                    <Image
                        src="/AekoNezt.png"
                        alt="AEKONEZT Logo"
                        width={160}
                        height={48}
                        className="w-auto h-8 md:h-10 object-contain"
                        priority
                    />
                </Link>

                <div className="hidden md:flex items-center gap-1 xl:gap-2">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`relative px-4 py-2 text-sm font-medium transition-colors hover:text-brand-gold rounded-full ${isActive ? "text-brand-navy" : "text-brand-navy/70"
                                    }`}
                            >
                                <span className="relative z-10">{link.name}</span>
                                {isActive && (
                                    <motion.div
                                        layoutId="nav-indicator"
                                        className="absolute bottom-1 left-4 right-4 h-0.5 bg-brand-gold rounded-full"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </div>

                <div className="hidden md:flex items-center shrink-0 ml-4">
                    <Link
                        href="/contact"
                        className="px-6 py-2.5 bg-brand-navy text-brand-white text-sm font-semibold rounded-full hover:bg-brand-forest transition-all duration-300 shadow-[0_4px_14px_0_rgb(29,43,61,0.2)] hover:shadow-[0_6px_20px_rgba(0,104,61,0.23)] transform hover:-translate-y-0.5"
                    >
                        Konsultasi
                    </Link>
                </div>

                <button
                    className="md:hidden relative z-50 p-2 text-brand-navy bg-brand-gray/40 rounded-full backdrop-blur-md"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    <motion.div animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}>
                        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </motion.div>
                </button>
            </motion.nav>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        // Menghapus border hitam di menu mobile juga agar konsisten
                        className="absolute top-24 left-4 right-4 bg-brand-white/95 backdrop-blur-2xl shadow-2xl rounded-2xl md:hidden overflow-hidden pointer-events-auto p-4 z-40"
                    >
                        <div className="flex flex-col space-y-1">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={`block text-base font-medium px-4 py-3 rounded-xl transition-colors ${isActive
                                                ? "bg-brand-gray/60 text-brand-gold font-semibold"
                                                : "text-brand-navy hover:bg-brand-gray/40"
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}
                            <div className="pt-4 mt-2">
                                <Link
                                    href="/contact"
                                    className="flex justify-center w-full px-6 py-3 bg-brand-navy text-brand-white font-semibold rounded-xl hover:bg-brand-forest transition-colors shadow-sm"
                                >
                                    Konsultasi Sekarang
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}