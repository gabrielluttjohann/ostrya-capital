import React from "react";
import SplitScreen from "@/layouts/SplitScreen/SplitScreen";
import styles from "./Hero.module.css";
import ParallaxEffect from "@/components/effects/Parallax/Parallax";
import HERO_IMAGE from "../../../assets/img/hero/hero.jpg";

const RenderHeroContent: React.FC<{ title: string; paragraph: string }> = ({
  title,
  paragraph,
}) => (
  <>
    <h1 className="fw-bold display-4 text-white">{title}</h1>
    <p className="text-white">{paragraph}</p>
  </>
);

const HeroSection: React.FC = () => {
  const content = {
    title: "Bem-Vindo à Ostrya Capital",
    paragraph: "Conheça as nossas soluções financeiras teste.",
  };
  return (
    <>
      <ParallaxEffect imageUrl={HERO_IMAGE} minHeight="80vh">
        <SplitScreen colSizes={[12, 0]} showColumns={[true, true]}>
          <RenderHeroContent
            title={content.title}
            paragraph={content.paragraph}
          />
          <div></div>
        </SplitScreen>
      </ParallaxEffect>
    </>
  );
};

const Hero: React.FC = () => <HeroSection />;

export default Hero;
