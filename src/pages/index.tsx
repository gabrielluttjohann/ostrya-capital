import Footer from "@/components/sections/Footer/Footer";
import Hero from "@/components/sections/Hero/Hero";
import Mea from "@/components/sections/Mea/MeA";
import Reestructure from "@/components/sections/Reestructure/Reestructure";
import StrategySection from "@/components/sections/Strategy/Strategy";
import Credit from "@/components/sections/Credit/Credit";
import Analysis from "@/components/sections/Analysis/Analysis";
import Evaluation from "@/components/sections/Evaluation/Evaluation";
import Assistance from "@/components/sections/Assistance/Assistance";
import Header from "@/components/sections/Header/Header";
import About from "@/components/sections/About/About";

const Index: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Assistance />
      <Credit />
      <Reestructure />
      <Mea />
      <Evaluation />
      <StrategySection />
      {/* <Analysis /> */}
      <Footer />
    </>
  );
};

export default Index;
