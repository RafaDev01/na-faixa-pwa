"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CustomThemeProvider } from "../theme/ThemeProvider";
import { AuthProvider } from "../contexts/ContextAuth";
import { Header } from "../components/header/Header";
import { useEffect, useState } from "react";
import Loader from "./loading";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metadata: Metadata = {
  title: "Na Faixa",
  description: "Sistema de previsão de gastos de veículos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoaded(true);
    };

    if (document.readyState === "complete") {
      setIsLoaded(true);
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (!isLoaded) {
    return (
      <html lang="pt-br">
        <body>
          <Loader />
        </body>
      </html >
    );
  }

  return (
    <html lang="pt-br">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <CustomThemeProvider>
          <AuthProvider>
            <Header />
            {children}
          </AuthProvider>
        </CustomThemeProvider>
      </body>
    </html>
  );
}
