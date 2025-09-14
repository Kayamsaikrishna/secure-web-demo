"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import logoImage from "@/assets/fin-agentix-logo.png";

interface LogoProps {
  size: 'sm' | 'md' | 'lg';
  className?: string;
}

const Logo = ({ size, className = "" }: LogoProps) => {
  const [showFallback, setShowFallback] = useState(false);
  
  const sizeClasses = {
    sm: { container: "w-10 h-10", image: 32, text: "text-xs" },
    md: { container: "w-12 h-12", image: 40, text: "text-sm" },
    lg: { container: "w-20 h-20", image: 64, text: "text-xl" }
  };

  const { container, image, text } = sizeClasses[size];

  // Try to load the logo directly with a timeout fallback
  useEffect(() => {
    // Since we have the logo imported, set showFallback to false
    setShowFallback(false);
  }, []);

  // Professional fallback design with your branding (circular design preference)
  if (showFallback) {
    return (
      <div className={`${container} rounded-full bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-lg flex items-center justify-center font-bold ${text} ${className} border-2 border-white ring-2 ring-blue-200`}>
        FA
      </div>
    );
  }

  // Try to use your actual logo
  return (
    <div className={`${container} rounded-full overflow-hidden bg-white p-1 shadow-lg flex items-center justify-center ${className}`}>
      <Image
        src={logoImage}
        alt="Fin-Agentix Logo"
        width={image}
        height={image}
        className="object-contain w-full h-full rounded-full"
        priority={size === 'sm'}
        onError={() => setShowFallback(true)}
      />
    </div>
  );
};

export default Logo;