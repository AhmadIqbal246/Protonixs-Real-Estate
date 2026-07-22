import { ChatWidget } from "@/components/chat/chat-widget";
import type { Metadata } from "next";
import { Bodoni_Moda, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-bodoni",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Protonix Estate",
  description: "Where legacy meets location. A premier real estate agency for buyers, sellers, and investors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${bodoniModa.variable}`}>
      <body className="bg-ink font-sans text-text antialiased">
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
