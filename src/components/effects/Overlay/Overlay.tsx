import styles from "@/components/effects/Overlay/Overlay.module.css";

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
      className={styles.overlay}
      style={{
        backgroundColor,
        opacity,
      }}
    ></div>
  );
};

export default Overlay;
