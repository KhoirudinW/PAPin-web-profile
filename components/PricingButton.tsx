'use client';

import React from 'react';

interface PricingButtonProps {
  tierName: string;
  buttonText: string;
  variant?: 'desktop' | 'mobile';
}

const PricingButton: React.FC<PricingButtonProps> = ({ tierName, buttonText, variant = 'desktop' }) => {
  const handleClick = () => {
    window.location.href = 'https://app.papin.biz.id';
  };

  const desktopClasses = `w-full py-4 px-8 rounded-2xl font-bold transition-all duration-300 active:scale-95 ${
    tierName === 'Simpel'
      ? 'bg-white text-primary hover:shadow-xl border border-primary'
      : tierName === 'Gratis'
        ? 'bg-white/60 text-gray-700 hover:bg-primary/10 hover:text-primary border border-gray-200'
        : 'bg-primary text-white hover:bg-primary-hovered shadow-lg shadow-primary/20'
  }`;

  const mobileClasses = `w-full py-5 px-8 rounded-3xl font-bold text-lg transition-all active:scale-95 ${
    tierName === 'Simpel'
      ? 'bg-white text-primary shadow-[0_10px_30px_rgba(255,255,255,0.3)]'
      : 'bg-primary text-white shadow-xl shadow-primary/20'
  }`;

  return (
    <button
      className={variant === 'desktop' ? desktopClasses : mobileClasses}
      onClick={handleClick}
    >
      {buttonText}
    </button>
  );
};

export default PricingButton;
