import Hero from "@/components/Hero";
import Carousel from "@/components/Carousel";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Carousel />
      <EducationSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
