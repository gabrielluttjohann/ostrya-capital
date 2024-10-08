import React from "react";
import { meaData as data } from "@/data/meaData";
import BackgroundImage from "@/components/common/background/BackgroundImage";
import GridColumn from "@/Layout/ColumnsLayout/GridLayout"; // Importando o GridColumn para gerenciar colunas
import { SectionSpace } from "@/Layout/SectionSpace";
import { Little, H2 } from "@/Layout/TitleLayout";
import CTAButton from "@/components/common/button/CTAButton/CTAButton";
import Paragraph from "@/Layout/ParagraphLayout";

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
  const { image, content, cta } = data;

  return (
    <>
      <SectionSpace>
        <BackgroundImage imageSrc={image.src} alt={image.alt} isPriority>
          <div className="row align-items-center justify-content-center">
            <GridColumn sizeLg={6} sizeMd={12} hasBackgroundImage>
              <MeaContent
                littleTitle={content.littleTitle}
                title={content.title}
                paragraphs={content.paragraphs}
                buttonText={cta.text}
                buttonLink={cta.link}
              />
            </GridColumn>
            <GridColumn sizeLg={6} sizeMd={12} children />
          </div>
        </BackgroundImage>
      </SectionSpace>
    </>
  );
};

export default Mea;
