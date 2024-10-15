import React, { useRef } from "react";
import Image from "next/image";
import Overlay from "@/components/common/overlay/Overlay";
import styles from "./ImageScreen.module.css";
import ParallaxEffect from "@/components/effects/Parallax/Parallax";

interface ImageScreenProps {
  src: string;
  alt: string;
  layout?: "fill" | "intrinsic" | "responsive" | "fixed";
  objectFit?: "contain" | "cover" | "none" | "scale-down";
  screenHeight?: string;
  children?: React.ReactNode;
  addOverlay?: boolean;
  isPriority?: boolean;
  addParallax?: boolean
}

const ImageScreen: React.FC<ImageScreenProps> = ({
  src,
  alt,
  layout = "fill",
  objectFit = "cover",
  screenHeight = "75vh",
  children,
  addOverlay,
  isPriority,
}) => {

  return (
    <div
      className={styles.parallaxContainer}
      style={{
        height: screenHeight,
        position: "relative",
        overflow: "hidden",
      }}
    >
     
     <ParallaxEffect alt="" imgHeight="vh-100" layout={""} objectFit={objectFit} src={src} />
      {addOverlay && (
        <div className={styles.overlay}>
          <Overlay />
        </div>
      )}

      <div className={styles.contentWrapper}>{children}</div>
    </div>
  );
};

export default ImageScreen;
