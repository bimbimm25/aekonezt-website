import { Metadata } from "next";
import PortfolioClient from "@/components/portfolio/PortfolioClient";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
    title: "Portofolio | AEKONEZT Digital Studio",
    description: "Eksplorasi hasil karya dan proyek website premium dari AEKONEZT. Dari company profile hingga custom web application.",
};

export default function PortfolioPage() {
    return (
        <div className="flex flex-col w-full bg-brand-white">
            {/* Komponen interaktif Client-Side untuk daftar proyek */}
            <PortfolioClient />

            {/* Kita panggil ulang CTA di bagian bawah halaman ini agar klien langsung bisa menghubungi */}
            <CTA />
        </div>
    );
}