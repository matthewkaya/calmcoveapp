import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";

import { siteContent } from "@/lib/content";

import "./globals.css";

const bodyFont = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
});

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: siteContent.siteSettings.metadata.title,
  description: siteContent.siteSettings.metadata.description,
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bodyFont.variable} ${displayFont.variable} bg-[#fbf8f2] text-[#17313b] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

