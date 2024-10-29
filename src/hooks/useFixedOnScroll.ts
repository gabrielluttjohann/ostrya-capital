import { useState, useEffect, RefObject } from "react";

const useFixedOnScroll = (
  topbarRef: RefObject<HTMLElement>,
  navbarRef: RefObject<HTMLElement>
): boolean => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const areRefsDefined = (refs: RefObject<HTMLElement>[]): boolean => {
      return refs.every(
        (ref) => ref.current !== null && ref.current !== undefined
      );
    };

    const getTopbarHeight = (ref: RefObject<HTMLElement>): number => {
      return ref.current?.clientHeight || 0;
    };

    const hasExceededTopbar = (
      scrollY: number,
      topbarHeight: number
    ): boolean => {
      return scrollY >= topbarHeight;
    };

    const handleScroll = () => {
      if (!areRefsDefined([topbarRef, navbarRef])) return;

      const scrollY = window.scrollY;
      const topbarHeight = getTopbarHeight(topbarRef);

      setIsFixed(hasExceededTopbar(scrollY, topbarHeight));
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [topbarRef, navbarRef]);

  return isFixed;
};

export default useFixedOnScroll;
