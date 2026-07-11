import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black font-sans text-white antialiased">{children}</body>
    </html>
  );
}
