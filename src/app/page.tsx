import Hero from "@/components/Hero";
import Carousel from "@/components/Carousel";
import EducationSection from "@/components/EducationSection";
import Footer from "@/components/Footer";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Carousel />
      <EducationSection />
      <CertificationsSection />
      <ProjectsSection />
      <Footer />
    </>
  );
}
