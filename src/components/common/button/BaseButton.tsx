// src/components/Button/BaseButton.tsx

import React from "react";

interface BaseButtonProps {
  href: string;
  className?: string;
  icon?: string;
  iconStyles?: string;
  text: string;
  target?: string;
}

const BaseButton: React.FC<BaseButtonProps> = ({
  href,
  className = "",
  icon,
  iconStyles,
  text,
  target = "blank",
}) => {
  return (
    <div className="button-wrapper">
      <a
        href={href}
        className={className}
        target={target}
        rel="noopener noreferrer"
      >
        {icon ? <i className={`${icon} ${iconStyles} me-2`} /> : null} {text}
      </a>
    </div>
  );
};

export default BaseButton;
