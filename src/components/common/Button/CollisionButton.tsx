import React from "react";
import BaseButton from "./BaseButton";
import styles from "./CollisionButton.module.css";

interface CollisionButtonProps {
  href: string;
  buttonStyles?: string;
  icon?: string;
  iconStyles?: string;
  text: string;
}

const CollisionButton: React.FC<CollisionButtonProps> = ({
  href,
  buttonStyles,
  icon,
  iconStyles,
  text,
}) => {
  return (
    <BaseButton
      href={href}
      className={`${styles.collision} ${buttonStyles}`}
      icon={icon}
      iconStyles={iconStyles}
      text={text}
    />
  );
};

export default CollisionButton;
