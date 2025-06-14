import BlogsSection from "@/components/(common)/(home-page)/BlogsSection";
import CallToActionSection from "@/components/(common)/(home-page)/CallToActionSection";
import ClientsSection from "@/components/(common)/(home-page)/ClientsSection";
import FAQSection from "@/components/(common)/(home-page)/FAQSection";
import FeaturesSection from "@/components/(common)/(home-page)/FeaturesSection";
import HeroSection from "@/components/(common)/(home-page)/HeroSection";
import ProjectsSection from "@/components/(common)/(home-page)/ProjectsSection";
import QuickContactSection from "@/components/(common)/(home-page)/QuickContactSection";
import ServicesSection from "@/components/(common)/(home-page)/ServicesSection";
import TestimonialsSection from "@/components/(common)/(home-page)/TestimonialsSection";
import LeadershipsSection from "@/components/partials/Sections/LeadershipsSection";

const HomePage = () => {
  return (
    <main className="scroll-smooth">
      <HeroSection />
      <QuickContactSection />
      <ServicesSection />
      <LeadershipsSection />
      <FeaturesSection />
      <ProjectsSection />
      <BlogsSection />
      <TestimonialsSection />
      <ClientsSection />
      <CallToActionSection />
      <FAQSection />
    </main>
  );
};

export default HomePage;
