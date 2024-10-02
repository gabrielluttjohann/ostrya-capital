import React from "react";
import Header from "@/components/Header/Header";
import Services from "@/components/Services/Services";
import About from "@/components/About/About";
import Partners from "@/components/Partners/Partners";
// import Reestructure from "@/components/Reestructuring/Reestructure";
import MeA from "@/components/Mea/MeA";
import Recuperate from "@/components/Recuperate/Recuperate";

const index: React.FC = () => {
  return (
    <>
      <Header />
      <Services />
      {/* <Reestructure /> */}
      <MeA />
      <Recuperate />
      <About />
      <Partners />
    </>
  );
};

export default index;
