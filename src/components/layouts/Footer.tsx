"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

const InstagramIcon = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);
const GithubIcon = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);
const FacebookIcon = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);

export default function Footer() {
    const [currentYear, setCurrentYear] = useState(2026);

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="bg-brand-white border-t border-brand-gray pt-16 md:pt-24 pb-8">
            <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">

                {/* PERBAIKAN UTAMA: Menggunakan grid-cols-4 untuk membagi ruang secara proporsional */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

                    {/* Kolom 1: Brand Info */}
                    <div className="flex flex-col items-start lg:pr-6">
                        <Link href="/" className="mb-6">
                            <Image
                                src="/AekoNezt.png"
                                alt="AEKONEZT Logo"
                                width={160}
                                height={48}
                                className="w-auto h-10 md:h-12 object-contain"
                            />
                        </Link>
                        <p className="text-brand-navy/70 text-sm leading-relaxed mb-8 font-medium">
                            Nature-Inspired Premium Digital Studio. Kami merancang, mengembangkan, dan mengoptimalkan website untuk mendorong pertumbuhan bisnis Anda di era digital.
                        </p>
                        <div className="flex items-center gap-3">
                            <a href="https://instagram.com/bimm.zhr" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-brand-gray bg-white flex items-center justify-center text-brand-navy hover:bg-brand-forest hover:text-white hover:border-brand-forest transition-all shadow-sm">
                                <InstagramIcon size={18} />
                            </a>
                            <a href="https://github.com/bimbimm25" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-brand-gray bg-white flex items-center justify-center text-brand-navy hover:bg-brand-forest hover:text-white hover:border-brand-forest transition-all shadow-sm">
                                <GithubIcon size={18} />
                            </a>
                            <a href="https://facebook.com/bimm.zhr" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-brand-gray bg-white flex items-center justify-center text-brand-navy hover:bg-brand-forest hover:text-white hover:border-brand-forest transition-all shadow-sm">
                                <FacebookIcon size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Kolom 2: Navigasi */}
                    <div className="lg:pl-8">
                        <h4 className="text-brand-navy font-extrabold mb-6 uppercase tracking-widest text-xs">Navigasi Utama</h4>
                        <ul className="space-y-4">
                            <li><Link href="/" className="text-brand-navy/70 text-sm font-medium hover:text-brand-gold transition-colors">Home</Link></li>
                            <li><Link href="/services" className="text-brand-navy/70 text-sm font-medium hover:text-brand-gold transition-colors">Layanan Kami</Link></li>
                            <li><Link href="/portfolio" className="text-brand-navy/70 text-sm font-medium hover:text-brand-gold transition-colors">Portofolio Klien</Link></li>
                            <li><Link href="/about" className="text-brand-navy/70 text-sm font-medium hover:text-brand-gold transition-colors">Tentang AEKONEZT</Link></li>
                        </ul>
                    </div>

                    {/* Kolom 3: Layanan */}
                    <div>
                        <h4 className="text-brand-navy font-extrabold mb-6 uppercase tracking-widest text-xs">Layanan Spesialis</h4>
                        <ul className="space-y-4">
                            <li className="text-brand-navy/70 text-sm font-medium">Company Profile Website</li>
                            <li className="text-brand-navy/70 text-sm font-medium">Landing Page Development</li>
                            <li className="text-brand-navy/70 text-sm font-medium">E-Commerce System</li>
                            <li className="text-brand-navy/70 text-sm font-medium">UI/UX Design & Redesign</li>
                        </ul>
                    </div>

                    {/* Kolom 4: Kontak */}
                    <div>
                        <h4 className="text-brand-navy font-extrabold mb-6 uppercase tracking-widest text-xs">Hubungi Kami</h4>
                        <ul className="space-y-5">
                            <li className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-full bg-brand-gray/50 flex items-center justify-center shrink-0">
                                    <Mail size={14} className="text-brand-forest" />
                                </div>
                                <a href="mailto:bimaardiansyah2509@gmail.com" className="text-brand-navy/80 text-sm font-medium hover:text-brand-gold transition-colors pt-1.5 break-all">
                                    bimaardiansyah2509@gmail.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-full bg-brand-gray/50 flex items-center justify-center shrink-0">
                                    <Phone size={14} className="text-brand-forest" />
                                </div>
                                <span className="text-brand-navy/80 text-sm font-medium pt-1.5">+62 8XX XXXX XXXX</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-full bg-brand-gray/50 flex items-center justify-center shrink-0">
                                    <MapPin size={14} className="text-brand-forest" />
                                </div>
                                <span className="text-brand-navy/80 text-sm font-medium pt-1.5 leading-relaxed">
                                    Surabaya, Jawa Timur<br />Indonesia
                                </span>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar Footer */}
                <div className="border-t border-brand-gray pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-brand-navy/60 text-xs font-semibold uppercase tracking-wider">
                        &copy; {currentYear} AEKONEZT DIGITAL STUDIO.
                    </p>
                    <div className="flex items-center gap-6 text-xs font-semibold text-brand-navy/60 uppercase tracking-wider">
                        <Link href="/privacy" className="hover:text-brand-gold transition-colors">Privacy Policy</Link>
                        <span className="w-1 h-1 rounded-full bg-brand-gray/80"></span>
                        <Link href="/terms" className="hover:text-brand-gold transition-colors">Terms of Service</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}