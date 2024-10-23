import Header from "@/components/sections/Header/Header";
import Hero from "@/components/sections/Hero/Hero";
import CreditPF from "@/components/sections/CreditPF/CreditPF";
import Assistance from "@/components/sections/Assistance/Assistance";
import Section from "@/components/sections/Section/Section";
import Footer from "@/components/sections/Footer/Footer";
import CreditPJ from "@/components/sections/CreditPJ/CreditPJ";

const Index: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <Assistance />
      <CreditPF />
      <Section />
      <CreditPJ />
      {/* <Footer /> */}
    </>
  );
};

export default Index;
