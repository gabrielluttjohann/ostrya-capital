// Overlay.tsx
import React from "react";
import styles from "@/components/common/overlay/Overlay.module.css";

interface OverlayProps {
  backgroundColor?: string;
  opacity?: number;
}

const Overlay: React.FC<OverlayProps> = ({
  backgroundColor = "rgba(1, 50, 32, 0.7)",
  opacity = 0.7,
}) => {
  return (
    <div
      className={styles.overlaySection}
      style={{
        backgroundColor,
        opacity,
        position: "absolute", // Ensure absolute positioning
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    ></div>
  );
};

export default Overlay;
