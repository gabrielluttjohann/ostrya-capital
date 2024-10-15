import React from "react";
import { meaData as data } from "@/data/meaData";

import { Little, H2 } from "@/layouts/TitleLayout";
import CTAButton from "@/components/common/button/CTAButton/CTAButton";
import Paragraph from "@/layouts/ParagraphLayout";
import ImageScreen from "@/layouts/ImageScreen/ImageScreen";
import { HERO_IMAGE, MEA_IMAGE } from "@/constants/images.c";
import SplitScreen from "@/layouts/SplitScreen/SplitScreen";

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
      <ImageScreen
        src={MEA_IMAGE}
        alt=""
        // imgHeight="view-height-75"
        addOverlay
        addParallax
      >
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
      </ImageScreen>
    </>
  );
};

export default Mea;
