import React from 'react';

type IconProps = {
  size?: number;
  className?: string;
};

export const Telegram: React.FC<IconProps> = ({ size = 18, className }) => (
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
    <path d="M21.5 3.5L2.5 11L9.5 14L18.5 6.5L12 15.5L12.5 20.5L15.5 17L19.5 20L21.5 3.5Z" />
  </svg>
);
