import { Metadata } from "next";
import PricingClient from "@/components/pricing/PricingClient";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
    title: "Paket & Harga | AEKONEZT Digital Studio",
    description: "Pilih paket pengembangan website yang sesuai dengan skala dan kebutuhan bisnis Anda. Transparan, profesional, dan berorientasi pada hasil.",
};

export default function PricingPage() {
    return (
        <div className="flex flex-col w-full bg-[#FAFAF7]">
            <PricingClient />

            {/* CTA tetap dipanggil untuk menjaring konversi */}
            <CTA />
        </div>
    );
}