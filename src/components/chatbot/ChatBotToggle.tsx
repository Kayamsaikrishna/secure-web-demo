"use client";

import { useChatBot } from "@/components/providers/ChatBotProvider";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";

export default function ChatBotToggle() {
  const { isChatBotOpen, toggleChatBot } = useChatBot();

  return (
    <button
      onClick={toggleChatBot}
      className="fixed bottom-6 right-6 bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 z-40"
      aria-label={isChatBotOpen ? "Close chat" : "Open chat"}
    >
      <ChatBubbleLeftRightIcon className="h-6 w-6" />
    </button>
  );
}