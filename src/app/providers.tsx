"use client";

import { SessionProvider } from "next-auth/react";
import { I18nextProvider } from "react-i18next";
import { ChatBotProvider } from "@/components/providers/ChatBotProvider";
import i18n from "@/lib/i18n-preload";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <I18nextProvider i18n={i18n}>
        <ChatBotProvider>
          {children}
        </ChatBotProvider>
      </I18nextProvider>
    </SessionProvider>
  );
}