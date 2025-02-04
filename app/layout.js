"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/TogDark/ThemeProvider";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  const pathname = usePathname(); // Ensures Framer Motion tracks route changes

  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground`}
      >
        <ThemeProvider>
          
          <AnimatePresence mode="wait">
            <main className="min-h-screen">{children}</main>
          </AnimatePresence>
        </ThemeProvider>
      </body>
    </html>
  );
}