import React from "react";
import { HERO_IMAGE } from "@/constants/images.c";
import ImageScreen from "@/layouts/ImageScreen/ImageScreen";
import SplitScreen from "@/layouts/SplitScreen/SplitScreen";

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
    paragraph: "Conheça as nossas soluções financeiras",
  };
  return (
    <>
      <ImageScreen
        src={HERO_IMAGE}
        alt=""
        isPriority
        addOverlay
        addParallax
      >
        <SplitScreen colSizes={[12, 0]} showColumns={[true, true]}>
          <RenderHeroContent
            title={content.title}
            paragraph={content.paragraph}
          />
          <div></div>
        </SplitScreen>
      </ImageScreen>
    </>
  );
};

const Hero: React.FC = () => <HeroSection />;

export default Hero;
