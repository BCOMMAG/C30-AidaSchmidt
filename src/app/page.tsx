import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutClinic } from "@/components/AboutClinic";
import { ProceduresSection } from "@/components/ProceduresSection";
import { ProfessionalSection } from "@/components/ProfessionalSection";
import { DifferentialsSection } from "@/components/DifferentialsSection";
import { FaqSection } from "@/components/FaqSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="relative w-full overflow-hidden">
        <Hero />
        <AboutClinic />
        <ProceduresSection />
        <ProfessionalSection />
        <DifferentialsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

