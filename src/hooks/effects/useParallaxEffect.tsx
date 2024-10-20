import React, { useRef, useState, useEffect } from "react";
import styles from "./Parallax.module.css";
import Image from "next/image";

const ParallaxEffect: React.FC<{
  layout: string;
  objectFit: string;
  src: string;
  alt: string;
}> = ({ layout, objectFit, src, alt }) => {
  const [offsetY, setOffsetY] = useState(0);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const rect = parallaxRef.current.getBoundingClientRect();
        const imageOffset = window.scrollY + rect.top; // Posição da imagem
        const scrollY = window.scrollY; // Valor absoluto do scroll
        setOffsetY((scrollY - imageOffset) * 0.5); // Parallax relativo à imagem
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={parallaxRef} className={styles.parallaxContainer}>
      <Image
        src={src}
        alt={alt}
        layout={layout}
        objectFit={objectFit}
        className={styles.parallaxBg}
        style={{ transform: `translateY(${offsetY}px)` }} // Deslocamento relativo
        priority
      />
    </div>
  );
};

export default ParallaxEffect;
