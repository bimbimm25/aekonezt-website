import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import ScrollToTop from "@/components/layouts/ScrollToTop";

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "AEKONEZT | Premium Digital Web Studio",
  description: "Digital web development studio berfokus pada jasa pembuatan, pengembangan, dan redesign website premium.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${jakarta.className} min-h-screen flex flex-col`}>
        <ScrollToTop />
        <Navbar />
        {/* Main content agar selalu mengisi sisa ruang antara header & footer */}
        <main className="grow pt-20 md:pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}