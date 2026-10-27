import React from 'react';

type IconProps = {
  size?: number;
  className?: string;
};

export const ArrowDown: React.FC<IconProps> = ({ size = 18, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 4V20" />
    <path d="M6 14L12 20L18 14" />
  </svg>
);
