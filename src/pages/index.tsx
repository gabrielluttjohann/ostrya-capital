import React from "react";
import Header from "@/components/sections/Header/Header";
import Services from "@/components/sections/Services/Services";
import About from "@/components/sections/About/About";
import Reestructure from "@/components/sections/Reestructure/Reestructure";

import MeA from "@/components/sections/Mea/MeA";
import { meaData } from "@/data/meaData";

// import Solutions from "@/components/Solutions/Solutions";
import ContactForm from "@/components/sections/ContactForm/ContactForm";
import Evaluation from "@/components/sections/Evaluation/Evaluation";
import Strategy from "@/components/sections/Strategy/Strategy";
import Analysis from "@/components/sections/Analysis/Analysis";
import Credit from "@/components/sections/Credit/Credit";
import Hero from "@/components/sections/Hero/Hero";
import Help from "@/components/sections/Help/Help";

const index: React.FC = () => {
  return (
    <>
      <Hero />
      {/* <Header /> */}
      {/* <Services /> */}
      <About />
      
      {/* <Credit /> need to be updated: Lateral bar*/}
      <Help />
      <ContactForm />
      {/* <Solutions /> */}
      <Reestructure />
      <Evaluation />
      <Strategy />
      <MeA />

      <Analysis />
    </>
  );
};

export default index;
