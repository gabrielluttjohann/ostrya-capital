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
import ParallaxEffect from "@/components/effects/Parallax/Parallax";
import { HERO_IMAGE } from "@/constants/images.c";
// import { HERO_IMAGE, MEA_IMAGE } from "@/constants/images.c";
// const heroImage = require("/assets/img/hero/hero.png");
import hero from "../assets/img/hero/hero.jpg";

const Index: React.FC = () => {
  return (
    <>
      {/* <ParallaxEffect imageUrl={hero} minHeight={500}>
        <div>
          <p>hello</p>
        </div>
      </ParallaxEffect> */}

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
