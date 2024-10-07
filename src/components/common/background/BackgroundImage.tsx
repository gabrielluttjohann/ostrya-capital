// BackgroundImage.tsx
import React from "react";
import Image from "next/image";
import Overlay from "../overlay/Overlay";
import styles from "./BackgroundImage.module.css";

interface BackgroundImageProps {
  imageSrc: string;
  alt: string;
  layout?: "fill" | "intrinsic" | "responsive" | "fixed";
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
  isPriority?: boolean;
  children?: React.ReactNode;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({
  imageSrc,
  alt,
  layout = "fill",
  objectFit = "cover",
  isPriority = false,
  children,
}) => (
  <div className={`position-relative ${styles.section}`}>
    <Image
      src={imageSrc}
      alt={alt}
      layout={layout}
      objectFit={objectFit}
      priority={isPriority}
      className="image"
    />
    <Overlay />

    <div className={`container ${styles.content}`}>{children}</div>
  </div>
);

export default BackgroundImage;
