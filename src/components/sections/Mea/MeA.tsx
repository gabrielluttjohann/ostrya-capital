import React from "react";
import { meaData as data } from "@/data/meaData";

import { Little, H2 } from "@/layouts/TitleLayout";
import CTAButton from "@/components/common/button/CTAButton/CTAButton";
import Paragraph from "@/layouts/ParagraphLayout";
import SplitScreen from "@/layouts/SplitScreen/SplitScreen";
import ParallaxEffect from "@/components/effects/Parallax/Parallax";
import MEA_IMAGE from "@/assets/img/mea/mea.png"

interface MeaContentProps {
  littleTitle: string;
  title: string;
  paragraphs: string[];
  buttonText: string;
  buttonLink: string;
}

const MeaContent: React.FC<MeaContentProps> = ({
  littleTitle,
  title,
  paragraphs,
  buttonText,
  buttonLink,
}) => (
  <>
    <Little title={littleTitle} />
    <H2 title={title} styles="text-white" />
    {paragraphs.map((paragraph, index) => (
      <Paragraph key={index} styles="text-white" text={paragraph} />
    ))}

    <CTAButton href={buttonLink} text={buttonText} />
  </>
);

const Mea: React.FC = () => {
  const { content, cta } = data;

  return (
    <>
      <ParallaxEffect imageUrl={MEA_IMAGE} minHeight="70vh">
        <SplitScreen showColumns={[true, true]} colSizes={[6, 6]}>
          <MeaContent
            littleTitle={content.littleTitle}
            title={content.title}
            paragraphs={content.paragraphs}
            buttonText={cta.text}
            buttonLink={cta.link}
          />
          <div></div>
        </SplitScreen>
      </ParallaxEffect>
    </>
  );
};

export default Mea;
