import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Toaster } from "react-hot-toast";
import ChatBot from "@/components/chatbot/ChatBot";
import ChatBotToggle from "@/components/chatbot/ChatBotToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fin-Agentix India | AI-Powered Digital Lending Platform",
  description: "India's leading AI-powered digital lending platform offering 12 comprehensive loan sectors. Quick approvals, competitive rates, and seamless digital experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Navigation />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster position="top-right" />
          <ChatBotToggle />
          <ChatBot />
        </Providers>
      </body>
    </html>
  );
}