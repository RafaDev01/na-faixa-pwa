import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CustomThemeProvider } from "../theme/ThemeProvider";
import { AuthProvider } from "../contexts/ContextAuth";
import { Header } from "../components/header/Header";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Na Faixa",
  description: "Sistema de previsão de gastos de veículos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
    </html >
  );
}
