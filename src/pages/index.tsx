import { useEffect } from "react";
import Header from "@/components/sections/Header/Header";
import Footer from "@/components/sections/Footer/Footer";
import Hero from "@/components/sections/Hero/Hero";
import Credit from "@/components/sections/Credit/Credit";
import Assistance from "@/components/sections/Assistance/Assistance";
import CTA from "@/components/sections/CTA/CTA";
import ContactForm from "@/components/sections/ContactForm/ContactForm";
import Section from "@/components/sections/Section/Section";
import CreditPJ from "@/components/sections/CreditPJ/CreditPJ";
import Agro from "@/components/sections/Agro/Agro";
import Solutions from "@/components/sections/Solutions/Solutions";
import CTA2 from "@/components/sections/CTA2/CTA2";

// Função para adicionar o efeito de revelação no scroll
const useScrollReveal = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal-on-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
};

const Index: React.FC = () => {
  useScrollReveal();

  return (
    <>
      <Header />
      <Hero />
      <div className="reveal-on-scroll">
        <Assistance />
      </div>
      <div className="reveal-on-scroll">
        <Section />
      </div>
      <div className="reveal-on-scroll">
        <CreditPJ />
      </div>
      <div className="reveal-on-scroll">
        <Credit />
      </div>
      <div className="reveal-on-scroll">
        <CTA />
      </div>
      <div className="reveal-on-scroll">
        <Agro />
      </div>
      <div className="reveal-on-scroll">
        <Solutions />
      </div>
      <div className="reveal-on-scroll">
        <CTA2 />
      </div>
      <div className="reveal-on-scroll">
        <ContactForm />
      </div>
      <Footer />
    </>
  );
};

export default Index;
