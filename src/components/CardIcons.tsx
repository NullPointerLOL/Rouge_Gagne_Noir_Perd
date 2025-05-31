import React from 'react';

interface IconProps {
  className?: string;
}

export const ClubIcon: React.FC<IconProps> = ({ className = "" }) => (
  <div className={className}>
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C9.79 2 8 3.79 8 6C8 7.2 8.5 8.27 9.33 9H9C6.79 9 5 10.79 5 13C5 15.21 6.79 17 9 17H9.68C9.24 17.9 8.5 18.62 7.5 19L7 19.25V21.5L7.5 21.75C8.5 22.12 9.5 22 10.5 21.75C11.5 21.5 12.15 21 12.5 20.5L13 20H13.5L14 20.5C14.35 21 15 21.5 16 21.75C17 22 18 22.12 19 21.75L19.5 21.5V19.25L19 19C18 18.62 17.26 17.9 16.82 17H17C19.21 17 21 15.21 21 13C21 10.79 19.21 9 17 9H16.67C17.5 8.27 18 7.2 18 6C18 3.79 16.21 2 14 2H12Z" />
    </svg>
  </div>
);

export const DiamondIcon: React.FC<IconProps> = ({ className = "" }) => (
  <div className={className}>
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L5 12L12 22L19 12L12 2Z" />
    </svg>
  </div>
);