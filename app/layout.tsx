import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import ScrollProgress from "@/components/layout/ScrollProgress";
import ThemeProvider from "@/components/providers/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-linda.vercel.app"),

  title: {
    default: "Ni Kadek Linda Aryani",
    template: "%s | Ni Kadek Linda Aryani",
  },

  description:
    "Information Systems Student at ITB STIKOM Bali specializing in Cloud Computing, Web Development, and Cybersecurity.",

  keywords: [
    "Linda Aryani",
    "Portfolio",
    "Next.js",
    "Cloud Computing",
    "Cybersecurity",
    "Web Development",
    "ITB STIKOM Bali",
  ],

  authors: [
    {
      name: "Ni Kadek Linda Aryani",
    },
  ],

  creator: "Ni Kadek Linda Aryani",

  openGraph: {
    title: "Ni Kadek Linda Aryani",

    description:
      "Personal Portfolio Website",

    url: "https://portfolio-linda.vercel.app",

    siteName: "Linda Portfolio",

    locale: "en_US",

    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>

      <body
  className={`${geistSans.variable} ${geistMono.variable} antialiased`}
>

  <ThemeProvider>

    <ScrollProgress />

    {children}

  </ThemeProvider>

</body>

    </html>
  );
}