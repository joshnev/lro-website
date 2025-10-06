import Hero from "@/components/Hero";
import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <ContactForm />
        <Footer />
      </main>
    </>
  );
}
