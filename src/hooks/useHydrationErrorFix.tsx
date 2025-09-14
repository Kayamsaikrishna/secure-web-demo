"use client";

import { useEffect } from 'react';

/**
 * Hook to handle hydration errors gracefully
 * This prevents the common fdprocessedid hydration errors caused by browser extensions
 */
export function useHydrationErrorFix() {
  useEffect(() => {
    // Suppress hydration warnings in development for known browser extension issues
    if (process.env.NODE_ENV === 'development') {
      const originalConsoleError = console.error;
      
      console.error = (...args) => {
        const message = args[0]?.toString() || '';
        
        // Filter out known hydration errors caused by browser extensions
        if (
          message.includes('fdprocessedid') ||
          message.includes('Extra attributes from the server') ||
          message.includes('A tree hydrated but some attributes') ||
          (message.includes('Warning: Prop') && message.includes('did not match'))
        ) {
          // Log a cleaner warning instead
          console.warn('🔧 Hydration mismatch detected (likely browser extension interference). This is typically harmless.');
          return;
        }
        
        // Log other errors normally
        originalConsoleError.apply(console, args);
      };

      // Cleanup
      return () => {
        console.error = originalConsoleError;
      };
    }
  }, []);

  useEffect(() => {
    // Handle runtime hydration errors
    const handleError = (event: ErrorEvent) => {
      const message = event.message || '';
      
      if (
        message.includes('hydration') ||
        message.includes('Hydration') ||
        message.includes('fdprocessedid')
      ) {
        // Prevent the error from bubbling up for known hydration issues
        event.preventDefault();
        event.stopPropagation();
        
        console.warn('🔧 Hydration error suppressed (browser extension conflict)');
        return false;
      }
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      const reason = event.reason?.message || event.reason?.toString() || '';
      
      if (
        reason.includes('hydration') ||
        reason.includes('Hydration') ||
        reason.includes('fdprocessedid')
      ) {
        // Prevent the error from bubbling up for known hydration issues
        event.preventDefault();
        console.warn('🔧 Hydration promise rejection suppressed (browser extension conflict)');
      }
    };

    // Add global error handlers
    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    // Cleanup
    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);
}

/**
 * Component that automatically applies hydration error fixes
 */
export function HydrationErrorFix({ children }: { children: React.ReactNode }) {
  useHydrationErrorFix();
  return <>{children}</>;
}