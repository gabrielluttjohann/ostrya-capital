import React from "react";
import Image from "next/image";
import CollisionButton from "../../common/button/CollisionButton/CollisionButton";
import SplitScreen from "@/layouts/SplitScreen/SplitScreen";
import { reestructureData } from "@/data/reestructureData";

const RenderImage: React.FC = () => (
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

const RenderFeatureItem: React.FC<{ text: string }> = ({ text }) => (
  <div className="d-flex py-3">
    <div>
      <i className="fa fa-check text-golden me-3"></i>
    </div>
    <div>
      <span>{text}</span>
    </div>
  </div>
);

const RenderFeatures: React.FC = () => (
  <div className="row g-0 mb-3">
    {reestructureData.features.map((feature, index) => (
      <div className="col-sm-6" key={index}>
        <RenderFeatureItem text={feature} />
      </div>
    ))}
  </div>
);

const RenderDescriptions: React.FC = () => (
  <>
    {reestructureData.descriptions.map((description, index) => (
      <p key={index} className="mb-4">
        {description}
      </p>
    ))}
  </>
);

const RenderTitles: React.FC = () => (
  <>
    <h5 className="fw-bold text-golden text-uppercase">
      {reestructureData.titles.littleTitle}
    </h5>
    <h2 className="mb-3 display-5 fw-bold">{reestructureData.titles.title}</h2>
  </>
);

const RenderContent: React.FC = () => (
  <>
    <RenderTitles />
    <RenderDescriptions />
    <RenderFeatures />
    <div className="my-4">
      <CollisionButton
        href={reestructureData.button.href}
        buttonStyles={reestructureData.button.buttonStyles}
        text={reestructureData.button.text}
      />
    </div>
  </>
);

const ReestructureSection: React.FC = () => (
  <div className="mt-60">
    <SplitScreen colSizes={[7, 5]} showColumns={[true, true]}>
      <RenderContent />
      <RenderImage />
    </SplitScreen>
  </div>
);

const Reestructure: React.FC = () => <ReestructureSection />;

export default Reestructure;
