import { Metadata } from "next";
import ServicesClient from "@/components/services/ServicesClient";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
    title: "Layanan Web Development | AEKONEZT Digital Studio",
    description: "Layanan pembuatan website premium, landing page, e-commerce, dan sistem web kustom untuk memaksimalkan potensi digital bisnis Anda.",
};

export default function ServicesPage() {
    return (
        <div className="flex flex-col w-full bg-[#FAFAF7]">
            <ServicesClient />

            {/* Menambahkan CTA di bawah halaman layanan agar klien bisa langsung konsultasi */}
            <CTA />
        </div>
    );
}