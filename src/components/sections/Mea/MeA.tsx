import React from "react";
import { meaData as data } from "@/data/meaData";
import BackgroundImage from "@/components/common/background/BackgroundImage";
import TwoColumnLayout from "@/Layout/ColumnsLayout";
import TitleLayout from "@/Layout/TitleLayout";
import CTAButton from "@/components/common/button/CTAButton/CTAButton";
import ParagraphLayout from "@/Layout/ParagraphLayout";
import { SectionSpace } from "@/Layout/SectionSpace";

interface ParagraphProps {
  text: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ text }) => (
  <ParagraphLayout styles="text-white" text={text} />
);

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
    <TitleLayout type="littleTitle" title={littleTitle} />
    <TitleLayout type="h2" title={title} color="text-white" />
    {paragraphs.map((paragraph, index) => (
      <Paragraph key={index} text={paragraph} />
    ))}
    <CTAButton href={buttonLink} text={buttonText} />
  </>
);

const Mea: React.FC = () => {
  const { image, content, cta } = data;

  return (
    <>
      <SectionSpace>
        <BackgroundImage imageSrc={image.src} alt={image.alt} isPriority>
          <TwoColumnLayout
            hasBackgroundImage
            leftContent={
              <MeaContent
                littleTitle={content.littleTitle}
                title={content.title}
                paragraphs={content.paragraphs}
                buttonText={cta.text}
                buttonLink={cta.link}
              />
            }
            rightContent={<></>}
          />
        </BackgroundImage>
      </SectionSpace>
    </>
  );
};

export default Mea;
