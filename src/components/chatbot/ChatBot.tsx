"use client";

import { useState, useRef, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import { useChatBot } from "@/components/providers/ChatBotProvider";
import { 
  ChatBubbleLeftRightIcon, 
  XMarkIcon, 
  PaperAirplaneIcon,
  UserIcon,
  BuildingOfficeIcon,
  ArrowRightIcon,
  InformationCircleIcon,
  LightBulbIcon,
  CurrencyRupeeIcon,
  AcademicCapIcon,
  HeartIcon,
  TruckIcon,
  BriefcaseIcon
} from "@heroicons/react/24/outline";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
  suggestions?: string[];
}

const initialMessages: Message[] = [
  {
    id: "1",
    text: "Hello! I'm your Fin-Agentix assistant. How can I help you today?",
    sender: "bot",
    timestamp: new Date(),
    suggestions: [
      "How do I apply for a loan?",
      "What documents are required for KYC?",
      "Show me loan options",
      "Check my profile"
    ]
  },
];

// Quick action buttons for common tasks
const quickActions = [
  { 
    id: "loans", 
    label: "Loan Options", 
    icon: CurrencyRupeeIcon,
    keywords: ["loan", "apply", "options"]
  },
  { 
    id: "kyc", 
    label: "KYC Process", 
    icon: InformationCircleIcon,
    keywords: ["kyc", "document", "verification"]
  },
  { 
    id: "education", 
    label: "Education Loans", 
    icon: AcademicCapIcon,
    keywords: ["education", "university", "college"]
  },
  { 
    id: "healthcare", 
    label: "Healthcare Loans", 
    icon: HeartIcon,
    keywords: ["healthcare", "medical", "hospital"]
  },
  { 
    id: "vehicle", 
    label: "Vehicle Loans", 
    icon: TruckIcon,
    keywords: ["vehicle", "car", "bike"]
  },
  { 
    id: "business", 
    label: "Business Loans", 
    icon: BriefcaseIcon,
    keywords: ["business", "enterprise", "company"]
  }
];

export default function ChatBot() {
  const { data: session } = useSession();
  const { t } = useTranslation();
  const router = useRouter();
  const { isChatBotOpen, toggleChatBot } = useChatBot();
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  // Scroll to bottom of chat
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Reset messages when chat is closed and reopened
  useEffect(() => {
    if (isChatBotOpen) {
      setMessages(initialMessages);
    }
  }, [isChatBotOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = async (messageText?: string) => {
    const textToSend = messageText || inputValue;
    if (textToSend.trim() === "") return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: textToSend,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    
    if (!messageText) {
      setInputValue("");
    }

    // Get bot response
    setIsLoading(true);
    try {
      const response = await fetch("/api/chatbot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: textToSend }),
      });

      const data = await response.json();
      
      if (response.ok) {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: data.response,
          sender: "bot",
          timestamp: new Date(),
          suggestions: data.suggestions
        };
        
        setMessages((prev) => [...prev, botMessage]);
      } else {
        throw new Error(data.error || "Failed to get response");
      }
    } catch (error) {
      console.error("Chatbot error:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Sorry, I'm having trouble responding right now. Please try again later.",
        sender: "bot",
        timestamp: new Date(),
        suggestions: [
          "Show me loan options",
          "How do I apply for a loan?",
          "What documents are required?"
        ]
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion);
  };

  const handleQuickActionClick = (keywords: string[]) => {
    // Combine keywords into a natural language query
    const query = keywords.join(" ");
    handleSendMessage(query);
  };

  const handleNavigation = (path: string) => {
    router.push(path);
    toggleChatBot();
  };

  if (!isChatBotOpen) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-white rounded-lg shadow-xl border border-gray-200 w-80 h-[32rem] flex flex-col">
        {/* Chat Header */}
        <div className="bg-blue-600 text-white p-4 rounded-t-lg flex items-center justify-between">
          <div className="flex items-center">
            <ChatBubbleLeftRightIcon className="h-5 w-5 mr-2" />
            <h3 className="font-semibold">Fin-Agentix Assistant</h3>
          </div>
          <button 
            onClick={toggleChatBot}
            className="text-white hover:text-gray-200 focus:outline-none"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>

        {/* Quick Actions */}
        <div className="p-3 border-b border-gray-200 bg-gray-50">
          <div className="flex items-center mb-2">
            <LightBulbIcon className="h-4 w-4 text-yellow-500 mr-1" />
            <span className="text-xs font-medium text-gray-700">Quick Actions</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {quickActions.map((action) => (
              <button
                key={action.id}
                onClick={() => handleQuickActionClick(action.keywords)}
                className="flex items-center text-xs bg-white border border-gray-300 rounded-full px-2 py-1 hover:bg-blue-50 hover:border-blue-300 transition-colors"
                disabled={isLoading}
              >
                <action.icon className="h-3 w-3 mr-1 text-blue-500" />
                {action.label}
              </button>
            ))}
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
          {messages.map((message) => (
            <div key={message.id} className="mb-4">
              <div
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {message.sender === "bot" && (
                  <div className="flex-shrink-0 mr-2">
                    <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
                      <BuildingOfficeIcon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                )}
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    message.sender === "user"
                      ? "bg-blue-500 text-white rounded-br-none"
                      : "bg-white text-gray-800 border border-gray-200 rounded-bl-none"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className={`text-xs mt-1 ${message.sender === "user" ? "text-blue-100" : "text-gray-500"}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
                {message.sender === "user" && (
                  <div className="flex-shrink-0 ml-2">
                    <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
                      <UserIcon className="h-5 w-5 text-gray-600" />
                    </div>
                  </div>
                )}
              </div>
              
              {/* Suggestions */}
              {message.suggestions && message.sender === "bot" && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {message.suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full hover:bg-blue-200 transition-colors"
                      disabled={isLoading}
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          
          {/* Loading indicator */}
          {isLoading && (
            <div className="flex justify-start mb-4">
              <div className="flex-shrink-0 mr-2">
                <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
                  <BuildingOfficeIcon className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="bg-white text-gray-800 border border-gray-200 rounded-lg rounded-bl-none px-4 py-2">
                <div className="flex space-x-1">
                  <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Chat Input */}
        <div className="border-t border-gray-200 p-3 bg-white">
          <div className="flex">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 border border-gray-300 rounded-l-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              disabled={isLoading}
            />
            <button
              onClick={() => handleSendMessage()}
              disabled={inputValue.trim() === "" || isLoading}
              className={`bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                inputValue.trim() === "" || isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <PaperAirplaneIcon className="h-5 w-5" />
            </button>
          </div>
          <div className="mt-2 text-xs text-gray-500 text-center">
            Fin-Agentix AI Assistant v1.0
          </div>
        </div>
      </div>
    </div>
  );
}