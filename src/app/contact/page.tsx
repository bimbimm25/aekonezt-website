import { Metadata } from "next";
import ContactClient from "@/components/contact/ContactClient";

export const metadata: Metadata = {
    title: "Hubungi Kami | AEKONEZT Digital Studio",
    description: "Mulai proyek digital Anda bersama AEKONEZT. Hubungi kami untuk konsultasi gratis dan diskusikan kebutuhan website bisnis Anda.",
};

export default function ContactPage() {
    return (
        <div className="flex flex-col w-full bg-[#FAFAF7]">
            <ContactClient />
        </div>
    );
}