"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import logoImage from "@/assets/fin-agentix-logo.png";

interface SplashScreenProps {
  onComplete: () => void;
}

const loadingSteps = [
  "Initializing Fin-Agentix Platform...",
  "Setting up secure connections...",
  "Loading user authentication...",
  "Preparing loan management system...",
  "Connecting to database...",
  "Finalizing AI-powered services...",
  "Application ready!"
];

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const totalDuration = 4000; // 4 seconds total
    const stepDuration = totalDuration / loadingSteps.length;
    
    const timer = setInterval(() => {
      setCurrentStep(prev => {
        const nextStep = prev + 1;
        setProgress((nextStep / loadingSteps.length) * 100);
        
        if (nextStep >= loadingSteps.length) {
          setIsComplete(true);
          setTimeout(() => {
            setShowSplash(false);
            setTimeout(() => {
              clearInterval(timer);
              onComplete();
            }, 500);
          }, 800);
          return prev;
        }
        return nextStep;
      });
    }, stepDuration);

    return () => clearInterval(timer);
  }, [onComplete]);

  if (!showSplash) return null;

  return (
    <>
      <div 
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 transition-opacity duration-500 ${
          isComplete ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          animation: 'fadeIn 0.5s ease-in-out'
        }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-12 translate-y-32"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-12 translate-y-64"></div>
        </div>

        {/* Logo Container */}
        <div 
          className="relative mb-12"
          style={{
            animation: 'logoScale 0.8s ease-out'
          }}
        >
          {/* Logo Circle Background - Following circular logo design preference */}
          <div className="w-32 h-32 rounded-full bg-white shadow-2xl flex items-center justify-center mb-6 mx-auto transition-transform duration-300 hover:scale-105">
            {/* Fin-Agentix Logo */}
            <div className="w-28 h-28 rounded-full overflow-hidden bg-white p-2 shadow-inner border-2 border-blue-500">
              <Image
                src={logoImage}
                alt="Fin-Agentix Logo"
                width={112}
                height={112}
                className="object-contain w-full h-full rounded-full"
                priority
              />
            </div>
          </div>

          {/* Company Name */}
          <div 
            className="text-center"
            style={{
              animation: 'slideUp 0.6s ease-out 0.3s both'
            }}
          >
            <h1 className="text-4xl font-bold text-white mb-2 tracking-wide">Fin-Agentix</h1>
            <p className="text-lg text-blue-200">AI-Powered Indian Lending Platform</p>
          </div>
        </div>

        {/* Loading Section */}
        <div 
          className="w-full max-w-md px-8"
          style={{
            animation: 'slideUp 0.6s ease-out 0.6s both'
          }}
        >
          {/* Progress Bar */}
          <div className="w-full bg-blue-800/30 rounded-full h-2 mb-6 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full shadow-lg transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Loading Text */}
          <div className="text-center min-h-[60px] flex items-center justify-center">
            <p 
              key={currentStep}
              className="text-blue-100 text-lg font-medium transition-all duration-300"
              style={{
                animation: 'textFade 0.3s ease-in-out'
              }}
            >
              {loadingSteps[currentStep] || loadingSteps[loadingSteps.length - 1]}
            </p>
          </div>

          {/* Loading Dots Animation */}
          <div className="flex justify-center space-x-1 mt-4">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2 h-2 bg-yellow-400 rounded-full"
                style={{
                  animation: `dotPulse 1s ease-in-out infinite ${i * 0.2}s`
                }}
              />
            ))}
          </div>

          {/* Progress Percentage */}
          <div 
            className="text-center mt-6"
            style={{
              animation: 'fadeIn 0.5s ease-out 1s both'
            }}
          >
            <span className="text-blue-300 text-sm font-medium">
              {Math.round(progress)}% Complete
            </span>
          </div>
        </div>

        {/* Version Info */}
        <div 
          className="absolute bottom-8 text-center"
          style={{
            animation: 'fadeIn 0.5s ease-out 1.2s both'
          }}
        >
          <p className="text-blue-300 text-sm">
            Version 1.0.0 • {new Date().getFullYear()} Fin-Agentix India
          </p>
          <p className="text-blue-400 text-xs mt-1">
            Secured by 256-bit SSL Encryption
          </p>
        </div>

        {/* Success Animation */}
        {isComplete && (
          <div 
            className="absolute inset-0 flex items-center justify-center"
            style={{
              animation: 'successScale 0.5s ease-out'
            }}
          >
            <div className="w-24 h-24 rounded-full bg-green-500 flex items-center justify-center shadow-2xl">
              <svg
                className="w-12 h-12 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style={{
                  animation: 'checkDraw 0.5s ease-out'
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
        )}
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes logoScale {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes textFade {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes dotPulse {
          0%, 100% {
            opacity: 0.7;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        @keyframes successScale {
          from {
            opacity: 0;
            transform: scale(0);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes checkDraw {
          from {
            stroke-dasharray: 0 100;
          }
          to {
            stroke-dasharray: 100 0;
          }
        }
      `}</style>
    </>
  );
}