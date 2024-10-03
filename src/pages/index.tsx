import React from "react";
import Header from "@/components/Header/Header";
import Services from "@/components/Services/Services";
import About from "@/components/About/About";
import Partners from "@/components/Partners/Partners";
import Reestructure from "@/components/Reestructure/Reestructure";
import MeA from "@/components/Mea/MeA";
import Recuperate from "@/components/Recuperate/Recuperate";
import Solutions from "@/components/Solutions/Solutions";
import ContactForm from "@/components/ContactForm/ContactForm";
import Evaluation from "@/components/Evaluation/Evaluation";
import Strategy from "@/components/Strategy/Strategy";
import Analysis from "@/components/Analysis/Analysis";

const index: React.FC = () => {
  return (
    <>
      <Header />
      <Reestructure />
      <Evaluation />
      <MeA />
      <Solutions />
      {/* <Recuperate /> */}
      {/* <Services /> */}
      {/* <Strategy /> */}
      {/* <Analysis /> */}
      {/* <ContactForm /> */}
      {/* <About /> */}
      {/* <Partners /> */}
    </>
  );
};

export default index;
