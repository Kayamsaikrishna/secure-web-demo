import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/components/providers/AuthProvider";
import AppLoadingProvider from "@/components/providers/AppLoadingProvider";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Toaster } from "react-hot-toast";
import ErrorBoundary from "@/components/ui/ErrorBoundary";
import I18nProvider from "@/components/providers/I18nProvider";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fin-Agentix India | AI-Powered Digital Lending Platform",
  description: "India's leading AI-powered digital lending platform offering 12 comprehensive loan sectors. Quick approvals, competitive rates, and seamless digital experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={geist.className} suppressHydrationWarning>
        <ErrorBoundary>
          <I18nProvider>
            <AuthProvider>
              <AppLoadingProvider>
                <Navigation />
                <main className="min-h-screen bg-gray-100">
                  <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    {children}
                  </div>
                </main>
                <Footer />
                <Toaster />
              </AppLoadingProvider>
            </AuthProvider>
          </I18nProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}