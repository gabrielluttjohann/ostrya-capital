import Header from "@/components/sections/Header/Header";
import Hero from "@/components/sections/Hero/Hero";
import CreditPF from "@/components/sections/CreditPF/CreditPF";
import Assistance from "@/components/sections/Assistance/Assistance";
import Section from "@/components/sections/Section/Section";
import Footer from "@/components/sections/Footer/Footer";
import CreditPJ from "@/components/sections/CreditPJ/CreditPJ";
import Contact from "@/components/sections/ContactForm/ContactForm";
import About from "@/components/sections/About/About";
import CTASection from "@/components/sections/CTA/CTA";
import CTA2 from "@/components/sections/CTA2/CTA2";
import Finance from "@/components/sections/About/Finance/Finance";

const Index: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Assistance />
      <CTA2 />
      <Section />
      <CreditPJ />
      <Contact />
      <Finance />
      <Footer />
    </>
  );
};

export default Index;
