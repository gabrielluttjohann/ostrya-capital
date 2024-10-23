import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Slider01.module.css";
import "swiper/swiper-bundle.css"; // Certifique-se de incluir os estilos
import { Autoplay } from "swiper/modules";

interface Slider01Props {
  children: React.ReactNode;
  showControls?: boolean;
  autoPlayInterval?: number;
  breakpoints?: { [key: number]: { slidesPerView: number } };
}

const Slider01: React.FC<Slider01Props> = ({
  children,
  showControls = true,
  autoPlayInterval = 3000,
  breakpoints = {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 4,
    },
  },
}) => {
  const [isLittleScreen, setIsLittleScreen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLittleScreen(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`${styles.slider} ${isLittleScreen ? "container px-4" : ""}`}
    >
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        navigation={showControls}
        pagination={{ clickable: true }}
        autoplay={{
          delay: autoPlayInterval,
          disableOnInteraction: false,
        }}
        loop
        breakpoints={breakpoints}
      >
        {React.Children.map(children, (child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider01;
