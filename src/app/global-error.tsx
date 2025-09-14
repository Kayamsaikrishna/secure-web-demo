'use client';
 
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  // Filter out hydration errors in production to prevent unnecessary error reporting
  if (
    typeof window !== 'undefined' && 
    (error.message.includes('hydration') || 
     error.message.includes('Hydration') ||
     error.message.includes('Text content does not match') ||
     error.message.includes('fdprocessedid'))
  ) {
    // Log hydration warning in development only
    if (process.env.NODE_ENV === 'development') {
      console.warn('Hydration mismatch detected (likely due to browser extensions):', error.message);
    }
    
    // Auto-recovery for hydration errors
    setTimeout(() => reset(), 100);
    
    return (
      <html>
        <body>
          <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg
                    className="h-8 w-8 text-yellow-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-gray-800">
                    Loading...
                  </h3>
                  <div className="mt-2 text-sm text-gray-500">
                    The page is loading. If this persists, please refresh the page.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
      </html>
    );
  }

  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg
                  className="h-8 w-8 text-red-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-gray-800">
                  Something went wrong!
                </h3>
                <div className="mt-2 text-sm text-gray-500">
                  {error.message || 'An unexpected error occurred'}
                </div>
                <div className="mt-4">
                  <button
                    className="bg-red-100 text-red-800 text-sm px-3 py-2 rounded-md hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                    onClick={() => reset()}
                  >
                    Try again
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}