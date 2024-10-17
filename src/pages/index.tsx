import Footer from "@/components/sections/Footer/Footer";
import Hero from "@/components/sections/Hero/Hero";
import Mea from "@/components/sections/Mea/MeA";
import Reestructure from "@/components/sections/Reestructure/Reestructure";
import StrategySection from "@/components/sections/Strategy/Strategy";
import Credit from "@/components/sections/Credit/Credit";
import Evaluation from "@/components/sections/Evaluation/Evaluation";
import Assistance from "@/components/sections/Assistance/Assistance";
import Header from "@/components/sections/Header/Header";
import About from "@/components/sections/About/About";
import CTA from "@/components/sections/CTA/CTA"
import ContactForm from "@/components/sections/ContactForm/ContactForm";

const Index: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Assistance />
      <Credit />
      <Reestructure />
      <CTA />
      <Mea />
      <Evaluation />
      <StrategySection />
      {/* <Analysis /> */}
      <ContactForm />
      <Footer />
    </>
  );
};

export default Index;
