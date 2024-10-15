import { useState, useEffect } from "react";

export const useNavbarScroll = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const savedState =
      typeof window !== undefined ? localStorage.getItem("isFixed") : null;

    if (savedState) {
      setIsFixed(JSON.parse(savedState));
    }

    const handleScroll = () => {
      const headerHeight =
        document.querySelector(".header-top")?.clientHeight || 0;
      const isScrolled = window.scrollY > headerHeight;

      setIsFixed(isScrolled);
      localStorage.setItem("isFixed", JSON.stringify(isScrolled));
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isFixed;
};
