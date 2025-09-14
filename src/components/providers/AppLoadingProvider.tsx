"use client";

import { useState, useEffect, createContext, useContext } from "react";
import SplashScreen from "@/components/ui/SplashScreen";

interface AppLoadingContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

const AppLoadingContext = createContext<AppLoadingContextType>({
  isLoading: true,
  setIsLoading: () => {},
});

export const useAppLoading = () => {
  const context = useContext(AppLoadingContext);
  if (!context) {
    throw new Error('useAppLoading must be used within AppLoadingProvider');
  }
  return context;
};

interface AppLoadingProviderProps {
  children: React.ReactNode;
}

export default function AppLoadingProvider({ children }: AppLoadingProviderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [showSplash, setShowSplash] = useState(true);

  // Initialize app loading state
  useEffect(() => {
    // Check if this is the first visit or refresh
    const hasShownSplash = sessionStorage.getItem('fin-agentix-splash-shown');
    
    if (hasShownSplash) {
      // Skip splash screen if already shown in this session
      setIsLoading(false);
      setShowSplash(false);
    } else {
      // Show splash screen on first load
      setShowSplash(true);
    }
  }, []);

  const handleSplashComplete = () => {
    // Mark splash as shown for this session
    sessionStorage.setItem('fin-agentix-splash-shown', 'true');
    setIsLoading(false);
    setShowSplash(false);
  };

  return (
    <AppLoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      {!isLoading && children}
    </AppLoadingContext.Provider>
  );
}