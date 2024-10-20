import Header from "@/components/sections/Header/Header";
import Footer from "@/components/sections/Footer/Footer";
import Hero from "@/components/sections/Hero/Hero";
// import Mea from "@/components/sections/Support/Support";
// import Reestructure from "@/components/sections/Reestructure/Reestructure";
// import Strategy from "@/components/sections/Strategy/Strategy";
import Credit from "@/components/sections/Credit/Credit";
// import Evaluation from "@/components/sections/Evaluation/Evaluation";
import Assistance from "@/components/sections/Assistance/Assistance";
import CTA from "@/components/sections/CTA/CTA";
import ContactForm from "@/components/sections/ContactForm/ContactForm";
import Section from "@/components/sections/Section/Section";
import CreditPJ from "@/components/sections/CreditPJ/CreditPJ";
import Agro from "@/components/sections/Agro/Agro";
import Solutions from "@/components/sections/Solutions/Solutions";
import CTA2 from "@/components/sections/CTA2/CTA2";

const Index: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <Assistance />
      <Section />
      <CreditPJ />
      <Credit />
      {/* <Reestructure /> */}
      <CTA />
      <Agro />
      <Solutions />
      {/* <Mea /> */}
      {/* <Evaluation /> */}
      {/* <Strategy /> */}
      {/* <Analysis /> */}
      <CTA2 />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Index;
