"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

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
    const img = document.createElement('img');
    img.onload = () => {
      console.log('Logo loaded successfully');
      setShowFallback(false);
    };
    img.onerror = () => {
      console.log('Logo failed to load, using fallback');
      setShowFallback(true);
    };
    
    // Try PNG first, then JPEG
    img.src = '/fin-agentix-logo.png';
    
    // Fallback timeout
    const timeout = setTimeout(() => {
      setShowFallback(true);
    }, 2000);
    
    return () => clearTimeout(timeout);
  }, []);

  // Professional fallback design with your branding
  if (showFallback) {
    return (
      <div className={`${container} rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900 shadow-lg flex items-center justify-center font-bold ${text} ${className} border-2 border-white ring-2 ring-yellow-200`}>
        FA
      </div>
    );
  }

  // Try to use your actual logo
  return (
    <div className={`${container} rounded-full overflow-hidden bg-white p-1 shadow-lg flex items-center justify-center ${className}`}>
      <Image
        src="/fin-agentix-logo.png"
        alt="Fin-Agentix Logo"
        width={image}
        height={image}
        className="object-cover w-full h-full rounded-full"
        priority={size === 'sm'}
        onError={() => setShowFallback(true)}
      />
    </div>
  );
};

export default Logo;