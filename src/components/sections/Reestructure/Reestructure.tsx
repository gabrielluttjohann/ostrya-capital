import React from "react";
import Image from "next/image";
import CollisionButton from "../../common/button/CollisionButton/CollisionButton";
import SplitScreen from "@/Layout/SplitScreen";
import { reestructureData } from "@/data/reestructureData";

const SectionImage: React.FC = () => (
  <div style={{ minHeight: "500px", height: "100%" }}>
    <div className="position-relative h-100">
      <Image
        className="position-absolute w-100 h-100 rounded"
        src={reestructureData.image.src}
        width={500}
        height={500}
        alt={reestructureData.image.alt}
        onError={(e) =>
          (e.currentTarget.src = reestructureData.image.placeholder)
        }
        style={{ objectFit: "cover", height: "100%" }}
      />
    </div>
  </div>
);

const FeatureItem: React.FC<{ text: string }> = ({ text }) => (
  <div className="d-flex py-3">
    <div>
      <i className="fa fa-check text-golden me-3"></i>
    </div>
    <div>
      <span>{text}</span>
    </div>
  </div>
);

const Features: React.FC = () => (
  <div className="row g-0 mb-3">
    {reestructureData.features.map((feature, index) => (
      <div className="col-sm-6" key={index}>
        <FeatureItem text={feature} />
      </div>
    ))}
  </div>
);

const Descriptions: React.FC = () => (
  <>
    {reestructureData.descriptions.map((description, index) => (
      <p key={index} className="mb-4">
        {description}
      </p>
    ))}
  </>
);

const Titles: React.FC = () => (
  <>
    <h5 className="fw-bold text-golden text-uppercase">
      {reestructureData.titles.littleTitle}
    </h5>
    <h2 className="mb-3 display-5">{reestructureData.titles.title}</h2>
  </>
);

const SectionContent: React.FC = () => (
  <>
    <Titles />
    <Descriptions />
    <Features />
    <CollisionButton
      href={reestructureData.button.href}
      buttonStyles={reestructureData.button.buttonStyles}
      text={reestructureData.button.text}
    />
  </>
);

const ReestructureSection: React.FC = () => (
  <SplitScreen colSizes={[7, 5]} showColumns={[true, true]}>
    <SectionContent />
    <SectionImage />
  </SplitScreen>
);

const Reestructure: React.FC = () => <ReestructureSection />;

export default Reestructure;
