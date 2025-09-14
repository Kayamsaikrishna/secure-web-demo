"use client";

import React, { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

/**
 * Custom input component that handles browser extension interference
 * and hydration issues gracefully
 */
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    const baseClasses = "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 disabled:cursor-not-allowed disabled:opacity-50";
    const errorClasses = error ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "";
    const finalClasses = `${baseClasses} ${errorClasses} ${className || ""}`.trim();

    return (
      <div className="w-full">
        <input
          type={type}
          className={finalClasses}
          ref={ref}
          suppressHydrationWarning
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-red-600" suppressHydrationWarning>
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };