"use client";

import { SessionProvider } from "next-auth/react";
import { HydrationErrorFix } from "@/hooks/useHydrationErrorFix";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  return (
    <HydrationErrorFix>
      <SessionProvider>{children}</SessionProvider>
    </HydrationErrorFix>
  );
}
