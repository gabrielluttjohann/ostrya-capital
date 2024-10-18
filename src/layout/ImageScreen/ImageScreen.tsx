// ParallaxEffect.tsx

import React, { useRef, useEffect } from "react";
import styles from "./Parallax.module.css";
import Image from "next/image";

interface ParallaxEffectProps {
  layout: string;
  objectFit: string;
  src: string;
  alt: string;
  imgHeight?: string; // Torne imgHeight opcional
}

const ParallaxEffect: React.FC<ParallaxEffectProps> = ({
  layout,
  objectFit,
  src,
  alt,
  imgHeight = "100vh", // Valor padrão
}) => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current && imageRef.current) {
        const rect = parallaxRef.current.getBoundingClientRect();
        const imageOffset = window.pageYOffset + rect.top;
        const scrollY = window.pageYOffset;
        const offsetY = (scrollY - imageOffset) * 0.8;
        imageRef.current.style.transform = `translateY(${offsetY}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Atualização inicial
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={parallaxRef}
      className={styles.parallaxContainer}
      style={{ "--img-height": imgHeight } as React.CSSProperties} // Passa a altura como variável CSS
    >
      <Image
        ref={(node) => {
          if (node) {
            imageRef.current = node as HTMLImageElement;
          }
        }}
        src={src}
        alt={alt}
        layout="fill"
        objectFit={objectFit}
        className={styles.parallaxBg}
        priority
      />
    </div>
  );
};

export default ParallaxEffect;
