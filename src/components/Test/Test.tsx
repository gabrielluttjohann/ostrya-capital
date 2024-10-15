import React, { useState, useEffect } from "react";
import styles from "./Test.module.css";
import Image from "next/image";
import { HERO_IMAGE } from "@/constants/images.c";

const Parallax: React.FC = () => {
  const useScrollY = (): number => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return scrollY;
  };

  const scrollY = useScrollY();

  return (
    <div>
      <div className={styles.parallaxContainer}>
        <Image
          alt=""
          src={HERO_IMAGE}
          className={styles.parallaxBg}
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />

        <div className={styles.parallaxContent}>
          <h1>Welcome to the Parallax Effect</h1>
          <p>This is a simple example of a parallax effect in React.js</p>
        </div>
      </div>
      <div style={{ height: "18000px" }}></div>
    </div>
  );
};

export default Parallax;
