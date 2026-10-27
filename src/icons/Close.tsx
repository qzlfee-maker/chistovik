import React from 'react';

type IconProps = {
  size?: number;
  className?: string;
};

export const Close: React.FC<IconProps> = ({ size = 22, className }) => (
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
    <path d="M18 6L6 18" />
    <path d="M6 6L18 18" />
  </svg>
);
