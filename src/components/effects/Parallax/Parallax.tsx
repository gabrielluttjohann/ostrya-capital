import React, { useState, useEffect } from "react";
import styles from "./Parallax.module.css";
import { StaticImageData } from "next/image";

interface ParallaxEffectProps {
  imageUrl: StaticImageData;
  minHeight?: string;
  children?: React.ReactNode;
}

const ParallaxEffect: React.FC<ParallaxEffectProps> = ({
  imageUrl,
  minHeight: minViewportHeight = "100vh",
  children,
}) => {
  return (
    <div
      className={styles.parallax}
      style={{
        backgroundImage: `url(${imageUrl.src})`,
        minHeight: `${minViewportHeight}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        WebkitBackgroundSize: "cover",
        MozBackgroundSize: "cover",
        OBackgroundSize: "cover",
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxEffect;
