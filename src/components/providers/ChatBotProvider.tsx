"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ChatBotContextType {
  isChatBotOpen: boolean;
  toggleChatBot: () => void;
  closeChatBot: () => void;
}

const ChatBotContext = createContext<ChatBotContextType | undefined>(undefined);

export function ChatBotProvider({ children }: { children: ReactNode }) {
  const [isChatBotOpen, setIsChatBotOpen] = useState(false);

  const toggleChatBot = () => {
    setIsChatBotOpen(!isChatBotOpen);
  };

  const closeChatBot = () => {
    setIsChatBotOpen(false);
  };

  return (
    <ChatBotContext.Provider value={{ isChatBotOpen, toggleChatBot, closeChatBot }}>
      {children}
    </ChatBotContext.Provider>
  );
}

export function useChatBot() {
  const context = useContext(ChatBotContext);
  if (context === undefined) {
    throw new Error("useChatBot must be used within a ChatBotProvider");
  }
  return context;
}