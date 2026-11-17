import { Metadata } from "next";
import ProcessClient from "@/components/process/ProcessClient";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
    title: "Proses Kerja | AEKONEZT Digital Studio",
    description: "Pelajari bagaimana tim AEKONEZT mengubah ide brilian Anda menjadi produk digital premium melalui alur kerja yang terstruktur dan transparan.",
};

export default function ProcessPage() {
    return (
        <div className="flex flex-col w-full bg-[#FAFAF7]">
            <ProcessClient />
            <CTA />
        </div>
    );
}