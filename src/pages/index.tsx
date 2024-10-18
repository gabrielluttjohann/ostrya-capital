import Header from "@/components/sections/Header/Header";
import Footer from "@/components/sections/Footer/Footer";
import Hero from "@/components/sections/Hero/Hero";
import Mea from "@/components/sections/Support/Support";
import Reestructure from "@/components/sections/Reestructure/Reestructure";
import Strategy from "@/components/sections/Strategy/Strategy";
import Credit from "@/components/sections/Credit/Credit";
import Evaluation from "@/components/sections/Evaluation/Evaluation";
import Assistance from "@/components/sections/Assistance/Assistance";
import CTA from "@/components/sections/CTA/CTA";
import ContactForm from "@/components/sections/ContactForm/ContactForm";
import Section from "@/components/sections/Section/Section";

const Index: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <Assistance />
      <Section />
      {/* <Credit /> */}
      <Reestructure />
      <CTA />
      <Mea />
      {/* <Evaluation /> */}
      <Strategy />
      {/* <Analysis /> */}
      <ContactForm />
      <Footer />
    </>
  );
};

export default Index;
