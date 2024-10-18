const mouseEffect = (): void => {
  const mouseCursor = (): void => {
    const cursorInner = document.querySelector<HTMLElement>(".cursor-inner");
    const cursorOuter = document.querySelector<HTMLElement>(".cursor-outer");

    if (!cursorInner || !cursorOuter) return;

    let posX = 0, posY = 0;
    let isHovering = false;

    const onMouseMove = (event: MouseEvent): void => {
      if (!isHovering) {
        cursorOuter.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
      }
      cursorInner.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
      posX = event.clientX;
      posY = event.clientY;
    };

    const addHoverEffect = (): void => {
      cursorInner.classList.add("cursor-hover");
      cursorOuter.classList.add("cursor-hover");
    };

    const removeHoverEffect = (): void => {
      cursorInner.classList.remove("cursor-hover");
      cursorOuter.classList.remove("cursor-hover");
    };

    const setupCursorPointerEvents = (): void => {
      const cursorPointer = document.querySelector<HTMLElement>(".cursor-pointer");
      if (cursorPointer) {
        cursorPointer.addEventListener("mouseenter", addHoverEffect);
        cursorPointer.addEventListener("mouseleave", removeHoverEffect);
      }
    };

    const setupLinkHoverEvents = (): void => {
      const links = document.querySelectorAll<HTMLAnchorElement>("a");
      links.forEach((link) => {
        link.addEventListener("mouseenter", addHoverEffect);
        link.addEventListener("mouseleave", removeHoverEffect);
      });
    };

    window.addEventListener("mousemove", onMouseMove);
    setupCursorPointerEvents();
    setupLinkHoverEvents();

    cursorInner.style.visibility = "visible";
    cursorOuter.style.visibility = "visible";
  };

  mouseCursor();
};

export default mouseEffect;
