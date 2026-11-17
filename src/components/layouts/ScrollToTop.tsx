"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
    const pathname = usePathname();

    useEffect(() => {
        // Memaksa window untuk scroll ke titik 0,0 setiap kali URL (pathname) berubah
        // behavior: "auto" / "instant" mengabaikan efek scroll-smooth yang bikin lambat
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "auto",
        });
    }, [pathname]);

    // Komponen ini tidak menampilkan UI apa-apa (invisible)
    return null;
}