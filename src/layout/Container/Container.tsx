import styles from "./Container.module.css";

const Container: React.FC<{
  children: React.ReactNode;
  addSpacing: boolean;
}> = ({ children, addSpacing = false }) => (
  <div className={styles.container}>
    <div className={addSpacing ? styles.spacing : ""}>{children}</div>
  </div>
);

export default Container;
