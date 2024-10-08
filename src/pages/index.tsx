import React from "react";
import Header from "@/components/sections/Header/Header";
import About from "@/components/sections/About/About";
import Reestructure from "@/components/sections/Reestructure/Reestructure";
import MeA from "@/components/sections/Mea/MeA";
import ContactForm from "@/components/sections/ContactForm/ContactForm";
import Evaluation from "@/components/sections/Evaluation/Evaluation";
import Strategy from "@/components/sections/Strategy/Strategy";
import Analysis from "@/components/sections/Analysis/Analysis";
import Credit from "@/components/sections/Credit/Credit";
import Hero from "@/components/sections/Hero/Hero";
import Help from "@/components/sections/Assistance/Assistance";

const index: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Credit />
      <Help />
      <ContactForm />
      <Reestructure />
      <Evaluation />
      <Strategy />
      <MeA />
      <Analysis />
    </>
  );
};

export default index;
