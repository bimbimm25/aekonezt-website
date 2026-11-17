import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import WhyChooseUS from "@/components/home/WhyChooseUs"
import Proccess from "@/components/home/Process";
import CTA from "@/components/home/CTA";

export const metadata = {
  title: "AEKONEZT | Premium Digital Web Studio",
  description: "Digital web development studio berfokus pada jasa pembuatan, pengembangan, dan redesign website premium.",
};

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section (Yang sudah pixel-perfect) */}
      <Hero />
      
      {/* 2. Services Section */}
      <Services />

      {/* 3. Featured Projects Section */}
      <FeaturedProjects />

      { /* 4. Why Choose Us Section */}
      <WhyChooseUS />

      {/* 5. Process Section */}
      <Proccess />

      {/* 6. CTA Section */}
      <CTA />

    </div>
  );
}